# 接力檔 — SEN 小孩導航員（2026-06-11 23:56 更新）

> 額度 98% 用盡、約 03:40 重置。排程會在 03:50 喚醒繼續。老闆指令：「給我全自動完成」、做完先停。

## 狀態：✅ DONE（2026-06-12 00:4x 全部完成：v1.2.0 上線、production E2E 26/26、線上截圖確認、續工 cron 已刪）

## 任務：全站改 Clay Doh 粘土色系 + 兒童化圓體字（老闆出圖拍板）
- 色系（已半完成）：Plasticine 薄荷主色 / Bubble Gum 粉行動色 / Candlewax 紫 + Terracota 陶土點綴 / Translucent 奶白底
- 字體（未做）：換兒童化圓體、首選 justfont 開源「粉圓體」（Google Fonts 名 **Huninn**）

## 已完成（不要重做）
- [x] globals.css @theme 全色板已換（brand=薄荷 / warm=泡泡糖粉 / 新增 lilac + terra / paper=#faf6ef / ink=#2f2b33）
- [x] clay 陰影 rgba(17,105,110,*)→rgba(30,70,60,*)、card-hover 同步、背景三團暈染（薄荷/粉/紫）
- [x] 之前的逐功能核對 v1.1.5 已上線（E2E 26/26、勿動）

## 待做（按序、全自動、不問選項）
- [ ] ① 字體：查 web/app/layout.tsx 現時點載入 LXGW WenKai（Google Fonts link 或 next/font）→ 換 Huninn
      ・先驗證 `https://fonts.googleapis.com/css2?family=Huninn&display=swap` 回 200 有 TC unicode-range
      ・若 Google Fonts 無 Huninn → 後備：fontsource/CDN jsdelivr `jf-openhuninn` 或保留 LXGW + 圓體 fallback、誠實記錄
      ・globals.css --font-sans 改 "Huninn" 開頭、fallback 保留 Noto Sans TC 等
- [ ] ② 對比度驗證：寫 scripts/contrast_check.mjs 算 WCAG 對比（關鍵組合：white文字 on brand-600/warm-500、brand-700/warm-700 on white/brand-50/warm-50、ink/ink-soft on paper/white、brand-100 on brand-900）全部 ≥4.5（大字 ≥3）、唔夠就微調 globals.css 色值
- [ ] ③ build（PAGES_EXPORT=1 BASE_PATH=sen-navigator NEXT_PUBLIC_SITE_URL=https://backup901012-stack.github.io/sen-navigator）
- [ ] ④ 截圖目視（headless Chrome --screenshot、home/services/match/parents、桌面+手機）— 用 Read 工具睇圖、確認粘土色+圓體生效、冇爆版
- [ ] ⑤ mobile_overflow_check.mjs 24 頁 0 溢出 + page_identity_check.py 本地 25/25
- [ ] ⑥ version 1.2.0 + lock 同步 + commit + push（用 `git -c credential.helper= -c "credential.helper=!gh auth git-credential" push origin main`）→ Actions 自動部署
- [ ] ⑦ production 驗證：footer v1.2.0 + e2e_flows.mjs 26/26 + page_identity 25/25
- [ ] ⑧ push log + memory 更新、本檔標 ✅ DONE、刪除續工 cron、向老闆報告（附截圖證據）

## 注意
- 本地 server 跑法：`New-Item -ItemType Junction D:\tmp_e2e_root\sen-navigator -Target web\out`、`python -m http.server 8077`（背景）、測完刪 junction
- Chrome 截圖經 Bash 跑（PowerShell 啟動輸出會全失）；量溢出用 CDP device metrics（--window-size 截圖有偽影）
- 老闆已下「全部包括性授權」：直接做、不問、做完報告
