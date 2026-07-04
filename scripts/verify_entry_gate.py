import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
from playwright.sync_api import sync_playwright

BASE = "https://backup901012-stack.github.io/sen-navigator"
EXPECT = [
  ("🌱 開始覺得孩子有啲唔同", "唔係你諗多咗", [
    ("/milestones/", "對照發展里程碑"), ("/screening/", "做個免費早期篩查"),
    ("/cas/", "了解去邊度正式評估"), ("/journey/", "睇清成條路點行")]),
  ("🧭 評咗估，等緊政府服務", "輪候期唔使乾等", [
    ("/grading/", "睇明評估報告同分級"), ("/services/", "認清各項政府服務"),
    ("/sccc/", "查各區輪候現況"), ("/pathways/", "比較津貼 vs 自費兩條路")]),
  ("🎒 想搵訓練幫孩子進步", "揀訓練之前", [
    ("/match/", "為孩子配對服務方向"), ("/training-methods/", "認識常見訓練方法"),
    ("/directory/", "篩選資源目錄"), ("/parents/", "去家長特區攞實戰貼士")]),
  ("🤝 想了解關愛共融政策・學校", "共融唔係口號", [
    ("/special-schools/", "睇明雙軌制與學校安排"), ("/services/", "認識到校支援服務"),
    ("/intelligences/", "了解共融背後嘅理念"), ("/directory/", "查官方共融資源")]),
  ("🏫 我係老師／親友／街坊", "你嘅理解", [
    ("/understanding/", "認識・同理"), ("/intelligences/", "了解多元智能"),
    ("/faq/", "常見問題快答"), ("/resources/", "收藏權威資源連結")]),
]
PAGE_KEY = {
  "/milestones/": "兒童發展里程碑", "/screening/": "早期篩查", "/cas/": "兒童體能智力測驗",
  "/journey/": "申請流程地圖", "/grading/": "分級", "/services/": "四大政府學前康復服務",
  "/sccc/": "特殊幼兒中心輪候", "/pathways/": "津貼 vs 自費", "/match/": "為孩子找方向",
  "/training-methods/": "常見訓練方法", "/directory/": "資源目錄", "/parents/": "陪孩子成長",
  "/special-schools/": "特殊學校與升學", "/intelligences/": "多元智能",
  "/understanding/": "值得被理解", "/faq/": "常見問題", "/resources/": "權威資源連結",
}
fails = []
with sync_playwright() as p:
    b = p.chromium.launch()
    d = b.new_page(viewport={"width":1366,"height":950})
    d.goto(BASE + "/", wait_until="networkidle")
    for _ in range(16):
        d.wait_for_timeout(500)
        if d.locator("[role='dialog'] [role='checkbox']").count() == 5: break
    for idx, (label, greet, steps) in enumerate(EXPECT):
        cards = d.locator("[role='dialog'] [role='checkbox']")
        # 清走所有已剔
        for j in range(5):
            if cards.nth(j).get_attribute("aria-checked") == "true":
                cards.nth(j).click(); d.wait_for_timeout(120)
        cards.nth(idx).click(); d.wait_for_timeout(200)
        d.get_by_text("攞我嘅路線").click(); d.wait_for_timeout(500)
        panel = d.locator("[role='dialog']").inner_text()
        ok_greet = greet in panel
        hrefs = d.eval_on_selector_all("[role='dialog'] a",
          "els => els.map(e => [e.getAttribute('href'), e.innerText])")
        got = [(h.replace('/sen-navigator',''), t) for h, t in hrefs]
        exp_hrefs = [s[0] for s in steps]
        got_hrefs = [g[0] for g in got]
        ok_links = got_hrefs == exp_hrefs
        titles_ok = all(steps[i][1] in got[i][1] for i in range(min(len(steps), len(got))))
        status = "PASS" if (ok_greet and ok_links and titles_ok) else "FAIL"
        print(f"卡{idx+1} {label} → greeting:{ok_greet} links:{ok_links} titles:{titles_ok} = {status}")
        if status == "FAIL":
            fails.append((label, got_hrefs, exp_hrefs))
        d.get_by_text("重新揀身份").click(); d.wait_for_timeout(400)
    # 目標頁逐一驗證
    print("--- 目標頁內容核對 ---")
    for path, key in PAGE_KEY.items():
        d2 = b.new_page()
        r = d2.goto(BASE + path, wait_until="domcontentloaded")
        d2.wait_for_timeout(300)
        h1 = d2.locator("main h1").first.inner_text() if d2.locator("main h1").count() else ""
        ok = r.status == 200 and key in h1
        print(f"{path} [{r.status}] h1含「{key}」:{ok}")
        if not ok: fails.append((path, r.status, h1[:40]))
        d2.close()
    b.close()
print("\n總結:", "全部 PASS" if not fails else f"{len(fails)} 項 FAIL: {fails}")
