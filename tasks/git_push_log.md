# Git Push Log — SEN 小孩導航員

### 2026-06-13 | sen-navigator | CAS/CAC 事實修正 v1.9.1（6f64b6e）
- 老闆指正評估與分級頁機制 C 事實有誤 → 官方多源查證後修正
- CAS（服務 Service）vs CAC（中心 Centre）正名；全港 8 間 CAC = 衞生署 7 + 醫管局 1（大口環根德公爵夫人兒童醫院、dkhcac@ha.org.hk、2974 0331）
- 改 /cas（說明框+中心分兩組+大口環+來源加 HA）、grading 機制 C、match 問卷 help、directory 描述
- 誠實指出老闆把「尤德夫人」（衞生署觀塘/沙田）與「根德公爵夫人」（大口環/醫管局）混淆，已用官方名
- 查證源：HA Content_ID=282515 + 官方 PDF + dhcas.gov.hk + data.gov.hk；首條 tasks/lessons.md
- 線上驗證：v1.9.1 + 大口環+醫管局+8 間+dkhcac email + grading 機制C 全 True
---

### 2026-06-12 (14:xx) | sen-navigator | 雙 LLM 評分 + 低感官模式 v1.9.0（9f85459）
- 老闆三指令：逐頁檢查 + 問其他 LLM 評分 + 列改善
- 逐頁檢查：6 頁 production 截圖逐張目視（home/services/faq/match/screening/parents）全部卡通元素齊、無爆版
- **外部評分：Codex 94/100、Gemini 92/100**（同一份事實清單+評分維度、平行獨立）
- 兩家共識 #1 建議相同：「低感官/安靜模式」（SEN 兒童感官過載友善）→ 即實裝 CalmToggle：html.calm 關全部裝飾動效、localStorage 記住、head inline script paint 前套用；CDP 全鏈路實測 PASS；E2E 26/26
- 其餘建議入 roadmap：Buddy 語音朗讀（粵語 TTS）、長文區自動降噪、motion budget、真機 FPS/INP 監測、高風險結果頁強化求助 CTA
---

### 2026-06-12 (13:3x) | sen-navigator | 最大卡通框邏輯 v1.8.0（9c2a1fa）
- 老闆批評「框草率、得兩朵雲、要最多卡通邏輯」→ 手繪有機框（4 款形狀輪流+微傾斜+hover 果凍變形）、全部大卡頂三色膠紙、每個 h2 掛慢轉粉紅星、天空 2→6 件（3 雲+2 星+1 心）、提示框變對話泡、輸入框手繪形
- E2E 26/26、溢出 0/24、services/faq 內頁截圖目視全現
---

### 2026-06-12 (12:4x) | sen-navigator | skill 規則閉環 v1.7.1（04c3477）
- /ui-ux-pro-max 再調用 → 對照規則表掃殘留：nav-state-active 視覺已有、補 aria-current="page" 語義（桌面+手機）；header 📋 ×2 換 IconClipboard——全站結構圖示 0 emoji 達成
- skill 99 條規則 CRITICAL/HIGH 全閉環；design-system/MASTER.md 為跨 session 真源
---

### 2026-06-12 (12:xx) | sen-navigator | 全站互動卡通系統 v1.7.0（f7a9815）
- 老闆五連指令：全部頁卡通圖案/互動邏輯唔係淨睇/鼠標都要溫馨卡通/skill 用到最好/家長小孩都啱
- 研究：2026 micro-interaction 準則（200-500ms、motion=結構非裝飾）+ RememBear 狀態反應吉祥物
- 落地：吉祥物家族 3 變體（導仔/心心/星星）、Buddy 導仔陪伴系統（24 頁、點擊出 contextual 導航貼士 12 條+鼓勵語）、卡通鼠標（粘土圓點+小星）+星塵尾巴+點擊爆星、M-CHAT 結果吉祥物變身、footer 家族、planner 空狀態、背景星星
- E2E 26/26、溢出 0/24、skill UX 驗證 pass、aria 完整
---

