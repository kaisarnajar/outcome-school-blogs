"""Rename note files to match blog IDs after a sync and add paths for new blogs.

Run from the repo root after scrape_and_analyze.py. New blogs get a path in the
folder of their neighbour; write the note at that path afterwards.
"""
import json
import os
import subprocess

blogs = json.load(open('src/data/blogsData.json'))
paths = json.load(open('src/data/notesPaths.json'))
by_url = {b['url']: b for b in blogs}

new_paths, moves = {}, []
for url, p in paths.items():
    if url not in by_url:
        print('Blog no longer upstream, keeping note:', p)
        continue
    folder, fn = os.path.split(p)
    np_ = os.path.join(folder, '%03d-%s' % (by_url[url]['id'], fn.split('-', 1)[1]))
    new_paths[url] = np_
    if np_ != p:
        moves.append((p, np_))

by_id = {by_url[u]['id']: p for u, p in new_paths.items()}
for b in blogs:
    if b['url'] in new_paths:
        continue
    near = by_id.get(b['id'] - 1) or by_id.get(b['id'] + 1)
    np_ = os.path.join(os.path.dirname(near), '%03d-%s.md' % (b['id'], b['url'].rstrip('/').split('/')[-1]))
    new_paths[b['url']] = by_id[b['id']] = np_
    print('NEW', b['id'], np_)

# Two phases so a rename never lands on a file that still has to move.
for a, _ in moves:
    subprocess.run(['git', 'mv', a, a + '.tmp'], check=True)
for a, b in moves:
    subprocess.run(['git', 'mv', a + '.tmp', b], check=True)

with open('src/data/notesPaths.json', 'w') as f:
    json.dump({b['url']: new_paths[b['url']] for b in blogs}, f, indent=1, ensure_ascii=False)
print('Renamed', len(moves), 'notes')
