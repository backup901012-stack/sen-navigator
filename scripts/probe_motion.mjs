// 動畫引擎現場偵錯：入頁面數 .iv、手動重跑 TARGETS query、抓 console 錯誤
import { spawn } from "node:child_process";
const BASE = (process.argv[2] || "http://127.0.0.1:8077/sen-navigator").replace(/\/$/, "");
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const PORT = 9335;
let chrome, ws, msgId = 0;
const pending = new Map();
const logs = [];

function send(method, params = {}) {
  return new Promise((res, rej) => {
    const id = ++msgId;
    pending.set(id, { res, rej });
    ws.send(JSON.stringify({ id, method, params }));
    setTimeout(() => { if (pending.has(id)) { pending.delete(id); rej(new Error("timeout " + method)); } }, 15000);
  });
}
const evalJs = async (expression) => {
  const r = await send("Runtime.evaluate", { expression, returnByValue: true });
  if (r.exceptionDetails) return "EXC: " + (r.exceptionDetails.exception?.description || "").slice(0, 200);
  return r.result?.value;
};

chrome = spawn(CHROME, ["--headless=new", "--disable-gpu", "--no-first-run", `--remote-debugging-port=${PORT}`, "--user-data-dir=D:/tmp_probe_profile", "about:blank"], { stdio: "ignore" });
let target;
for (let i = 0; i < 40; i++) {
  try { const r = await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: "PUT" }); target = await r.json(); break; }
  catch { await new Promise((r) => setTimeout(r, 300)); }
}
ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
ws.onmessage = (ev) => {
  const m = JSON.parse(ev.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id).res(m.result || {}); pending.delete(m.id); }
  if (m.method === "Runtime.consoleAPICalled" && ["error", "warning"].includes(m.params.type))
    logs.push(m.params.args.map((a) => a.value || a.description).join(" ").slice(0, 200));
  if (m.method === "Runtime.exceptionThrown")
    logs.push("EXCEPTION: " + (m.params.exceptionDetails.exception?.description || "").slice(0, 300));
};
await send("Page.enable");
await send("Runtime.enable");
await send("Page.navigate", { url: BASE + "/" });
for (let s = 1; s <= 12; s++) {
  await new Promise((r) => setTimeout(r, 1000));
  const m = await evalJs(`document.documentElement.classList.contains("motion")`);
  console.log(`t=${s}s motion=${m}`);
  if (m === true) break;
}
console.log("window.next:", await evalJs(`typeof window.next`));
console.log("scripts:", await evalJs(`document.scripts.length`));
console.log("資源失敗:", await evalJs(`performance.getEntriesByType("resource").filter(r => r.responseStatus >= 400).map(r => r.name.split("/").pop() + ":" + r.responseStatus).slice(0,5).join(", ") || "無"`));

console.log("html.motion:", await evalJs(`document.documentElement.classList.contains("motion")`));
console.log(".iv 數量:", await evalJs(`document.querySelectorAll(".iv").length`));
console.log("targets 數量:", await evalJs(`document.querySelectorAll('[class~="bg-white"][class~="rounded-2xl"],[class~="bg-white"][class~="rounded-xl"],[class~="bg-brand-50"][class~="rounded-2xl"],[class~="bg-amber-50"][class~="rounded-2xl"],[class~="bg-warm-50"][class~="rounded-2xl"],[class~="bg-brand-900"][class~="rounded-2xl"],[class~="bg-brand-900"][class~="rounded-3xl"],main h2').length`));
console.log("首卡 opacity:", await evalJs(`getComputedStyle(document.querySelector('main [class~="bg-white"][class~="rounded-2xl"]') || document.body).opacity`));
console.log("reduced-motion:", await evalJs(`window.matchMedia("(prefers-reduced-motion: reduce)").matches`));
console.log("main h2 數量:", await evalJs(`document.querySelectorAll("main h2").length`));
console.log("h2 opacity/anim:", await evalJs(`(() => { const h = document.querySelector("main h2"); if (!h) return "無 h2"; const cs = getComputedStyle(h); return cs.opacity + " / " + cs.animationName; })()`));
console.log("樣式表含 motion 規則:", await evalJs(`(() => { let hit = 0; for (const ss of document.styleSheets) { try { for (const r of ss.cssRules) if (r.cssText && r.cssText.includes(".motion")) hit++; } catch {} } return hit; })()`));
console.log("卡片類 targets:", await evalJs(`document.querySelectorAll('main :is([class~="bg-white"][class~="rounded-2xl"],[class~="bg-white"][class~="rounded-xl"])').length`));
console.log("手動跑核心邏輯:", await evalJs(`(() => {
  try {
    const T = '[class~="bg-white"][class~="rounded-2xl"],[class~="bg-white"][class~="rounded-xl"],[class~="bg-brand-50"][class~="rounded-2xl"],[class~="bg-amber-50"][class~="rounded-2xl"],[class~="bg-warm-50"][class~="rounded-2xl"],[class~="bg-brand-900"][class~="rounded-2xl"],[class~="bg-brand-900"][class~="rounded-3xl"],main h2';
    let added = 0;
    document.querySelectorAll(T).forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 1.12 && r.bottom > 0) { el.classList.add("iv"); added++; }
    });
    return "added=" + added + " 之後 .iv=" + document.querySelectorAll(".iv").length;
  } catch (e) { return "EXC " + e.message; }
})()`));
console.log("h2 修復後 opacity:", await evalJs(`(() => { const h = document.querySelector("main h2"); return h ? getComputedStyle(h).opacity : "無"; })()`));
console.log("console 錯誤:", logs.length ? logs.slice(0, 5) : "無");

try { ws.close(); } catch {}
try { chrome.kill(); } catch {}
