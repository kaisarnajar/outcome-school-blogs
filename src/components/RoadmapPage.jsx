import React, { useEffect, useMemo, useState } from 'react';
import { Search, X, ArrowRight, ExternalLink, List, Table2 } from 'lucide-react';
import { blogs, steps, totals, fmtHours, LENGTHS, STATUS } from '../lib/data';

// View state survives navigating to a note and back.
const saved = { q: '', length: 'all', status: 'all', sort: 'roadmap', view: 'list' };
try {
  const v = localStorage.getItem('roadmap_view');
  if (v === 'list' || v === 'table') saved.view = v;
} catch { /* storage unavailable */ }

function usePersisted(key) {
  const [v, setV] = useState(saved[key]);
  return [v, (nv) => setV((saved[key] = nv))];
}

function PostRow({ b, showStep }) {
  return (
    <li className="post">
      <span className="post-num">{String(b.id).padStart(3, '0')}</span>
      <div>
        <a href={b.href} className="post-title">{b.title}</a>
        <p className="post-excerpt">{b.excerpt}</p>
        {showStep && <div className="post-meta" style={{ textAlign: 'left', marginTop: 6 }}>Step {b.stepInfo.num} · {b.stepInfo.name}</div>}
      </div>
      <div className="post-side">
        <span className={`status st-${b.status}`}>
          {b.status === 'revision' ? `Revise · ${b.progress.understanding}%` : STATUS[b.status].label}
        </span>
        <span className="post-side-row">
          <span className="post-mins">{b.mins} min read</span>
          <a className="post-ext" href={b.url} target="_blank" rel="noopener noreferrer" title="Read the original blog" aria-label={`Original: ${b.title}`}>
            <ExternalLink size={13} />
          </a>
        </span>
      </div>
    </li>
  );
}

