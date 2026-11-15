"""Find the day each blog was added to the upstream AI Engineer Roadmap.

Walks the upstream README's git history from oldest to newest and records the
first commit in which each blog URL appears. Uses the commit date (when the
change landed on the roadmap), not the author date, which upstream sometimes
leaves stale after rebases.

Usage:
    python3 track_added_dates.py                 # clones upstream into a temp dir
    python3 track_added_dates.py /path/to/clone  # reuses an existing clone (it is fetched first)

Writes src/data/addedDates.json. Run it after scrape_and_analyze.py on every sync.
"""
import json
import re
import subprocess
import sys
import tempfile
from datetime import date

UPSTREAM = 'https://github.com/amitshekhariitbhu/ai-engineer-roadmap.git'
URL_RE = re.compile(r'- \[.*?\]\((https?://[^\)]+)\)')


def git(repo, *args):
    return subprocess.run(['git', '-C', repo, *args], check=True, capture_output=True, text=True).stdout


def blog_urls(readme):
    return {u.strip() for u in URL_RE.findall(readme) if 'outcomeschool.com' in u or 'substack.com' in u}


def main():
    if len(sys.argv) > 1:
        repo = sys.argv[1]
        git(repo, 'fetch', '-q', 'origin')
        git(repo, 'checkout', '-q', '--detach', 'origin/HEAD')
    else:
        repo = tempfile.mkdtemp(prefix='roadmap-')
        subprocess.run(['git', 'clone', '-q', UPSTREAM, repo], check=True)

    # Oldest first, following only commits that touched the README.
    log = git(repo, 'log', '--reverse', '--topo-order', '--format=%H %cd', '--date=format:%Y-%m-%d', '--', 'README.md')
    first_seen = {}
    for line in log.splitlines():
        sha, day = line.split()
        try:
            readme = git(repo, 'show', f'{sha}:README.md')
        except subprocess.CalledProcessError:
            continue
        for url in blog_urls(readme):
            first_seen.setdefault(url, {'date': day, 'commit': sha[:7]})

    with open('src/data/blogsData.json', encoding='utf-8') as f:
        blogs = json.load(f)

    entries, missing = {}, []
    for b in blogs:
        hit = first_seen.get(b['url'])
        if hit:
            entries[b['url']] = hit
        else:
            missing.append(b['url'])

    first_day = min((e['date'] for e in entries.values()), default=None)
    out = {
        'updated': date.today().isoformat(),
        'source': UPSTREAM.removesuffix('.git'),
        'launch': first_day,
        'entries': entries,
    }
    with open('src/data/addedDates.json', 'w', encoding='utf-8') as f:
        json.dump(out, f, indent=1, ensure_ascii=False)
        f.write('\n')

    days = {}
    for e in entries.values():
        days[e['date']] = days.get(e['date'], 0) + 1
    print(f'Dated {len(entries)}/{len(blogs)} blogs across {len(days)} days (roadmap launch {first_day}).')
    if missing:
        print('Not found in upstream history:', *missing, sep='\n  ')


if __name__ == '__main__':
    main()
