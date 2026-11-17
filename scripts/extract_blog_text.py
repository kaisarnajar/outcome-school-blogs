"""Extract the full text of blogs for note writing.

Usage: python3 scripts/extract_blog_text.py OUT_DIR slug [slug ...]
Writes OUT_DIR/src/<id>-<slug>.txt and OUT_DIR/batch.txt
(lines: ID | Title | URL | N min | SRC=... | OUT=...), the input format
scripts/NOTES_GUIDE.md describes.
"""
import json
import os
import sys
import urllib.request
from bs4 import BeautifulSoup

out, slugs = sys.argv[1], sys.argv[2:]
os.makedirs(out + '/src', exist_ok=True)
blogs = json.load(open('src/data/blogsData.json'))
paths = json.load(open('src/data/notesPaths.json'))
lines = []
for b in blogs:
    s = b['url'].rstrip('/').split('/')[-1]
    if s not in slugs:
        continue
    req = urllib.request.Request(b['url'], headers={'User-Agent': 'Mozilla/5.0'})
    soup = BeautifulSoup(urllib.request.urlopen(req, timeout=30).read().decode('utf-8', 'ignore'), 'html.parser')
    el = soup.find(class_=lambda x: x and 'prose' in x) or soup.find('article')
    for t in el(['script', 'style', 'noscript', 'svg', 'button']):
        t.decompose()
    txt = ['Title: ' + b['title'], 'Step: ' + b['step'], '']
    for n in el.find_all(['h1', 'h2', 'h3', 'h4', 'p', 'li', 'pre', 'table', 'img', 'blockquote']):
        if n.name != 'img' and n.find_parent(['pre', 'table', 'li', 'blockquote']):
            continue
        if n.name.startswith('h'):
            txt.append('\n' + '#' * int(n.name[1]) + ' ' + n.get_text(' ', strip=True))
        elif n.name == 'pre':
            txt.append('```\n' + n.get_text() + '\n```')
        elif n.name == 'img':
            txt.append('[image: %s]' % n.get('alt', ''))
        elif n.name == 'table':
            for r in n.find_all('tr'):
                txt.append(' | '.join(c.get_text(' ', strip=True) for c in r.find_all(['td', 'th'])))
        elif n.name == 'li':
            txt.append('- ' + n.get_text(' ', strip=True))
        else:
            txt.append(n.get_text(' ', strip=True))
    f = os.path.abspath('%s/src/%03d-%s.txt' % (out, b['id'], s))
    open(f, 'w').write('\n'.join(txt))
    lines.append('%d | %s | %s | %d min | SRC=%s | OUT=%s' % (b['id'], b['title'], b['url'], b['reading_time_mins'], f, paths[b['url']]))
open(out + '/batch.txt', 'w').write('\n'.join(lines) + '\n')
print('\n'.join(lines))
