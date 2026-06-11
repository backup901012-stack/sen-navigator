# Git Push Log — SEN 小孩導航員

### 2026-06-11 (深夜) | sen-navigator | 逐功能核對 + 3 bug 修復 v1.1.5
- 老闆挑戰「每一個 UI 跟功能都一個一個核對咗未」→ 答案係未夠深、即補：9 互動元件逐個源碼邏輯審 + CDP 真瀏覽器逐流程點擊
- 🔴 修 MatchTool：TSP 推薦邏輯反轉（原 both/private、正確 gov/both 且非 over6——TSP 資格繫於輪候資助服務）+ over6 空結果加 SENCO 卡 + over6 文案準確化
- 🔴 修 AiChat：mode.cats +2 加權無條件套用、任何亂入輸入都誤中 ≥2 門檻答非所問 → 改為有實際命中先加權
- 🟡 修 ConsultForm：clipboard 失敗 try/catch + 選字後備
- 新工具：scripts/e2e_flows.mjs（CDP 零依賴、26 斷言：match 兩路徑/M-CHAT 三計分情境/planner 全鏈路/AiChat 修復驗證/目錄搜尋/consult/sccc 分區）+ scripts/page_identity_check.py（24 路由+404 行為）
- 本地實測：E2E 26/26 PASS、頁面身份 25/25 PASS
- 視覺/響應式：scripts/mobile_overflow_check.mjs（CDP 真手機模擬 375px）24 頁 0 水平溢出 + 6 頁截圖目視正常
- 功能核對矩陣寫入 tasks/todo.md
---

### 2026-06-11 (晚) | sen-navigator | 全站品質終驗 v1.1.4（「全港最好」證據包）
- 全站靜態體檢（site_audit.py）：27 頁、0 內部斷鏈、0 SEO head 缺失、0 a11y 基礎問題
- 外部來源 55 條全檢（check_external_links.py）：唯一真死鏈（社署 practicegu 改版 404）→ 改指學前康復服務總覽（實測 200）
- 真瀏覽器實證（headless Chrome、零新套件）：match/planner/faq/screening 四互動頁 0 console 錯誤、hydration 全掛載（match 5 選項鈕、screening M-CHAT 42 鈕、faq 輸入框+AI 助理、planner 規劃清單）
- 競品掃描：OneSEN（活動/資訊/情緒、學齡）、教育局融情特教（官方資訊站）、教城共融資料館、NGO 服務頁 — 無一同時提供「官方輪候數據 + 配對 + 篩查 + 規劃」
- 連續性機制：tasks/next_session_handoff_2026-06-11.md + session 內 :43 hourly 續工 cron（完工後已刪）
- main 9745cb1、Actions run 27356021456 success、線上 v1.1.4 + grading 新來源驗證 ✅
---

### 2026-06-11 (下午) | sen-navigator | 全自動化授權執行：CI + 數據更新 v1.1.3
- 老闆「所有東西都授權給你了」→ 四件全自己做完：
- ① **GitHub Actions 自動部署啟用**（57b2030）：gh keyring token 有 workflow scope（.env PAT 沒有、6/7 記憶過時）；Pages build_type 切 workflow；deploy.yml 加產物煙霧測試 + job 級權限（Codex P2 採納 ×2、P1 BASE_PATH 為誤報 next.config.ts:7 有正規化）；run 27341144062 success 50s
- ② **EETC $148 覆核**：官頁原文「每年基本費用$148」一致、來源標 2026-06-11
- ③ **輪候數字更新**（bf3a20e、v1.1.3）：data.gov.hk 輪候冊 CSV（UTF-16）截至 2026-04-30 程式加總 — EETC 1,402（含同時輪候 624）/ IP 548 / SCCC 1,549；SCCC 平均 19.2 個月（2023-24、立法會 2025-03-19）；**OPRS 自 2023-12 起無輪候冊**（取代過時 2,703 人/4.3 個月）；Codex 抓到 OPRS 例外漏「正接受其他資助服務者」已修；CSV 快照入庫 tasks/
- ④ **npm audit 評估**：postcss 修補僅存在 next 16.3 canary、不採用；升最新 stable 16.2.9
- 線上驗證：✅ /services 含 1,402/19.2 個月/無輪候冊、舊 2,703 已消失、首頁 v1.1.3、7 頁 200（Actions 自動部署、非手動腳本）
- ⑤ **Node 24 預修**（1ab70f7）：GitHub 6/16 強制 Node 24、actions 升 checkout/setup-node v6 + pages 三件 v5/v6（版本 gh api 實查）
---

