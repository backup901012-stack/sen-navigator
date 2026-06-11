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
