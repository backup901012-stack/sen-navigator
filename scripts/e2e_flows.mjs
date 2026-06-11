// 真瀏覽器逐功能 E2E：Chrome headless + CDP（Node 22+ 原生 WebSocket、零依賴）
// 用法：node scripts/e2e_flows.mjs <baseUrl>   例 http://127.0.0.1:8077/sen-navigator
import { spawn } from "node:child_process";

const BASE = (process.argv[2] || "").replace(/\/$/, "");
if (!BASE) { console.error("用法: node e2e_flows.mjs <baseUrl>"); process.exit(2); }

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const PORT = 9333;
let chrome, ws, msgId = 0;
const pending = new Map();
let pass = 0, fail = 0;
const failures = [];

function ok(name, cond, detail = "") {
  if (cond) { pass++; console.log(`  PASS ${name}`); }
  else { fail++; failures.push(`${name} ${detail}`); console.log(`  FAIL ${name} ${detail}`); }
}

function send(method, params = {}) {
  return new Promise((res, rej) => {
    const id = ++msgId;
    pending.set(id, { res, rej });
    ws.send(JSON.stringify({ id, method, params }));
    setTimeout(() => { if (pending.has(id)) { pending.delete(id); rej(new Error(`CDP timeout: ${method}`)); } }, 20000);
  });
}

async function evalJs(expression) {
  const r = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  if (r.exceptionDetails) throw new Error("頁內 JS 錯誤: " + (r.exceptionDetails.exception?.description || "").slice(0, 300));
  return r.result?.value;
}

async function waitFor(expr, timeout = 12000) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeout) {
    if (await evalJs(`!!(${expr})`)) return true;
    await new Promise((r) => setTimeout(r, 250));
  }
  return false;
}

// 以可見文字點按鈕（React 原生 click 事件可觸發 synthetic handler）
const clickByText = (text, selector = "button") =>
  evalJs(`(() => {
    const els = [...document.querySelectorAll(${JSON.stringify(selector)})];
    const el = els.find(e => e.textContent.replace(/\\s+/g,"").includes(${JSON.stringify(text)}.replace(/\\s+/g,"")));
    if (!el) return false;
    el.click(); return true;
  })()`);

const bodyHas = (text) => evalJs(`document.body.innerText.includes(${JSON.stringify(text)})`);

// 點擊後驗證頁面狀態有變、未變就重試（防 hydration 未完成時的無效點擊）
async function clickStep(text, expectExpr, tries = 10) {
  for (let i = 0; i < tries; i++) {
    await clickByText(text);
    const t0 = Date.now();
    while (Date.now() - t0 < 800) {
      if (await evalJs(`!!(${expectExpr})`)) return true;
      await new Promise((r) => setTimeout(r, 150));
    }
  }
  return false;
}
const seeText = (t) => `document.body.innerText.includes(${JSON.stringify(t)})`;

async function nav(path) {
  await send("Page.navigate", { url: BASE + path });
  await waitFor(`document.readyState === "complete" && document.querySelector("main, body")`);
  await new Promise((r) => setTimeout(r, 600)); // hydration 緩衝
}

