# SEN 小孩導航員

香港 SEN（特殊教育需要）兒童學前資源一站式導航平台。整合政府學前康復服務、評估與分級制度，以及自費訓練課程，協助家長規劃孩子的支援之路。

服務模式參考「賽馬會 656 照顧者好幫搜 — 照顧導航員」，落地為 5 大功能。

## 技術

- Next.js 16（App Router）+ React 19 + TypeScript
- Tailwind CSS v4
- 部署：Vercel（Root Directory 設為 `web`）

## 功能（5 大服務模式）

| # | 模式 | 頁面 |
|---|------|------|
| 1 | 解答查詢 | `/faq`（常見問題 + AI 助理） |
| 2 | 諮詢支援 | `/consult`（整理情況 + 直接聯絡機構） |
| 3 | 資源規劃 | `/directory`（可搜尋／篩選資源目錄） |
| 4 | 服務配對 | `/match`（問卷 → 方向建議） |
| 5 | 紀錄跟進 | `/planner`（規劃清單，localStorage） |

其他內容頁：`/services`（政府四大服務）、`/grading`（評估與分級制度）、`/journey`（申請流程地圖）、`/resources`（權威連結）。

## 本機開發

```bash
cd web
npm install
npm run dev      # http://localhost:3000
npm run build    # 正式建置
npm run start    # 啟動正式版
```

## 環境變數（選用）

AI 助理在未設定金鑰時會回傳友善的 fallback（引導至 FAQ／配對工具），設定後即啟用 Claude 即時對話：

| 變數 | 說明 |
|------|------|
| `ANTHROPIC_API_KEY` | Anthropic API 金鑰（啟用 AI 助理） |
| `ANTHROPIC_MODEL` | 選用，預設 `claude-haiku-4-5-20251001` |

在 Vercel → Project → Settings → Environment Variables 設定。

## 資料來源與免責

- 所有政府服務、評估、收費、輪候資料均整理自官方來源（社署、衞生署 CAS、教育局、立法會文件、消委會），每筆附來源與查證日期（2026-06），見各頁「資料來源」與 `/resources`。
- 本平台為**獨立資訊整合工具，非官方網站**，資料僅供參考，申請與最新詳情以官方公佈為準。
- 香港**沒有對外公布的統一「等級」分級**；平台如實說明為「按殘疾程度對應服務 + OPRS 內部層級 + 衞生署 CAS 評估」三機制。
- 自費治療在香港無官方統一收費，言語治療區間引自消委會 2021 調查，其餘標「收費因機構而異」，不捏造數字。

## 資料維護

資料集中在 `data/`，更新時請保留 `sources` 與 `confidence` 欄位：

- `governmentServices.ts`、`senCategories.ts`、`journeySteps.ts`、`privateCourses.ts`、`directory.ts`、`faq.ts`、`resources.ts`、`matchQuestions.ts`

## 待擴充（Phase 2）

- 個案管理登入與雲端儲存（現為 localStorage）
- 諮詢預約後端 / 通知
- 連動 data.gov.hk 即時輪候數字
- 自費機構實名目錄（需逐間查證授權）