### 2026-06-11 | sen-navigator | 巡檢修補 v1.1.2（補推 v1.1.0/v1.1.1）
- 巡檢發現：6/10 兩個 commit（v1.1.0 多元智能、v1.1.1 Clay Doh）只在本機、未推未部署；線上實測 /intelligences 404
- 修 sitemap 漏項：lib/seo.ts ROUTES 補 /intelligences（v1.1.0 加頁時漏）
- .gitignore 加 _prc_pages/（PRC 來源截圖、同 _pdf_pages 慣例不入庫）
- 版本 1.1.2；build 30 路由 ✅；out/sitemap.xml 含 intelligences ✅
- gh-pages 部署：✅ 老闆拍板「部署」→ 6/11 跑 deploy-pages.sh、gh-pages 7119de8→84aa459、Pages build=built
- 線上驗證：✅ 7 關鍵頁（/ intelligences services grading parents directory faq）全 200、sitemap 含 intelligences、首頁 footer v1.1.2、導覽含多元智能
- npm audit：2 moderate（next→postcss、build-time、靜態站影響低）；.github/workflows/deploy.yml 未啟用、待拍板
---

### 2026-06-08 | sen-navigator | 語言發展里程碑
- 老闆提供新界西醫院聯網言語治療部「語言發展里程碑」表（相片）
- 逐項視覺讀取整理（略過家長手寫剔號）；10 個年齡階段 × 言語表達/聆聽理解/其他
- /milestones：含第一個單字提示、「幾時搵言語治療師」紅旗、CTA、來源+免責
- 接 FAQ基礎認識/評估頁/頁尾/sitemap
- main f688b7b；gh-pages 4966fe0（built）；✅ 線上實測 /milestones 200
---


### 2026-06-08 | sen-navigator | 童年經歷與腦部成長科普
- 老闆提供青山醫院 IMH《童年經歷與腦部成長》PDF（12頁、純圖像→渲染3.3x視覺逐頁讀）
- 小冊子版權所有不得轉載 → 以「原創文字」重寫通用科學概念、標 IMH+哈佛為來源（守版權）
- /brain：經歷塑造腦袋、神經可塑性、毒性壓力/杏仁核、依附安全感、核心思想、天生脾性、表達愛四部曲、成長思維、SEN啟示
- 接 FAQ基礎認識/評估頁/頁尾/sitemap；與感覺統合頁互連
- main 07df51f；gh-pages 5c777bf（built）；✅ 線上實測 /brain 200
---


### 2026-06-08 | sen-navigator | 感覺統合與本體感覺科普
- 老闆指基礎認識欠感覺統合/本體覺失調科普
- WebSearch 查證 Ayres理論/八感/DSM-5(SPD非獨立診斷,感官反應入自閉症準則)/九成自閉症
- 新頁 /sensory：八感、本體覺重點、三模式、表徵、與SEN關係、家居本體覺活動、強免責+來源
- 接 FAQ基礎認識(+內部連結支援)、評估頁、頁尾、sitemap
- main 9b4cea6；gh-pages 3fbd93e（built）；✅ 線上實測 /sensory 200
---


### 2026-06-08 | sen-navigator | 協康會密集式訓練一覽表
- 老闆指資源目錄欠協康會學前自閉症密集式訓練 2025-2026 一覽表
- WebSearch 找到官方 PDF → WebFetch 下載 → 渲染圖片視覺逐頁讀（10 頁）
- 伴我童樂(2-3歲)/伴我童行 基礎(2-3歲)・高階(4-5歲) + 月費 $4,600-$9,900 + 10 間中心按區
- 新頁 /heephong-asd + 目錄項目(可搜尋) + 目錄支援內部 Link + sitemap
- main 30f9498；gh-pages 1f84090（built）；✅ 線上實測 /heephong-asd 200
---


