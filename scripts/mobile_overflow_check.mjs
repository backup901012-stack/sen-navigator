// 375px 視口逐頁檢查水平溢出：scrollWidth > innerWidth = 爆版
import { spawn } from "node:child_process";

const BASE = (process.argv[2] || "").replace(/\/$/, "");
const ROUTES = ["/", "/screening/", "/services/", "/sccc/", "/grading/", "/cas/", "/sensory/", "/brain/", "/milestones/", "/odd/", "/ot-confidence/", "/intelligences/", "/tcm/", "/journey/", "/pathways/", "/directory/", "/heephong-asd/", "/match/", "/parents/", "/prc/", "/planner/", "/faq/", "/consult/", "/resources/"];

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const PORT = 9334;
let chrome, ws, msgId = 0;
const pending = new Map();

function send(method, params = {}) {
  return new Promise((res, rej) => {
    const id = ++msgId;
    pending.set(id, { res, rej });
    ws.send(JSON.stringify({ id, method, params }));
    setTimeout(() => { if (pending.has(id)) { pending.delete(id); rej(new Error("timeout " + method)); } }, 20000);
  });
}
const evalJs = async (expression) => (await send("Runtime.evaluate", { expression, returnByValue: true })).result?.value;

async function main() {
  chrome = spawn(CHROME, ["--headless=new", "--disable-gpu", "--no-first-run", `--remote-debugging-port=${PORT}`, "--user-data-dir=D:/tmp_overflow_profile", "about:blank"], { stdio: "ignore" });
  let target;
  for (let i = 0; i < 40; i++) {
    try { const r = await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: "PUT" }); target = await r.json(); break; }
    catch { await new Promise((r) => setTimeout(r, 300)); }
  }
  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  ws.onmessage = (ev) => { const m = JSON.parse(ev.data); if (m.id && pending.has(m.id)) { pending.get(m.id).res(m.result || {}); pending.delete(m.id); } };
  await send("Page.enable");
  await send("Emulation.setDeviceMetricsOverride", { width: 375, height: 812, deviceScaleFactor: 2, mobile: true });

  let bad = 0;
  for (const r of ROUTES) {
    await send("Page.navigate", { url: BASE + r });
    const t0 = Date.now();
    while (Date.now() - t0 < 8000) {
      if (await evalJs(`document.readyState === "complete"`)) break;
      await new Promise((x) => setTimeout(x, 200));
    }
    await new Promise((x) => setTimeout(x, 500));
    const m = await evalJs(`JSON.stringify({ sw: document.documentElement.scrollWidth, iw: window.innerWidth })`);
    const { sw, iw } = JSON.parse(m);
    if (sw > iw + 1) {
      bad++;
      // 找出最闊的肇事元素
      const culprit = await evalJs(`(() => {
        let worst = null, max = window.innerWidth;
        for (const el of document.querySelectorAll("*")) {
          const r = el.getBoundingClientRect();
          if (r.right > max + 1) { max = r.right; worst = el.tagName + "." + String(el.className).split(" ").slice(0,3).join(".") ; }
        }
        return worst || "?";
      })()`);
      console.log(`  OVERFLOW ${r}  scrollWidth=${sw} (視口 ${iw})  肇事: ${culprit}`);
    } else {
      console.log(`  OK ${r} (${sw})`);
    }
  }
  console.log(bad ? `\n${bad} 頁溢出` : "\n全部 24 頁無水平溢出");
  process.exitCode = bad ? 1 : 0;
}
main().catch((e) => { console.error("異常:", e.message); process.exitCode = 1; })
  .finally(() => { try { ws?.close(); } catch {} try { chrome?.kill(); } catch {} });