async function main() {
  chrome = spawn(CHROME, [
    `--headless=new`, `--disable-gpu`, `--no-first-run`,
    `--remote-debugging-port=${PORT}`, `--user-data-dir=D:/tmp_e2e_profile`,
    "about:blank",
  ], { stdio: "ignore" });

  // 等 CDP 端口起來
  let target;
  for (let i = 0; i < 40; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: "PUT" });
      target = await r.json(); break;
    } catch { await new Promise((r) => setTimeout(r, 300)); }
  }
  if (!target) throw new Error("Chrome CDP 起不來");
  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  ws.onmessage = (ev) => {
    const m = JSON.parse(ev.data);
    if (m.id && pending.has(m.id)) { pending.get(m.id).res(m.result || {}); pending.delete(m.id); }
  };
  await send("Page.enable");
  await send("Runtime.enable");

  // ───── ① /match 主流程（2-6 歲輕度、讀緊 KG、speech+motor、政府為主）─────
  console.log("\n[match] 2-6 歲輕度 + 政府軌");
  await nav("/match/");
  await waitFor(seeText("孩子現時年齡"));
  await clickStep("2 至 6 歲", seeText("專業評估"));
  await clickStep("已評估：輕度需要", seeText("幼稚園"));
  await clickStep("有，已入學", seeText("可多選"));
  await clickStep("語言／溝通", `document.querySelector('button[aria-pressed="true"]')`);
  await clickByText("大小肌肉／動作");
  await clickStep("下一題", seeText("現階段你傾向"));
  await clickStep("以政府資助服務為主", seeText("為孩子整理的方向"));
  ok("出結果頁", await bodyHas("為孩子整理的方向"));
  ok("推薦 OPRS（已入學輕度）", await bodyHas("到校學前康復服務"));
  ok("推薦 IP", await bodyHas("兼收計劃"));
  ok("推薦言語治療", await bodyHas("言語治療"));
  ok("推薦 OT/PT", await bodyHas("職業／物理治療"));
  ok("motor 觸發中醫輔助", await bodyHas("中醫輔助"));
  ok("🔴 修復驗證：gov 都見到 TSP", await bodyHas("學習訓練津貼"));

  // ───── ② /match over6 邊緣案例 ─────
  console.log("\n[match] over6 邊緣案例");
  await clickStep("重新配對", seeText("孩子現時年齡"));
  await clickStep("6 歲或以上", seeText("專業評估"));
  await clickStep("已評估：輕度需要", seeText("幼稚園"));
  await clickStep("有，已入學", seeText("可多選"));
  await clickStep("下一題", seeText("現階段你傾向")); // 唔揀任何需求
  await clickStep("以政府資助服務為主", seeText("為孩子整理的方向"));
  ok("over6 有結果（SENCO 卡）", await waitFor(`document.body.innerText.includes("SENCO")`));
  ok("over6 顯示範圍註明", await bodyHas("聚焦 0–6 歲"));
  ok("🔴 修復驗證：over6 不出 TSP", !(await bodyHas("學習訓練津貼")));

  // ───── ③ /screening M-CHAT 三種計分情境 ─────
  console.log("\n[screening] M-CHAT 計分");
  await nav("/screening/");
  // 情境 A：全部答「最佳答案」→ 0 分低風險（2/5/12 答否、其餘答是）
  await evalJs(`(() => {
    const cards = [...document.querySelectorAll("main .rounded-2xl")].filter(c => c.querySelector("button"));
    return true;
  })()`);
  const answerAll = async (yesNos) => {
    // yesNos: fn(題號) => "是"/"否"
    await evalJs(`(() => {
      const blocks = [...document.querySelectorAll("main div.rounded-2xl")].filter(b => {
        const n = b.querySelector("span");
        return n && /^\\d+$/.test(n.textContent.trim()) && b.querySelectorAll("button").length >= 2;
      });
      const pickMap = ${yesNos};
      for (const b of blocks) {
        const no = parseInt(b.querySelector("span").textContent.trim(), 10);
        const want = pickMap(no);
        const btn = [...b.querySelectorAll("button")].find(x => x.textContent.trim() === want);
        if (btn) btn.click();
      }
      return blocks.length;
    })()`);
  };
  await answerAll(`(no) => ([2,5,12].includes(no) ? "否" : "是")`);
  await clickByText("查看篩查結果");
  ok("最佳答案 → 低風險 0-2", await waitFor(`document.body.innerText.includes("低風險")`));
  await clickByText("重新篩查");
  await waitFor(`document.body.innerText.includes("仲有")`);
  // 情境 B：全部答「是」→ 風險 = 2,5,12 三題 → 中等風險
  await answerAll(`() => "是"`);
  await clickByText("查看篩查結果");
  ok("全部答是 → 3 分中等風險", await waitFor(`document.body.innerText.includes("中等風險")`));
  await clickByText("重新篩查");
  await waitFor(`document.body.innerText.includes("仲有")`);
  // 情境 C：全部答「否」→ 17 題風險 → 高風險
  await answerAll(`() => "否"`);
  await clickByText("查看篩查結果");
  ok("全部答否 → 17 分高風險", await waitFor(`document.body.innerText.includes("高風險")`));

  // ───── ④ /planner localStorage 全鏈路 ─────
  console.log("\n[planner] 規劃清單");
  await nav("/planner/");
  await evalJs(`(() => {
    const inp = document.querySelector('input[placeholder*="自訂待辦"]');
    if (!inp) return false;
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    setter.call(inp, "致電測試中心查詢");
    inp.dispatchEvent(new Event("input", { bubbles: true }));
    return true;
  })()`);
  // 空清單時冇輸入框 — 先確認空狀態再經 match 加項？直接驗：空狀態 → 用 localStorage API 加 → reload
  const hasInput = await evalJs(`!!document.querySelector('input[placeholder*="自訂待辦"]')`);
  if (!hasInput) {
    ok("空清單顯示引導", await bodyHas("清單仲係空"));
    await evalJs(`localStorage.setItem("sen-plan-v1", JSON.stringify([{id:"t1",title:"致電測試中心查詢",kind:"step",done:false,addedAt:Date.now()}]))`);
    await nav("/planner/");
  } else {
    await clickByText("加入");
  }
  ok("項目顯示", await waitFor(`document.body.innerText.includes("致電測試中心查詢")`));
  await nav("/planner/"); // 重載驗持久化
  ok("重載後仍在（localStorage 持久）", await bodyHas("致電測試中心查詢"));
  await evalJs(`(() => { const b=[...document.querySelectorAll('button[aria-label="切換完成"]')][0]; b && b.click(); return !!b; })()`);
  ok("可標記完成", await waitFor(`document.body.innerText.includes("已完成 1 / ")`));
  await evalJs(`(() => { const b=[...document.querySelectorAll('button[aria-label="移除"]')][0]; b && b.click(); return !!b; })()`);
  ok("移除後回空狀態", await waitFor(`document.body.innerText.includes("清單仲係空")`));

  // ───── ⑤ /faq AiChat（修復驗證）─────
  console.log("\n[faq] AI 助理");
  await nav("/faq/");
  await clickByText("積極尋找資源");
  await waitFor(`document.body.innerText.includes("問我評估、政府服務")`);
  const sendMsg = async (t) => {
    await evalJs(`(() => {
      const inp = document.querySelector('input[aria-label="輸入問題"]');
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
      setter.call(inp, ${JSON.stringify(t)});
      inp.dispatchEvent(new Event("input", { bubbles: true }));
      return true;
    })()`);
    await clickByText("傳送");
    await new Promise((r) => setTimeout(r, 900)); // 400ms 思考 + 緩衝
  };
  await sendMsg("qwxyz 亂入測試");
  ok("🔴 修復驗證：無關輸入回 fallback", await bodyHas("我搵唔到最啱嘅答案"));
  await sendMsg("輪候要等幾耐");
  ok("相關問題回實質答案（學習訓練津貼）", await bodyHas("學習訓練津貼"));

  // ───── ⑥ /directory 搜尋與篩選 ─────
  console.log("\n[directory] 資源目錄");
  await nav("/directory/");
  const totalCount = await evalJs(`parseInt(document.body.innerText.match(/共\\s*(\\d+)\\s*項資源/)?.[1] || "0", 10)`);
  ok(`初始有資源（${totalCount} 項）`, totalCount > 10);
  await evalJs(`(() => {
    const inp = document.querySelector('input[type="search"]');
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    setter.call(inp, "言語");
    inp.dispatchEvent(new Event("input", { bubbles: true }));
    return true;
  })()`);
  await waitFor(`(() => { const m = document.body.innerText.match(/共\\s*(\\d+)\\s*項資源/); return m && parseInt(m[1], 10) < ${totalCount} && parseInt(m[1], 10) > 0; })()`, 5000);
  const kwCount = await evalJs(`parseInt(document.body.innerText.match(/共\\s*(\\d+)\\s*項資源/)?.[1] || "0", 10)`);
  ok(`搜尋「言語」有效縮小（${kwCount} 項）`, kwCount > 0 && kwCount < totalCount);

  // ───── ⑥b /consult 諮詢摘要 ─────
  console.log("\n[consult] 諮詢摘要");
  await nav("/consult/");
  await evalJs(`(() => {
    const setVal = (el, v) => {
      const proto = el.tagName === "TEXTAREA" ? window.HTMLTextAreaElement : window.HTMLInputElement;
      Object.getOwnPropertyDescriptor(proto.prototype, "value").set.call(el, v);
      el.dispatchEvent(new Event("input", { bubbles: true }));
    };
    const inputs = [...document.querySelectorAll("input")].filter(i => i.type !== "search");
    if (inputs[0]) setVal(inputs[0], "3 歲 2 個月");
    if (inputs[1]) setVal(inputs[1], "語言發展");
    const ta = document.querySelector("textarea");
    if (ta) setVal(ta, "想知點開始評估");
    return inputs.length;
  })()`);
  await clickStep("整理我的諮詢摘要", seeText("你的諮詢摘要"));
  ok("摘要生成", await bodyHas("你的諮詢摘要"));
  ok("摘要含輸入內容", await bodyHas("3 歲 2 個月"));

  // ───── ⑦ /sccc 分區篩選 ─────
  console.log("\n[sccc] 分區輪候");
  await nav("/sccc/");
  await waitFor(`document.body.innerText.includes("全部分區")`);
  await clickStep("屯門", `[...document.querySelectorAll("h2")].some(h => h.textContent.includes("屯門")) && ![...document.querySelectorAll("h2")].some(h => h.textContent.includes("沙田"))`);
  const tuenMun = await evalJs(`[...document.querySelectorAll("h2")].some(h => h.textContent.includes("屯門") && /\\d+ 間/.test(h.textContent))`);
  const shatin = await evalJs(`[...document.querySelectorAll("h2")].some(h => h.textContent.includes("沙田"))`);
  ok("選屯門後顯示屯門組", tuenMun);
  ok("選屯門後不顯示沙田組", !shatin);

  console.log(`\n══ 結果：PASS ${pass} / FAIL ${fail} ══`);
  if (failures.length) failures.forEach((f) => console.log("  ✗ " + f));
  process.exitCode = fail ? 1 : 0;
}

main().catch((e) => { console.error("E2E 異常:", e.message); process.exitCode = 1; })
  .finally(() => { try { ws?.close(); } catch {} try { chrome?.kill(); } catch {} });