### 2026-06-12 (11:xx) | sen-navigator | 卡通動畫層 v1.6.0（ea775c1）
- 老闆三連指令：/ui-ux-pro-max 直調 +「所有UI動畫卡通感」+「全面重構不懂就學」
- 研究（svgator/99designs/junoteam 等）確認手法：吉祥物/波浪分隔/chunky 邊框/漂浮元素
- 落地：Mascot.tsx 導仔吉祥物（SVG+CSS 漂浮/揮手/眨眼）、白卡 3px 薄荷粗邊、玩具按鈕實色底邊、footer 波浪、兩朵雲 90s 飄、main tabular-nums
- skill --persist：design-system/sen-小孩導航員/MASTER.md 入庫（跨 session 設計真源）
- E2E 26/26、24 頁 0 溢出、截圖目視（導仔/粗邊/雲全現）
---

### 2026-06-12 (10:xx) | sen-navigator | ui-ux-pro-max skill 對標 v1.5.0（434ee3d）
- 老闆裝咗 ui-ux-pro-max skill（09:21）指定用佢做全面 UI——按 skill 流程：--design-system 取建議 → 對照規則表執行
- skill 印證現方向（claymorphism/FAQ pattern/圓體）+ 抓出 3 硬差距：①emoji 結構圖示 ②Tailwind v4 無 cursor-pointer ③動畫時序超標（620ms>400 規範）
- 落地：icons.tsx 零依賴 SVG 庫 17 枚（pillar/FAQ 磚/AI 模式全換）、全域 cursor+touch-action、時序對標、Nunito+Huninn 配對、aria-label ×3、44px 觸控、min-h-dvh
- 色板保留老闆拍板 Clay Doh（skill 建議 cyan 讓位於老闆決定、有記錄）
- Codex L3 P1（顯式 ReactNode import）採納；E2E 26/26、對比 24/24、溢出 0/24、截圖目視 PASS
---

### 2026-06-12 (02:xx) | sen-navigator | 動畫引擎 fail-safe 重寫 v1.4.0（31c2d69）
- 老闆「感受唔到動畫」→ 檢討屬實：v1.3.0 scroll-driven 太保守（@supports 限定、視口內元素直接終態）
- 第一版重寫（CSS 先隱藏+JS 解鎖）實測出**h2 永久隱形**失敗模式（headless 環境 IO 未開火）→ 推倒改 fail-safe：預設全可見、.pre 只在 JS 活著時加、3s 兜底 interval — 任何失敗退化為靜態頁
- 動畫構成：首屏 hydration 階梯彈入 + 滾動 IO 進場 + 動態內容進場（MutationObserver）+ hero CSS 階梯（無 JS 即有）+ 圖示輕浮 + CTA 心跳 + logo bob + hover wiggle/squish
- 實證：CDP 輪詢 iv 軌跡 0→1→5（首屏彈入+滾動進場+pre 正確保留）；E2E 26/26；24 頁 0 溢出
- e2e 目錄搜尋斷言改輪詢（根治 flake）；新工具 scripts/probe_motion.mjs（動畫引擎現場偵錯）
---

