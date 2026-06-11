# -*- coding: utf-8 -*-
"""全 24 路由「頁面身份」檢查：每頁 200 + 標題/簽名字串正確（防空頁/錯頁/部署殘缺）。"""
import sys
import urllib.request

BASE = (sys.argv[1] if len(sys.argv) > 1 else "https://backup901012-stack.github.io/sen-navigator").rstrip("/")

# route -> 必含簽名（取自頁面 h1/title 核心詞）
SIGNATURES = {
    "/": "陪你走好孩子的每一步",
    "/screening/": "M-CHAT",
    "/services/": "到校學前康復服務",
    "/sccc/": "特殊幼兒中心",
    "/grading/": "評估",
    "/cas/": "兒童體能智力測驗",
    "/sensory/": "感覺統合",
    "/brain/": "腦部成長",
    "/milestones/": "里程碑",
    "/odd/": "對立反抗",
    "/ot-confidence/": "職業治療",
    "/intelligences/": "多元智能",
    "/tcm/": "中醫",
    "/journey/": "申請流程",
    "/pathways/": "津貼",
    "/directory/": "資源目錄",
    "/heephong-asd/": "協康會",
    "/match/": "服務配對",
    "/parents/": "家長特區",
    "/prc/": "家長資源中心",
    "/planner/": "規劃",
    "/faq/": "常見問題",
    "/consult/": "諮詢",
    "/resources/": "資源",
}

fails = []
for route, sig in SIGNATURES.items():
    url = BASE + route
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as r:
            html = r.read().decode("utf-8", "replace")
            status = r.status
    except Exception as e:
        fails.append(f"{route} 請求失敗: {e}")
        print(f"  FAIL {route} ({e})")
        continue
    if status != 200:
        fails.append(f"{route} HTTP {status}")
        print(f"  FAIL {route} HTTP {status}")
    elif sig not in html:
        fails.append(f"{route} 缺簽名「{sig}」")
        print(f"  FAIL {route} 缺「{sig}」")
    else:
        print(f"  PASS {route}")

# 404 頁
try:
    req = urllib.request.Request(BASE + "/no-such-page-xyz/", headers={"User-Agent": "Mozilla/5.0"})
    urllib.request.urlopen(req, timeout=30)
    fails.append("404 測試：不存在頁面竟回 200")
    print("  FAIL 404 行為")
except urllib.error.HTTPError as e:
    print(f"  PASS 404 行為（HTTP {e.code}）" if e.code == 404 else f"  FAIL 404 行為（HTTP {e.code}）")
    if e.code != 404:
        fails.append(f"404 測試回 {e.code}")

print(f"\n== {len(SIGNATURES) + 1 - len(fails)}/{len(SIGNATURES) + 1} PASS ==")
sys.exit(1 if fails else 0)
