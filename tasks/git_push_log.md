# Git Push Log — SEN 小孩導航員

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
