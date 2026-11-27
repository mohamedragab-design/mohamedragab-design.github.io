#!/usr/bin/env python3
"""Pull new projects from the public Behance RSS feed into data.json (archive list).
Featured projects (data.json "projects") are skipped. Existing entries are kept.
Writes the file only when something changed."""
import json, re, sys, html, urllib.request
import xml.etree.ElementTree as ET

USER = "mohamedragab189"
FEED = "https://www.behance.net/feeds/user?username=" + USER
HERE = __file__.rsplit("/", 2)[0] if "/" in __file__ else "."
DATA = (HERE + "/data.json") if HERE != "." else "data.json"

def gid(url):
    m = re.search(r"/gallery/(\d+)", url or "")
    return m.group(1) if m else None

def fetch():
    req = urllib.request.Request(FEED, headers={"User-Agent": "Mozilla/5.0 (compatible; portfolio-sync)"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()

def main():
    try:
        root = ET.fromstring(fetch())
    except Exception as e:
        print("::warning::Behance feed fetch failed: %s" % e)
        return 0
    items = root.findall("./channel/item")
    if not items:
        print("::warning::Behance feed had no items, leaving data.json unchanged")
        return 0
    with open(DATA, encoding="utf-8") as f:
        d = json.load(f)
    featured = {gid(p.get("behance")) for p in d.get("projects", [])}
    archive = d.setdefault("archive", [])
    known = {gid(a.get("u")): a for a in archive}
    fresh = []
    changed = False
    for it in items:
        link = (it.findtext("link") or "").split("?")[0].strip()
        i = gid(link)
        if not i or i in featured:
            continue
        title = html.unescape(it.findtext("title") or "").strip()
        desc = it.findtext("description") or ""
        m = re.search(r"<img[^>]+src=['\"]([^'\"]+)", desc)
        cover = m.group(1) if m else ""
        if i in known:
            a = known[i]
            if title and a.get("t") != title:
                a["t"] = title; changed = True
            if cover and a.get("c") != cover:
                a["c"] = cover; changed = True
        elif cover and title:
            fresh.append({"t": title, "c": cover, "u": link})
    if fresh:
        archive[0:0] = fresh
        changed = True
        print("added %d new project(s): %s" % (len(fresh), ", ".join(x["t"] for x in fresh)))
    if changed:
        with open(DATA, "w", encoding="utf-8") as f:
            json.dump(d, f, ensure_ascii=False, indent=1)
            f.write("\n")
        print("data.json updated")
    else:
        print("no changes")
    return 0

if __name__ == "__main__":
    sys.exit(main())
