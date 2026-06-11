# 接力檔 — SEN 小孩導航員（2026-06-11）

> 用途：若 session 因額度/時間上限中斷，新 session（或 durable cron 喚起）讀本檔第一句直接續做。
> 老闆指令：「做好後告訴我已經做到全香港最好的然後可以用了」+「額度恢復後繼續自動工作直到全部做完」。

## 狀態：✅ DONE（2026-06-11 23:1x 全部完成、v1.1.4 上線驗證、續工排程已刪）

## 已完成（不要重做）
- [x] v1.1.0-1.1.3 全部上線（GitHub Pages + Actions 自動部署、push main 即部署）
- [x] 輪候數字更新至社署輪候冊 2026-04-30（EETC 1,402/IP 548/SCCC 1,549、OPRS 2023-12 起無輪候冊、SCCC 平均 19.2 個月 2023-24）
- [x] EETC $148 官頁覆核一致；next 16.2.9；Actions 升 Node 24 就緒版（run 全綠）
- [x] 全站靜態體檢：27 頁、0 內部斷鏈、0 SEO head 缺失、0 a11y 基礎問題（scripts/site_audit.py）
- [x] 外部連結 55 條體檢（scripts/check_external_links.py）：唯一真死鏈（社署 practicegu）已改指學前康復服務總覽（grading/page.tsx:183）
- [x] 競品掃描：OneSEN（活動/資訊/情緒、學齡）、sense.edb.gov.hk（官方資訊站、學齡）、教城共融資料館（資料庫）、NGO 服務頁——無一提供「官方輪候數據+互動配對+篩查」組合

## 待做（按序執行）
- [ ] ① commit + push v1.1.4（死鏈修復 + 兩個 audit script + 本接力檔）→ Actions 自動部署
- [ ] ② 線上驗證：7 關鍵頁 200 + /grading 新來源連結在線 + footer v1.1.4
- [ ] ③ （可選強化）線上互動頁 console 檢查（/match /planner /faq）
- [ ] ④ 更新 tasks/git_push_log.md + memory（project_sen_navigator.md）
- [ ] ⑤ 全部完成後：本檔狀態改「✅ DONE」、CronDelete 刪除「sen-navigator-續工」排程、向老闆報告（誠實版「全港最好」聲明：在學前 SEN 導航此細分市場、就 2026-06-11 市場掃描所及、無同類免費互動工具；附差異化證據；禁無依據絕對化用詞）

## 關鍵操作備忘
- push 用：`git -c credential.helper= -c "credential.helper=!gh auth git-credential" push origin main`（gh keyring token 有 workflow scope）
- build 驗證：`cd web; $env:PAGES_EXPORT='1'; $env:BASE_PATH='sen-navigator'; $env:NEXT_PUBLIC_SITE_URL='https://backup901012-stack.github.io/sen-navigator'; npm run build`
- 版本號規則：package.json patch +1、footer 自動顯示、同 commit 包含功能改動
- 線上：https://backup901012-stack.github.io/sen-navigator/