### 2026-06-12 (凌晨後半) | sen-navigator | 三連發：數據自動化 v1.2.1 + FAQ 圖示化 v1.2.2 + 動畫層 v1.3.0
- **A 數據自動更新（69d1be6）**：update_waiting_data.mjs 抓社署兩官方 CSV（輪候冊+SCCC 逐間、UTF-16）→ 驗證 → waitingLive.json；governmentServices/scccCentres 全改 JSON 驅動（57 code 100% 配對）；update-data.yml 每月 3+10 號自動跑、bot commit + gh workflow run deploy（GITHUB_TOKEN push 不觸發其他 workflow 的坑已繞）；**workflow_dispatch 首跑 CI success**（27362356038、無變動路徑正確）
- **B FAQ 圖示化（f7c2d15）**：8 粘土彩磚（圖示+條數+點磚篩選）+ 每題範疇圖示 chip + FAQPage JSON-LD；新色對對比 4 組 6.29-7.30 全過；截圖目視 PASS
- **C 動畫層（da4b9d8 v1.3.0）**：CSS scroll-driven（animation-timeline: view()）卡片彈入 + 標題滑入 + emoji 搖擺 + 按鈕果凍 squish + logo bob + 背景暈染慢漂；零 JS 零依賴、漸進增強、prefers-reduced-motion 全尊重；E2E 26/26、24 頁 0 溢出
- 中途事故：build 被殘留本地 server 鎖 out/（8077/8079 殭屍 python）→ 殺進程修復；E2E 首跑 3 假陽性紅、重跑全綠
---

### 2026-06-12 (凌晨) | sen-navigator | Clay Doh 色系 + 粉圓體 v1.2.0
- 老闆出圖拍板：izuka-effects Clay Doh 13 粘土材質色系 + 兒童化圓體字
- 色板：brand=Plasticine 薄荷 / warm=Bubble Gum 粉（warm-500 調 #cb2a79 達 4.98 對比）/ 新增 lilac=Candlewax + terra=Terracota / paper=Translucent 奶白 / ink=Space Clay 墨
- 字體：LXGW 楷書 → justfont 粉圓 Huninn（Google Fonts、open 粉圓 2.1 可商用）、目視確認圓體生效
- 驗證：WCAG 對比 20/20（contrast_check.mjs 新工具）、375px 24 頁 0 溢出、頁面身份 25/25、截圖目視
- 🔴 事故與自救：9804fa8 的 package.json 被 PS5.1 Set-Content -Encoding UTF8 寫入 BOM → turbopack 解析失敗 build 紅；**煙霧測試擋住、線上未受影響**；06363f6 用 Write 工具去 BOM 修復
- 教訓：改 JSON 一律用 Write/Edit 工具、唔好用 PS5.1 Set-Content（必加 BOM）
---

### 2026-06-11 (深夜) | sen-navigator | 逐功能核對 + 3 bug 修復 v1.1.5
- 老闆挑戰「每一個 UI 跟功能都一個一個核對咗未」→ 答案係未夠深、即補：9 互動元件逐個源碼邏輯審 + CDP 真瀏覽器逐流程點擊
- 🔴 修 MatchTool：TSP 推薦邏輯反轉（原 both/private、正確 gov/both 且非 over6——TSP 資格繫於輪候資助服務）+ over6 空結果加 SENCO 卡 + over6 文案準確化
- 🔴 修 AiChat：mode.cats +2 加權無條件套用、任何亂入輸入都誤中 ≥2 門檻答非所問 → 改為有實際命中先加權
- 🟡 修 ConsultForm：clipboard 失敗 try/catch + 選字後備
- 新工具：scripts/e2e_flows.mjs（CDP 零依賴、26 斷言：match 兩路徑/M-CHAT 三計分情境/planner 全鏈路/AiChat 修復驗證/目錄搜尋/consult/sccc 分區）+ scripts/page_identity_check.py（24 路由+404 行為）
- 本地實測：E2E 26/26 PASS、頁面身份 25/25 PASS
- 視覺/響應式：scripts/mobile_overflow_check.mjs（CDP 真手機模擬 375px）24 頁 0 水平溢出 + 6 頁截圖目視正常
- 功能核對矩陣寫入 tasks/todo.md
- main 0763e25、Actions run 27358756962 success 59s
- **Production 終驗（部署後對線上重跑）**：E2E 26/26 ✅、頁面身份 25/25 ✅、footer v1.1.5 ✅
- Codex L3：聚焦 diff PASS（首跑全量 diff 含 lock 10 分鐘無輸出、circuit break 重試）
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