function exportCsv(rows) {
  const head = ['ID', 'Step', 'Title', 'Words', 'Minutes', 'Status', 'Understanding', 'URL'];
  const esc = (s) => `"${String(s ?? '').replace(/"/g, '""')}"`;
  const body = rows.map((b) => [b.id, esc(b.step), esc(b.title), b.word_count, b.mins, b.status, b.progress?.understanding ?? '', esc(b.url)].join(','));
  const blob = new Blob([[head.join(','), ...body].join('\n')], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `ai-roadmap-blogs-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
}

export default function RoadmapPage({ openSearch }) {
  const [q, setQ] = usePersisted('q');
  const [length, setLength] = usePersisted('length');
  const [status, setStatus] = usePersisted('status');
  const [sort, setSort] = usePersisted('sort');
  const [view, setViewState] = usePersisted('view');
  const setView = (v) => {
    setViewState(v);
    try { localStorage.setItem('roadmap_view', v); } catch { /* ignore */ }
  };
  const [active, setActive] = useState(steps[0].id);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return blogs.filter((b) => {
      if (length !== 'all' && b.length !== length) return false;
      if (status === 'done' && !(b.status === 'mastered' || b.status === 'revision')) return false;
      if (status === 'todo' && !(b.status === 'pending' || b.status === 'new')) return false;
      if (status === 'revision' && b.status !== 'revision') return false;
      if (query && !(b.title.toLowerCase().includes(query) || (b.excerpt || '').toLowerCase().includes(query) || b.step.toLowerCase().includes(query))) return false;
      return true;
    });
  }, [q, length, status]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    if (sort === 'long') arr.sort((a, b) => b.word_count - a.word_count);
    else if (sort === 'short') arr.sort((a, b) => a.word_count - b.word_count);
    else if (sort === 'title') arr.sort((a, b) => a.title.localeCompare(b.title));
    return arr;
  }, [filtered, sort]);

  const grouped = useMemo(
    () => steps.map((s) => ({ ...s, visible: filtered.filter((b) => b.step === s.step) })).filter((s) => s.visible.length),
    [filtered]
  );

  const showGrouped = sort === 'roadmap' && view === 'list';

  // Highlight the step currently in view in the sidebar.
  useEffect(() => {
    if (!showGrouped) return;
    const els = grouped.map((s) => document.getElementById(s.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: '-80px 0px -65% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [grouped, showGrouped]);

  const lengthCounts = useMemo(() => {
    const c = { all: blogs.length };
    blogs.forEach((b) => (c[b.length] = (c[b.length] || 0) + 1));
    return c;
  }, []);

  const filtersOn = q || length !== 'all' || status !== 'all';
  const reset = () => { setQ(''); setLength('all'); setStatus('all'); };
  const reviseNext = useMemo(
    () => blogs.filter((b) => b.status === 'revision').sort((a, b) => a.progress.understanding - b.progress.understanding || a.id - b.id).slice(0, 4),
    []
  );
  const firstRevise = reviseNext[0];

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
          <span className="eyebrow">Outcome School · AI Engineer Roadmap</span>
          <h1>
            Every roadmap blog, <em>distilled</em> into notes.
          </h1>
          <p className="lead">
            {totals.count} articles by Amit Shekhar across {totals.steps} steps — from machine-learning foundations to frontier
            agents. Each one condensed into revision notes with diagrams, and tracked against my own study progress.
          </p>
          <div className="hero-actions">
            {firstRevise && (
              <a className="btn btn-primary" href={firstRevise.href}>
                Continue revising <ArrowRight size={16} />
              </a>
            )}
            <button className="btn" onClick={openSearch}>
              <Search size={15} /> Search notes
            </button>
          </div>
          </div>

          <aside className="next-card" aria-label="Revise next">
            <div className="next-card-head">
              <span>Revise next</span>
              <a href="#/progress">All {totals.revision} →</a>
            </div>
            <ol>
              {reviseNext.map((b) => (
                <li key={b.id}>
                  <a href={b.href}>
                    <span className="next-title">{b.title}</span>
                    <span className="next-meta">
                      <span className="meter st-revision"><span className="meter-track"><span className="meter-fill" style={{ width: `${b.progress.understanding}%`, background: 'var(--c)' }} /></span></span>
                      {b.progress.understanding}% · Step {b.stepInfo.num}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="figures hero-figures">
            <div className="figure">
              <div className="figure-num">{totals.count}</div>
              <div className="figure-label">articles in {totals.steps} steps</div>
            </div>
            <div className="figure">
              <div className="figure-num">{fmtHours(totals.mins)}<small>h</small></div>
              <div className="figure-label">{(totals.words / 1000).toFixed(0)}k words of reading</div>
            </div>
            <div className="figure">
              <div className="figure-num">{Math.round(totals.words / totals.count).toLocaleString()}</div>
              <div className="figure-label">words in an average article</div>
            </div>
            <a className="figure" href="#/progress">
              <div className="figure-num">{totals.pct}<small>%</small></div>
              <div className="figure-label">studied so far →</div>
            </a>
          </div>
        </div>
      </section>

      <div className="wrap layout">
        <aside className="sidebar" aria-label="Steps">
          <div className="sidebar-title">Curriculum</div>
          <ol className="step-nav">
            {steps.map((s) => (
              <li key={s.id}>
                <a
                  href={`#/`}
                  className={showGrouped && active === s.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    if (!showGrouped) { setSort('roadmap'); setView('list'); }
                    if (filtersOn) reset();
                    requestAnimationFrame(() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
                  }}
                >
                  <span className="step-nav-num">{s.num.padStart(2, '0')}</span>
                  <span className="step-nav-name">{s.name}</span>
                  <span className="step-nav-count">{s.done}/{s.total}</span>
                  <span className="step-nav-bar" aria-hidden="true"><span style={{ width: `${(s.done / s.total) * 100}%` }} /></span>
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <main>
          <div className="toolbar">
            <div className="search-field">
              <Search size={16} />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter by title, topic or step…" aria-label="Filter articles" />
              {q && (
                <button className="icon-btn clear" style={{ width: 26, height: 26 }} onClick={() => setQ('')} aria-label="Clear filter">
                  <X size={14} />
                </button>
              )}
            </div>
            <select className="select" value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Study status">
              <option value="all">Any status</option>
              <option value="done">Studied</option>
              <option value="revision">Needs revision</option>
              <option value="todo">Not started</option>
            </select>
            <select className="select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort">
              <option value="roadmap">Roadmap order</option>
              <option value="long">Longest first</option>
              <option value="short">Shortest first</option>
              <option value="title">Title A–Z</option>
            </select>
          </div>
          <div className="chips" role="group" aria-label="Length">
            {['all', 'quick', 'standard', 'deep', 'long'].map((k) => (
              <button key={k} className="chip" aria-pressed={length === k} onClick={() => setLength(k)}>
                {k === 'all' ? 'All lengths' : LENGTHS[k]} <span className="count">{lengthCounts[k] || 0}</span>
              </button>
            ))}
          </div>

          <div className="toolbar-meta" style={{ marginTop: 18 }}>
            <span>
              Showing <b style={{ color: 'var(--ink)' }}>{filtered.length}</b> of {blogs.length}
              {filtersOn && <> · <button className="text-btn" onClick={reset}>clear filters</button></>}
            </span>
            <span style={{ display: 'inline-flex', gap: 12, alignItems: 'center' }}>
              <button className="text-btn" onClick={() => exportCsv(sorted)}>Export CSV</button>
              <span className="view-toggle" role="group" aria-label="View">
                <button aria-pressed={view === 'list'} onClick={() => setView('list')}><List size={14} /> List</button>
                <button aria-pressed={view === 'table'} onClick={() => setView('table')}><Table2 size={14} /> Table</button>
              </span>
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="empty">
              <h3>Nothing matches these filters</h3>
              <button className="btn btn-sm" onClick={reset}>Clear filters</button>
            </div>
          ) : view === 'table' ? (
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>#</th><th>Title</th><th>Step</th><th style={{ textAlign: 'right' }}>Words</th><th style={{ textAlign: 'right' }}>Read</th><th style={{ textAlign: 'right' }}>Code</th><th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((b) => (
                    <tr key={b.id}>
                      <td className="num" style={{ textAlign: 'left' }}>{b.id}</td>
                      <td><a href={b.href}>{b.title}</a></td>
                      <td style={{ color: 'var(--ink-3)', whiteSpace: 'nowrap' }}>Step {b.stepInfo.num}</td>
                      <td className="num">{b.word_count.toLocaleString()}</td>
                      <td className="num">{b.mins} min</td>
                      <td className="num">{b.code_blocks_count}</td>
                      <td><span className={`status st-${b.status}`}>{b.status === 'revision' ? `${b.progress.understanding}%` : STATUS[b.status].short}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : showGrouped ? (
            grouped.map((s) => (
              <section key={s.id} id={s.id} className="step-section">
                <div className="step-head">
                  <div>
                    <span className="eyebrow">Step {s.num}</span>
                    <h2>{s.name}</h2>
                  </div>
                  <div className="step-head-meta">
                    {s.total} articles · {fmtHours(s.mins)} h<br />
                    {s.done} of {s.total} studied
                  </div>
                </div>
                <ul className="post-list">
                  {s.visible.map((b) => <PostRow key={b.id} b={b} />)}
                </ul>
              </section>
            ))
          ) : (
            <ul className="post-list" style={{ borderTop: '1px solid var(--ink)' }}>
              {sorted.map((b) => <PostRow key={b.id} b={b} showStep />)}
            </ul>
          )}
        </main>
      </div>
    </>
  );
}
