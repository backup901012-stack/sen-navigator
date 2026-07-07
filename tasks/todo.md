# SEN 小孩導航員 — 專案 TODO

> 建立：2026-06-07
> 目標：香港 SEN 兒童學前資源導航平台（整合政府學前資源分級制度 + 自費機構訓練課程）
> 模式參考：賽馬會656照顧者好幫搜「照顧導航員」5 大服務模式
> 技術：Next.js (App Router) + TypeScript + Tailwind + Vercel
> 對象：SEN 家長為主、繁體中文（港式用語）

## 決策（已與老闆確認 2026-06-07）
- [x] 資料來源：我研究 + 整理官方資料（SWD/EDB/衞生署 CAS）
- [x] 範圍：完整互動平台（5 大服務模式）
- [x] 技術：Next.js + Vercel
- [x] 對象/語言：SEN 家長、繁體中文

## Phase 1：研究（零幻覺鐵律）— ✅ 完成
- [x] 背景 agent 研究香港 SEN 學前官方資源 + 分級制度（每筆附來源）
- [x] 關鍵發現：香港無對外公布的統一「等級」分級 → 如實呈現三機制
- [x] 整理成結構化資料檔（data/*.ts，含 sources + confidence）

## Phase 2：架構與骨架 — ✅ 完成
- [x] Node v24 / npm 11 環境確認
- [x] scaffold Next.js 16 + TS + Tailwind v4（web/）
- [x] 設計系統（globals.css 溫暖無障礙配色）
- [x] 資料模型 lib/types.ts、導覽 lib/site.ts
- [x] 頁首 SiteHeader、頁尾 SiteFooter、共用 UI 元件

## Phase 3：5 大服務模組 — ✅ 完成
- [x] ① 解答查詢 /faq：FAQ 搜尋 + AI 助理（/api/chat，有 key 用 Claude、無 key fallback）
- [x] ② 諮詢 /consult：整理摘要 + 直接聯絡機構
- [x] ③ 資源規劃 /directory：搜尋 + 類型/收費篩選
- [x] ④ 服務配對 /match：5 題問卷 → 推薦方向
- [x] ⑤ 紀錄跟進 /planner：localStorage 規劃清單 + 列印

## Phase 4：內容與資料填充 — ✅ 完成
- [x] /services 政府四大服務（OPRS/EETC/SCCC/IP，附官方連結）
- [x] /grading 分級制度三機制 + CAS 評估 + SEN 9 類別
- [x] /journey 申請流程地圖六步
- [x] /directory + 自費課程收費（消委會來源 / 標待確認）
- [x] /resources 權威連結清單

## Phase 5：品質與交付
- [x] 本機 build 通過（npm run build，TypeScript 0 error，14 路由）
- [x] 實測：10 頁全 200、中文正確顯示、AI fallback 正常
- [x] 來源標註完整、底部敏感聲明（非官方、僅資訊整理）
- [x] 本機 git commit
- [x] 推 GitHub backup901012-stack → https://github.com/backup901012-stack/sen-navigator
- [x] 專業度提升：favicon/icon、SEO metadata、sitemap、robots、自訂 404
- [x] 外部審查：Gemini L4（採納 a11y+限流 3 項、拒 model 倒退翻盤）；Codex L3 額度爆 SKIP
- [🔴 帳號方針] 所有專案一律用 backup901012 部署、不再用 cbe566
- [x] 清走 cbe566：刪除 cbe566 Vercel 專案 + 移除本機連結 + vercel logout
- [x] ✅ 正式公開上線（GitHub Pages，backup901012-stack）
       👉 https://backup901012-stack.github.io/sen-navigator/
- [x] repo 設為公開（免費 Pages 需公開）、推 gh-pages 分支、啟用 Pages
- [x] 線上驗證：首頁 / services / grading 皆 200、繁中正常
- [x] 一鍵部署腳本 scripts/deploy-pages.sh（日後更新用）

## 架構調整（為靜態上線）
- 移除 /api/chat 動態路由 → AiChat 改純前端 FAQ 知識庫關鍵字比對
- next.config 靜態匯出（PAGES_EXPORT + basePath /sen-navigator）
- 日後若要接真 Claude AI：需具伺服器的部署（如 backup901012 Vercel）+ 還原 api 路由

## 誠實狀態（honest-progress-reporting）
- ✅ L1 規劃 / L2 工具 / L3 端到端（build+200+實測） 完成
- ✅ L4 Production：GitHub Pages 上線（2026-06-07）+ GitHub Actions 自動部署（2026-06-11 啟用、push main 即部署、含產物煙霧測試）
- v1 = 前端互動平台 + 有來源研究資料；登入個案管理 / 諮詢後端 / 真 AI key / 即時 data.gov.hk = Phase 2

## 功能核對矩陣（2026-06-11 逐一核對、v1.1.5）
> 方法：9 個互動元件逐個源碼邏輯審 + 真瀏覽器 CDP 逐流程點擊驗證（scripts/e2e_flows.mjs、26 條斷言）+ 24 路由頁面身份檢查（scripts/page_identity_check.py、25 項）

| 功能 | 邏輯審 | 瀏覽器 E2E | 發現與處置 |
|---|---|---|---|
| M-CHAT 篩查（MchatScreener+data/mchat） | ✅ 反向題 2/5/12、分段 0-2/3-7/8-20 對官方 | ✅ 三種計分情境 | 無誤 |
| 服務配對（MatchTool） | 🔴 TSP 邏輯反轉（漏 gov、錯包 private）+ over6 空結果 | ✅ 兩條路徑 10 斷言 | 已修：TSP=gov/both 且非 over6；over6 加 SENCO 卡 |
| AI 助理（AiChat） | 🔴 範疇加權無條件 +2、亂入輸入誤中門檻答非所問 | ✅ fallback+實質答案 | 已修：加權僅在有實際命中時生效 |
| 規劃清單（PlannerBoard+plan.ts） | ✅ 每變更派發 plan-changed | ✅ 加→重載持久→完成→移除 | 無誤 |
| 加入規劃（AddToPlanButton） | ✅ 跨實例同步、防 hydration mismatch | ✅（隨配對/篩查流程） | 無誤 |
| 諮詢摘要（ConsultForm） | 🟡 clipboard 失敗未處理 | ✅ 生成+內容 | 已修：try/catch+選字後備 |
| 資源目錄（DirectoryExplorer） | ✅ 搜尋/雙篩選/空狀態/tel: | ✅ 搜尋縮小 23→1 | 無誤 |
| FAQ（FaqSection） | ✅ 搜尋+範疇+手風琴+來源 | ✅（faq 頁載入） | 無誤 |
| SCCC 分區輪候（ScccWaiting） | ✅ monthsWaited 算式抽驗 2 例 | ✅ 屯門篩選 | 無誤 |
| 24 內容路由 | ✅ site_audit 0/0/0 | ✅ 頁面身份 25/25（含 404） | 無誤 |

## 待覆核（research agent 標示）
- [x] EETC 每年約 $148：✅ 2026-06-11 官頁覆核，原文「每年基本費用$148」與站上一致（swd.gov.hk earlyeduca）
- [x] 輪候數字：✅ 2026-06-11 更新至社署輪候冊 2026-04-30（EETC 1,402／IP 548／SCCC 1,549；OPRS 自 2023-12 起無輪候冊）+ SCCC 平均 19.2 個月（2023-24、立法會 2025-03-19）；平均月數 EETC/IP 仍為 2021-22 最後公布值、已標年度
- 自費 OT/PT/ABA/感統/社交 收費：香港無官方統一價，標「因機構而異」（維持）
- npm audit 2 moderate（next→postcss）：修補僅存在 16.3.0-canary.6+、無穩定版可用；已升 next 16.2.9（最新 stable）、靜態站 build-time 依賴、運行時無暴露；等 16.3 stable 再評估

## 2026-06-19 情緒應對情境訓練題庫（v1.12.0 → v1.12.1）
- [x] /scenarios 互動情境訓練：6 真實場景 × 3 層回饋（好/小心/避免）+ 原理 + takeaway
- [x] 5 大實證原則（崩潰≠扭計／共同調節／感官替代／先安全後教導／情緒命名）
- [x] 下一步「先安頓自己」：3 步自我整理 + 面子 vs 孩子需要對照 + 重用呼吸圈
- [x] 家長情緒提醒（v1.12.1）：發脾氣/咒罵/暴力⇏解決、造成壓抑創傷；但家長可有自己情緒+放鬆時間（4 做法）
- [x] 拆解誤解：情緒唔係可「跳過」嘅短片（唔係家長唔識教、SEN與普通兒童一樣）+ 反厭童/辱罵
- [x] 串聯篇：面對途人說教/投訴（6 招 + 隨身小抄 + alert card 實證）
- [x] 家長特區頁加入口卡（避主導航第 10 項 wrap 回歸）
- [x] WebSearch 多源實證查證；build 通過 34 路由；內容渲染全 ✓；push main b1d2a1c + e2016b1
- [x] 驗 CI deploy + live（2026-06-25）：最新 CI run `completed success`（v1.14.2 scenarios 升頂點題）；live `/scenarios/` 回 **200**、首頁/example 網路皆 200；Codex/Gemini 補互審 → Gemini CLI 本機 hang/timeout SKIP（circuit-breaker）、Codex 額度前科；內容前已 WebSearch 多源實證查證，列為非阻塞後續

## 2026-07-07 手機端「揀身份卡→學校資料」健壯性修復（v1.24.1）
> 用戶回報：手機開站揀身份卡後「有反應但去錯/空白」。
> 實測（WebKit=Safari 引擎 + Chromium、iPhone 13、真觸控）現行 v1.24.0 兩條路徑皆正常、
> 18 個路線連結全 200、0 失敗請求、0 JS 錯誤 → 最可能是**用戶手機舊快取**（部署曾不穩，commit 534d586）。
> 但實測發現 2 個真實可改善的健壯性問題，順手修（改動僅 EntryGate.tsx 一檔）。
- [x] **真因**（實測發現）：step1 捲到底撳「攞路線」後，step2 沿用舊捲動位置（top=-123）→ 一入見中段、
       見唔到頂部標題同路線開頭 → 感覺「揀完去錯/搵唔到學校連結」。新舊版皆有。
- [x] Fix（真正有效）：加 `scrollRef` + `useEffect([open,step])` 開閘/換步都 `scrollTo(0,0)`；
       實測 step2 標題初始 top=-123 → **top=40（可見）**，1 卡＋5 卡皆修好。
- [x] 附帶：`close()` 順手重置 `document.body.style.overflow`（防目標頁捲不動看似空白）；
       版面 `grid place-items-center` → `flex flex-col items-center justify-start` 頂對齊。
- [x] version bump v1.24.0 → v1.24.1（package.json + lock 已同步、footer 顯示）
- [x] 本地 build 通過（靜態匯出全路由 static）
- [x] 驗證：e2e_flows.mjs **25/26**（唯一 FAIL=既有 TSP 過時測試、live v1.24.0 一致、非本次回歸）；
       手機 WebKit 完整流程（全新+回訪）導航成功、學校資料載入、0 錯誤；step2 截圖目視標題可見
- [x] Codex review：**無 P0/P1**（一個 P2 註解誇大已修準）
- [x] commit + push（823bcc7）+ 部署成功 + **線上 v1.24.1 驗證**：step2 標題 top=40 可見、
       完整流程（全新+回訪）導航成功、學校資料載入、0 錯誤 ✅
> 誠實備註：① 現行 v1.24.0 兩條路徑功能本來就正常，用戶真機「去錯/空白」最可能是**舊快取**，
>   本次程式碼改動無法解除用戶手機「現有」快取，用戶端仍需無痕/清快取確認。
> ② 本次修的是實測發現的「捲動位置」觀感問題（真實但屬 UX 層），非確診用戶那個 bug。
> ③ e2e 既有 TSP 過時測試（與 2026-06-19 lesson 矛盾）留待另案處理、非本次範圍。
