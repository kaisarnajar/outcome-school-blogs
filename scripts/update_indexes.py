"""Regenerate notes/README.md and refresh the stats in README.md after a sync."""
import json
import re

d = json.load(open('src/data/blogsData.json'))
paths = json.load(open('src/data/notesPaths.json'))
steps = []
for b in d:
    if not steps or steps[-1][0] != b['step']:
        steps.append((b['step'], []))
    steps[-1][1].append(b)
anchor = lambda s: re.sub(r'[^a-z0-9 -]', '', s.lower()).replace(' ', '-')

out = ['# AI Engineer Roadmap — Study Notes', '',
       f'Notes (with diagrams) for all **{len(d)}** blogs in the [AI Engineer Roadmap](https://github.com/amitshekhariitbhu/ai-engineer-roadmap) by Amit Shekhar (Outcome School). Read them on the site: https://kaisarnajar.github.io/outcome-school-blogs/',
       '', '## Contents', '']
out += [f'- [{s}](#{anchor(s)})' for s, _ in steps]
for s, bs in steps:
    out += ['', f'## {s}', '', '| # | Note | Read time | Original |', '|:-:|:--|:-:|:-:|']
    out += [f"| {b['id']} | [{b['title']}]({paths[b['url']][6:]}) | {b['reading_time_mins']} min | [link]({b['url']}) |" for b in bs]
open('notes/README.md', 'w').write('\n'.join(out) + '\n')

r = open('README.md').read()
N, W, M = len(d), sum(b['word_count'] for b in d), sum(b['reading_time_mins'] for b in d)
lines = r.split('\n')
i = 0
for k, ln in enumerate(lines):
    if ln.startswith('| **Step'):
        s, bs = steps[i]; i += 1
        w = sum(b['word_count'] for b in bs); m = round(w / 200)
        cells = ln.split('|')
        cells[3], cells[4], cells[5] = f' {len(bs)} ', f' {w:,} ', f' ~{m} mins ({m / 60:.1f} hrs) '
        lines[k] = '|'.join(cells)
assert i == len(steps), 'README step table is out of sync with the steps'
r = '\n'.join(lines)
r = re.sub(r'all \*\*\d+ blog articles\*\*', f'all **{N} blog articles**', r)
r = re.sub(r'\| \*\*Total Blog Articles\*\* \| \*\*\d+\*\*', f'| **Total Blog Articles** | **{N}**', r)
r = re.sub(r'\| \*\*Total Word Count\*\* \| \*\*[\d,]+ words\*\*', f'| **Total Word Count** | **{W:,} words**', r)
r = re.sub(r'\*\*~[\d.]+ hours \([\d,]+ mins\)\*\*', f'**~{M / 60:.1f} hours ({M:,} mins)**', r)
r = re.sub(r'\| \*\*Average Words / Blog\*\* \| \*\*[\d,]+ words\*\*', f'| **Average Words / Blog** | **{round(W / N):,} words**', r)
r = re.sub(r'\| \*\*All Analyzed Roadmap Blogs\*\* \| \*\*\d+\*\* \| \*\*[\d,]+\*\* \| \*\*~[\d.]+ Hours\*\*',
           f'| **All Analyzed Roadmap Blogs** | **{N}** | **{W:,}** | **~{M / 60:.1f} Hours**', r)
open('README.md', 'w').write(r)
print(f'{N} blogs, {W:,} words, {M:,} mins')
