# -*- coding: utf-8 -*-
"""外部連結存活檢查：404/410 屬必修死鏈；403/timeout 多為擋爬蟲、僅列報。"""
import json
import os
import ssl
import sys
import urllib.request
from concurrent.futures import ThreadPoolExecutor

links = json.load(open(os.path.join(os.path.dirname(__file__), "..", "tasks", "external_links.json"), encoding="utf-8"))
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"
ctx = ssl.create_default_context()

def check(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "zh-HK,zh-TW;q=0.9"})
    try:
        with urllib.request.urlopen(req, timeout=25, context=ctx) as r:
            return (url, r.status, "")
    except urllib.error.HTTPError as e:
        return (url, e.code, "")
    except Exception as e:
        return (url, 0, type(e).__name__)

with ThreadPoolExecutor(max_workers=8) as ex:
    results = list(ex.map(check, links))

dead = [r for r in results if r[1] in (404, 410)]
warn = [r for r in results if r[1] not in (404, 410) and not (200 <= r[1] < 400)]
ok = len(results) - len(dead) - len(warn)

print(f"OK: {ok} / {len(results)}")
print(f"\n== 死鏈 404/410（必修, {len(dead)}）==")
for u, s, _ in dead:
    print(f"  [{s}] {u}")
print(f"\n== 警告（403/擋爬/超時, {len(warn)}）==")
for u, s, err in warn:
    print(f"  [{s or err}] {u}")
sys.exit(1 if dead else 0)
