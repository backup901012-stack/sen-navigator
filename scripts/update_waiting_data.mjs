// 自動更新動態數據：抓社署兩個官方 CSV → 驗證 → 寫 web/data/waitingLive.json
// 來源（每月更新、UTF-16LE、tab 分隔）：
//   1) 輪候人數   https://www.swd.gov.hk/datagovhk/rm/Waiting-list-for-day-service.csv
//   2) SCCC 逐間  https://www.swd.gov.hk/datagovhk/rm/SCCC.csv
// 驗證不過 = exit 1 不寫檔（CI 紅燈、不污染網站）。
import { writeFileSync, readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "web", "data", "waitingLive.json");

const WAITING_URL = "https://www.swd.gov.hk/datagovhk/rm/Waiting-list-for-day-service.csv";
const SCCC_URL = "https://www.swd.gov.hk/datagovhk/rm/SCCC.csv";

async function fetchUtf16(url) {
  const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 sen-navigator-data-bot" } });
  if (!r.ok) throw new Error(`${url} HTTP ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  return buf.toString("utf16le").replace(/^﻿/, "");
}

/** tab 分隔 CSV 解析（支援雙引號欄含換行/引號） */
function parseTsv(text) {
  const rows = [];
  let row = [], cell = "", inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else inQ = false; }
      else cell += c;
    } else if (c === '"') inQ = true;
    else if (c === "\t") { row.push(cell); cell = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(cell); cell = "";
      if (row.some((x) => x.trim() !== "")) rows.push(row);
      row = [];
    } else cell += c;
  }
  if (cell !== "" || row.length) { row.push(cell); if (row.some((x) => x.trim() !== "")) rows.push(row); }
  return rows;
}

/** "30.4.2026" → "2026-04-30" */
function toIso(d) {
  const m = String(d).trim().match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (!m) throw new Error(`日期格式異常: ${d}`);
  return `${m[3]}-${m[2].padStart(2, "0")}-${m[1].padStart(2, "0")}`;
}

const fail = (msg) => { console.error("❌ 驗證失敗:", msg); process.exit(1); };

// ── 1) 輪候人數 ──
const wRows = parseTsv(await fetchUtf16(WAITING_URL));
const dataRows = wRows.filter((r) => /^\d{1,2}\.\d{1,2}\.\d{4}$/.test((r[0] || "").trim()));
if (dataRows.length < 15) fail(`輪候 CSV 資料列僅 ${dataRows.length}（預期 ≥15 區）`);
const asOf = toIso(dataRows[0][1] || dataRows[0][0]);
const num = (r, i) => {
  const v = parseInt(String(r[i]).replace(/[^\d-]/g, ""), 10);
  if (Number.isNaN(v) || v < 0) fail(`數字欄異常: 第 ${i} 欄「${r[i]}」(${r[4]})`);
  return v;
};
const sum = (i) => dataRows.reduce((s, r) => s + num(r, i), 0);
const eetcOnly = sum(6) + sum(8);
const eetcWithOther = sum(7) + sum(9);
const ip = sum(10) + sum(11);
const sccc = sum(12) + sum(13);
if (eetcOnly + eetcWithOther === 0 || sccc === 0) fail("加總為 0、來源疑變 schema");

// ── 2) SCCC 逐間 ──
const sRows = parseTsv(await fetchUtf16(SCCC_URL));
const centreRows = sRows.filter((r) => /^P[RS]\d+/i.test((r[4] || "").trim()));
if (centreRows.length < 50 || centreRows.length > 80) fail(`SCCC 間數異常: ${centreRows.length}`);
const scccUpdate = toIso(centreRows[0][2]);
const centres = centreRows.map((r) => {
  const code = r[4].trim();
  const lastApp = (r[8] || "").trim().replace(/^"|"$/g, "");
  if (lastApp && lastApp !== "--" && !/^\d{1,2}\/\d{4}$/.test(lastApp)) fail(`${code} lastApp 格式異常:「${lastApp}」`);
  return { code, lastApp: /^\d{1,2}\/\d{4}$/.test(lastApp) ? lastApp.padStart(7, "0") : lastApp };
});

// ── 對照基準（變動偵測 + 新中心警示）──
let prev = null;
if (existsSync(OUT)) { try { prev = JSON.parse(readFileSync(OUT, "utf8")); } catch {} }

const out = {
  source: { waiting: WAITING_URL, sccc: SCCC_URL },
  asOf,
  eetc: { only: eetcOnly, withOther: eetcWithOther, total: eetcOnly + eetcWithOther },
  ip,
  sccc,
  scccUpdate,
  scccCentres: centres,
  generatedAt: new Date().toISOString().slice(0, 10),
};

writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");
console.log(`✅ waitingLive.json 已更新`);
console.log(`   截至 ${asOf}｜EETC ${out.eetc.total}（only ${eetcOnly} + 同時 ${eetcWithOther}）｜IP ${ip}｜SCCC ${sccc}｜逐間 ${centres.length} 間（${scccUpdate}）`);
if (prev && prev.asOf === asOf) console.log("   （與上次同月、數字未變屬正常）");