### 2026-06-08 | sen-navigator | M-CHAT-R 早期篩查工具
- 老闆提供 M-CHAT-R_F_TraditionalFinal2018.pdf（25 頁、繁體 CID 字體亂碼→渲染圖片視覺逐頁讀）
- 逐字錄入 20 題 + 官方計分（除2/5/12答是、其餘答否為風險；0-2低/3-7中/8-20高）
- 放大核對第 5 題「異常」等用字，確保逐字準確（零幻覺）
- /screening 互動篩查：即時計分+分級+下一步+強免責(篩查≠診斷、16-30個月)
- 接入首頁 banner、申請流程察覺步、頁尾、sitemap
- main 7c4b878；gh-pages e80b86d（built）
- ✅ 線上實測：/screening 200、20 題、免責正常

### 2026-06-08 | sen-navigator | 評估頁補 Form 2 流程
- /grading 加「Form 2 轉介信」區塊 + 兩條評估路徑 + 標準工具(綜合發展評估/M-P-R)
- journey 第3/4步、FAQ Form 2 條目；main 64c45ac
---


### 2026-06-08 | sen-navigator | SCCC 分區輪候（社署實名數據）
- 老闆提供 SCCC.csv（社署 2026-04-30、59 間中心、最後獲篩選個案申請日期）
- 解析 → data/scccCentres.ts；新頁 /sccc 按 18 區分組、逐間顯示輪候指標
- 依老闆指示：**不用平均輪候時間**，改逐間真實「最後獲篩選個案申請日期」
- 移除 SCCC 舊「平均 20.2 個月」；services 卡加 CTA、footer/sitemap 加入
- main commit ffc51d9；gh-pages 部署 bd103b6（status: built）
- ✅ 線上實測：https://backup901012-stack.github.io/sen-navigator/sccc/ 正常、非平均、分區顯示

---


### 2026-06-07 | sen-navigator | 正式上線 GitHub Pages（backup901012）
- 帳號修正：清走 cbe566（刪 Vercel 專案 + logout），全面改 backup901012
- repo 設為公開（免費 Pages 需公開、repo 無密鑰）
- 靜態化：移除 /api/chat、AiChat 改純前端 FAQ 比對、next.config output:export
- 推 gh-pages 分支（worktree、用既有認證、不嵌 token、不含 workflow 檔）
- 啟用 Pages（source=gh-pages /）→ status: built
- ✅ 正式網址：https://backup901012-stack.github.io/sen-navigator/
- 線上驗證：/、/services/、/grading/ 皆 200、繁中正常（WebFetch 實測）
- 一鍵更新：scripts/deploy-pages.sh
- 注意：.github/workflows/deploy.yml 未入庫（PAT 無 workflow scope）；自動 CI 需具該 scope 的 token

---


### 2026-06-07 | sen-navigator:main | v1.0.0 | 491a454
- 動作：建 repo backup901012-stack/sen-navigator（private）+ 首次 push
- 改動範圍：52 檔（Next.js 全平台 + tasks）
- 為什麼：SEN 小孩導航員 v1.0.0 首次交付，香港 SEN 學前資源導航平台
- type-check：✅（npm run build 通過、0 error、14 路由）
- 實測：✅ 10 頁全 200、中文正常、AI fallback 正常
- Vercel deploy：✅ READY（production）
- 老闆驗收：⏳
- repo：https://github.com/backup901012-stack/sen-navigator

### 2026-06-07 | Vercel 部署 | sen-navigator (team jamies-projects-b02d4ae1)
- 部署 URL：https://sen-navigator-n1me3xiju-jamies-projects-b02d4ae1.vercel.app
- 正式別名：https://sen-navigator-jamies-projects-b02d4ae1.vercel.app
- 狀態：READY（WebFetch 回 401 = 伺服器正常、被 Deployment Protection 擋）
- ⚠️ 待老闆動作：專案開咗「Vercel Authentication（全部部署）」保護
  → 登入 cbe566 帳號即可睇；要公開分享需 dashboard 關閉保護
  → Settings → Deployment Protection → Vercel Authentication → Disabled → Save
- 關閉後我可即時複驗 10 頁線上 200
