# Git Push Log — SEN 小孩導航員

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
