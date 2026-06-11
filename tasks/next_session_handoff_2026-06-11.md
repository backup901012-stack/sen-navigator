# 接力檔 — SEN 小孩導航員（2026-06-12 00:55 更新）

> 額度近盡（~03:40 重置）。排程 03:55 喚醒。老闆指令：「給我全自動完成」+ 兩條新任務。
> v1.2.0（Clay Doh 色系+粉圓體）已上線驗證完畢、勿動。

## 狀態：✅ DONE（2026-06-12 01:2x — A 數據自動化 v1.2.1 + B FAQ 圖示化 v1.2.2 + C 動畫層 v1.3.0 全部上線、production E2E 26/26、線上驗證 v1.3.0/彩磚/JSON-LD/動畫 CSS 全 True、續工 cron 已刪）

## 工作線 C：全站 UI 動畫化重構（老闆 00:5x 新指令、B 之後做）

> 老闆原話：「所有UI全面重新設計，要有動畫感！依據人類視角、盡量有視覺提示的動畫邏輯、溫馨小孩家長感覺」「研究幼稚園網頁/卡通動畫/互動式UI、給我全部重作」

- [ ] C1 研究：WebSearch/WebFetch 幼稚園網站設計案例 + 兒童品牌動效 + cartoon UI 互動模式（scroll reveal/吉祥物/squish 按鈕/staggered 進場/視線引導）
- [ ] C2 動效系統（CSS-first 零新依賴、必守 prefers-reduced-motion）：
      ・Reveal 客戶端元件（IntersectionObserver、fade-up/pop-in、stagger delay）全站段落進場
      ・clay squish/wobble（hover scaleX/Y 果凍感）、按鈕 press squash 加強
      ・hero 背景粘土暈染浮動呼吸動畫、logo 導字輕微 bob
      ・視覺提示：CTA 微 pulse、箭咀 nudge、手風琴 chevron 彈跳、進度條 springy
      ・章節圖示 hover wiggle、卡片 pop-in
- [ ] C3 逐頁套 Reveal + 動效 class（24 頁）、保持資訊架構不變（只重構視覺/動效層）
- [ ] C4 驗證全套：對比/溢出/身份/E2E 26 斷言/截圖目視（桌面+手機）
- [ ] C5 version bump + push + production 驗證 + 截圖報告

## 工作線 A：動態數據全自動更新（老闆：所有動態數據要自動更新網頁）

**架構（已拍板）**：官方 CSV → 排程 GitHub Actions 每月抓數 → 生成 JSON → 有變自動 commit → `gh workflow run deploy.yml` 觸發重部署（注意：GITHUB_TOKEN push 不會自動觸發其他 workflow、必須用 gh workflow run）。

**兩個官方數據源（都已實測 200、UTF-16 tab 分隔）**：
1. 輪候人數：`https://www.swd.gov.hk/datagovhk/rm/Waiting-list-for-day-service.csv`（每月更新、含截至日期欄）
2. SCCC 逐間最後獲篩選日期：`https://www.swd.gov.hk/datagovhk/rm/SCCC.csv`（剛確認存在！下載驗 schema 後對接 scccCentres.ts）

**步驟**：
- [x] A1 SCCC.csv schema 確認（61 行、c4=code PR/PS 兩款、c8=lastApp 三重引號、c2=更新日 30.4.2026）
- [x] A2 `scripts/update_waiting_data.mjs` 寫好跑通：輸出 EETC 1402(778+624)/IP 548/SCCC 1549/asOf 2026-04-30/57 間；**57 個 code 與 scccCentres.ts 100% 配對**（雙向 0 漏）
- [ ] A3 改 `web/data/governmentServices.ts`：waiting 字串改由 waitingLive.json 數字+asOf 插值（模板化）；`web/data/scccCentres.ts`：lastApp/SCCC_UPDATE 由 JSON 覆蓋（保留現有檔作 fallback 基準）
- [ ] A4 寫 `.github/workflows/update-data.yml`：cron 每月 3 號 + 8 號（雙保險）香港早上（UTC 23:xx 前一天）+ workflow_dispatch；跑 A2 腳本 → 有 diff → github-actions[bot] commit + push → `gh workflow run deploy.yml`（env GH_TOKEN=github.token、permissions contents:write actions:write）
- [ ] A5 本地跑 A2 驗證輸出數字 = 現站數字（EETC 1402/IP 548/SCCC 1549、asOf 2026-04-30）；build 通過
- [ ] A6 push 後 `gh workflow run update-data.yml` 實測一次端到端（跑完 deploy 自動觸發、線上數字不變但管線證實）

## 工作線 B：FAQ 圖示化改版（老闆出多元智能彩輪圖做風格參考）

**設計方向（自動執行、不問）**：
- [ ] B1 上網查 FAQ 圖示化/分類視覺最佳實踐（icon category grid + accordion 保留）
- [ ] B2 改 /faq：頂部加「彩色粘土圖示分類格」——8 個範疇磚（全部/基礎認識/評估/制度/服務/費用/輪候/自費），每磚一個大 emoji/SVG 圖示 + Clay Doh 色（薄荷/粉/紫/陶土/黃/藍輪替、似多元智能彩輪），點磚 = 篩選（接現有 cat state）；每條問題加範疇小圖示；保留搜尋+手風琴
- [ ] B3 「最權威」：加 **schema.org FAQPage JSON-LD**（Google rich results、SEO 權威化）——在 faq page 服務端輸出 <script type="application/ld+json"> 全部 Q/A
- [ ] B4 對比度過 contrast_check（新色磚文字）、375px 無溢出、E2E faq 流程照過
- [ ] B5 version 1.3.0 + build + push + production 驗證 + 截圖

## 收尾（兩線都完）
- [ ] push log + memory 更新、本檔標 ✅ DONE、刪續工 cron、向老闆報告（附證據）

## 關鍵備忘
- push：`git -c credential.helper= -c "credential.helper=!gh auth git-credential" push origin main`
- build env：PAGES_EXPORT=1 BASE_PATH=sen-navigator NEXT_PUBLIC_SITE_URL=https://backup901012-stack.github.io/sen-navigator
- ⚠️ 改 JSON/檔案一律用 Write/Edit 工具（PS5.1 Set-Content 會加 BOM、上次炸過 build）
- 本地測 server：junction D:\tmp_e2e_root\sen-navigator → web\out、python -m http.server 8077
- E2E：node scripts/e2e_flows.mjs <base>；溢出：mobile_overflow_check.mjs；身份：page_identity_check.py；對比：contrast_check.mjs
