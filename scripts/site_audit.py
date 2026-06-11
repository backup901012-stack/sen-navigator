# -*- coding: utf-8 -*-
"""全站靜態體檢：內部連結完整性 + SEO head + 無障礙基礎。對 web/out 產物跑。"""
import os
import re
import sys
import json
from html.parser import HTMLParser

OUT = os.path.join(os.path.dirname(__file__), "..", "web", "out")
OUT = os.path.abspath(OUT)
BASE = "/sen-navigator"

class Collector(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []      # href/src
        self.h1 = 0
        self.title = ""
        self.meta_desc = False
        self.canonical = False
        self.og_title = False
        self.lang = ""
        self.imgs_no_alt = 0
        self.viewport = False
        self._in_title = False

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "html":
            self.lang = a.get("lang", "")
        if tag == "a" and a.get("href"):
            self.links.append(a["href"])
        if tag in ("script", "img") and a.get("src"):
            self.links.append(a["src"])
        if tag == "link" and a.get("href"):
            # preconnect/dns-prefetch 指向網域根、404 屬正常、不當連結檢查
            if a.get("rel") not in ("preconnect", "dns-prefetch"):
                self.links.append(a["href"])
            if a.get("rel") == "canonical":
                self.canonical = True
        if tag == "h1":
            self.h1 += 1
        if tag == "title":
            self._in_title = True
        if tag == "meta":
            if a.get("name") == "description" and a.get("content"):
                self.meta_desc = True
            if a.get("property") == "og:title":
                self.og_title = True
            if a.get("name") == "viewport":
                self.viewport = True
        if tag == "img" and not a.get("alt"):
            self.imgs_no_alt += 1

    def handle_data(self, data):
        if self._in_title:
            self.title += data

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False

pages = []
for root, dirs, files in os.walk(OUT):
    dirs[:] = [d for d in dirs if d != "_next"]
    for f in files:
        if f.endswith(".html"):
            pages.append(os.path.join(root, f))

internal_broken = []
head_issues = []
a11y_issues = []
external = set()

def target_exists(path_part):
    """path_part 不含 query/hash、已去 BASE 前綴、以 / 開頭"""
    p = path_part.lstrip("/")
    cand = [
        os.path.join(OUT, p),
        os.path.join(OUT, p, "index.html"),
        os.path.join(OUT, p.rstrip("/") + ".html"),
        os.path.join(OUT, p.rstrip("/"), "index.html"),
    ]
    return any(os.path.isfile(c) or os.path.isdir(c) for c in cand)

for pg in sorted(pages):
    rel = os.path.relpath(pg, OUT).replace("\\", "/")
    with open(pg, encoding="utf-8") as fh:
        html = fh.read()
    c = Collector()
    c.feed(html)

    for href in c.links:
        if href.startswith(("http://", "https://")):
            external.add(href)
            continue
        if href.startswith(("mailto:", "tel:", "#", "data:", "javascript:")):
            continue
        path = href.split("#")[0].split("?")[0]
        if not path:
            continue
        if path.startswith(BASE + "/") or path == BASE:
            path = path[len(BASE):] or "/"
        elif path.startswith("/"):
            internal_broken.append((rel, href, "缺 basePath 前綴"))
            continue
        else:
            # 相對路徑：以該頁所在目錄解析
            d = os.path.dirname(rel)
            path = "/" + os.path.normpath(os.path.join(d, path)).replace("\\", "/")
        if not target_exists(path):
            internal_broken.append((rel, href, "目標不存在"))

    is_page = rel.endswith("index.html") or rel == "404.html"
    if is_page and rel != "404.html":
        if not c.title.strip():
            head_issues.append((rel, "無 title"))
        if not c.meta_desc:
            head_issues.append((rel, "無 meta description"))
        if not c.viewport:
            head_issues.append((rel, "無 viewport"))
        if c.h1 == 0:
            a11y_issues.append((rel, "無 h1"))
        elif c.h1 > 1:
            a11y_issues.append((rel, f"h1 x{c.h1}"))
        if c.lang not in ("zh-HK", "zh-Hant", "zh-Hant-HK", "zh"):
            a11y_issues.append((rel, f"lang={c.lang or '(無)'}"))
        if c.imgs_no_alt:
            a11y_issues.append((rel, f"img 無 alt x{c.imgs_no_alt}"))

print(f"頁面數: {len(pages)}")
print(f"\n== 內部斷鏈 ({len(internal_broken)}) ==")
for rel, href, why in internal_broken[:40]:
    print(f"  {rel} -> {href} ({why})")
print(f"\n== head 問題 ({len(head_issues)}) ==")
for rel, why in head_issues[:40]:
    print(f"  {rel}: {why}")
print(f"\n== a11y 問題 ({len(a11y_issues)}) ==")
for rel, why in a11y_issues[:40]:
    print(f"  {rel}: {why}")
print(f"\n== 外部連結 ({len(external)} 個唯一) ==")
ext_file = os.path.join(os.path.dirname(__file__), "..", "tasks", "external_links.json")
with open(ext_file, "w", encoding="utf-8") as fh:
    json.dump(sorted(external), fh, ensure_ascii=False, indent=1)
print(f"  已寫入 {os.path.relpath(ext_file)}")
sys.exit(0 if not internal_broken else 1)
