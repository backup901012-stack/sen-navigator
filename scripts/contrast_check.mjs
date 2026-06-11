// WCAG 對比度檢查：讀 globals.css 色值、驗站內實際使用的文字/背景組合
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const css = readFileSync(join(dirname(fileURLToPath(import.meta.url)), "..", "web", "app", "globals.css"), "utf8");
const colors = {};
for (const m of css.matchAll(/--color-([a-z0-9-]+):\s*(#[0-9a-fA-F]{6})/g)) colors[m[1]] = m[2];

const lum = (hex) => {
  const v = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
};
const ratio = (a, b) => {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

// [文字, 背景, 需求, 場景]
const PAIRS = [
  ["white", "brand-600", 4.5, "按鈕白字 on brand-600"],
  ["white", "brand-700", 4.5, "hover 白字 on brand-700"],
  ["white", "brand-900", 4.5, "深卡白字 on brand-900"],
  ["white", "warm-500", 4.5, "CTA 白字 on warm-500"],
  ["brand-100", "brand-900", 4.5, "深卡淡字 on brand-900"],
  ["brand-100", "brand-600", 3.0, "hero 副文字 on brand-600（大字）"],
  ["brand-700", "white", 4.5, "粗體標籤 on 白卡"],
  ["brand-700", "brand-50", 4.5, "膠囊字 on brand-50"],
  ["brand-800", "brand-100", 4.5, "徽章字 on brand-100"],
  ["brand-900", "paper", 4.5, "標題 on 底色"],
  ["brand-900", "white", 4.5, "標題 on 白卡"],
  ["brand-600", "white", 3.0, "連結 on 白卡（粗體大）"],
  ["ink", "paper", 4.5, "內文 on 底色"],
  ["ink", "white", 4.5, "內文 on 白卡"],
  ["ink-soft", "white", 4.5, "次要文字 on 白卡"],
  ["ink-soft", "paper", 4.5, "次要文字 on 底色"],
  ["ink-soft", "brand-50", 4.5, "次要文字 on brand-50"],
  ["warm-700", "warm-50", 4.5, "粉徽章字 on warm-50"],
  ["warm-700", "warm-100", 4.5, "粉徽章字 on warm-100"],
  ["warm-700", "white", 4.5, "粉字 on 白卡"],
  ["lilac-700", "lilac-100", 4.5, "FAQ 評估磚字"],
  ["terra-700", "terra-100", 4.5, "FAQ 輪候磚字"],
  ["warm-700", "warm-100", 4.5, "FAQ 服務磚字"],
  ["brand-800", "brand-100", 4.5, "FAQ 基礎磚字"],
];

let bad = 0;
for (const [fg, bg, need, label] of PAIRS) {
  if (!colors[fg] || !colors[bg]) { console.log(`  SKIP ${label}（缺 ${fg}/${bg}）`); continue; }
  const r = ratio(colors[fg], colors[bg]);
  const okFlag = r >= need;
  if (!okFlag) bad++;
  console.log(`  ${okFlag ? "PASS" : "FAIL"} ${label}: ${r.toFixed(2)}（需 ${need}）`);
}
console.log(bad ? `\n${bad} 組不達標` : "\n全部組合達標");
process.exitCode = bad ? 1 : 0;
