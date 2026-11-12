import React, { useMemo, useState } from 'react';
import { Search, X, ExternalLink } from 'lucide-react';
import { blogs, steps, totals, progressUpdated, fmtHours, STATUS } from '../lib/data';

const saved = { filter: 'all', q: '' };

function SegBar({ s, className = '' }) {
  return (
    <div className={`segbar ${className}`} aria-hidden="true">
      {['mastered', 'revision', 'pending', 'new'].map((k) => (s[k] ? <span key={k} className={`st-${k}`} style={{ flexGrow: s[k] }} /> : null))}
    </div>
  );
}

function Meter({ value, kind }) {
  return (
    <span className={`meter st-${kind}`} title={`Understanding ${value}%`}>
      <span className="meter-track"><span className="meter-fill" style={{ width: `${value}%`, background: 'var(--c)' }} /></span>
      <span className="meter-num">{value}%</span>
    </span>
  );
}

export default function ProgressPage() {
  const [filter, setF] = useState(saved.filter);
  const [q, setQ_] = useState(saved.q);
  const setFilter = (v) => setF((saved.filter = v));
  const setQ = (v) => setQ_((saved.q = v));

  const queue = useMemo(
    () => blogs.filter((b) => b.status === 'revision').sort((a, b) => a.progress.understanding - b.progress.understanding || a.id - b.id),
    []
  );

  const listed = useMemo(() => {
    const query = q.trim().toLowerCase();
    return blogs.filter((b) => {
      if (filter === 'done' && !(b.status === 'mastered' || b.status === 'revision')) return false;
      if (filter === 'todo' && !(b.status === 'pending' || b.status === 'new')) return false;
      if ((filter === 'mastered' || filter === 'revision') && b.status !== filter) return false;
      if (query && !(b.title.toLowerCase().includes(query) || (b.progress?.gap || '').toLowerCase().includes(query))) return false;
      return true;
    });
  }, [filter, q]);

  const grouped = steps.map((s) => ({ ...s, visible: listed.filter((b) => b.step === s.step) })).filter((s) => s.visible.length);
  const updated = new Date(progressUpdated).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  const chips = [
    ['all', 'All', totals.count],
    ['done', 'Studied', totals.done],
    ['mastered', 'Mastered', totals.mastered],
    ['revision', 'Needs revision', totals.revision],
    ['todo', 'Not started', totals.pending + totals.new],
  ];

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">Study progress · updated {updated}</span>
          <div className="progress-hero" style={{ marginTop: 18 }}>
            <div>
              <div className="big-pct">{totals.pct}<small>% studied</small></div>
              <p className="lead" style={{ marginTop: 18 }}>
                {totals.done} of {totals.count} articles read — about {Math.round(totals.minsDone / 60)} of {Math.round(totals.mins / 60)} hours.
                Average understanding across them is <b style={{ color: 'var(--ink)' }}>{totals.avg}%</b>.
              </p>
            </div>
            <div className="progress-summary">
              <SegBar s={totals} />
              <div className="legend">
                {['mastered', 'revision', 'pending', 'new'].map((k) => (
                  <span key={k} className={`status st-${k}`}>{STATUS[k].label}<b>{totals[k]}</b></span>
                ))}
              </div>
            </div>
          </div>
          <div className="figures">
            <div className="figure"><div className="figure-num">{totals.mastered}</div><div className="figure-label">mastered at 100%</div></div>
            <div className="figure"><div className="figure-num">{totals.revision}</div><div className="figure-label">need another round</div></div>
            <div className="figure"><div className="figure-num">{totals.pending + totals.new}</div><div className="figure-label">not started ({totals.new} new)</div></div>
            <div className="figure"><div className="figure-num">{totals.avg}<small>%</small></div><div className="figure-label">average understanding</div></div>
          </div>
        </div>
      </section>

      <div className="wrap" style={{ paddingBottom: 96 }}>
        <section className="section">
          <div className="section-head">
            <div>
              <h2>Revision queue</h2>
              <p>Everything below 100%, weakest first — with what I noted as still unclear.</p>
            </div>
            <span className="muted" style={{ fontSize: 13 }}>{queue.length} articles</span>
          </div>
          <div className="queue">
            {queue.slice(0, 12).map((b) => (
              <div key={b.id} className="queue-card">
                <div className="queue-top">
                  <span>Step {b.stepInfo.num} · {b.mins} min</span>
                  <Meter value={b.progress.understanding} kind="revision" />
                </div>
                <a href={b.href}>{b.title}</a>
                {b.progress.gap && <p>{b.progress.gap}</p>}
              </div>
            ))}
          </div>
          {queue.length > 12 && (
            <p style={{ marginTop: 14, fontSize: 13.5 }}>
              <button className="text-btn" onClick={() => { setFilter('revision'); document.getElementById('all-articles')?.scrollIntoView({ behavior: 'smooth' }); }}>
                See all {queue.length} in the list below
              </button>
            </p>
          )}
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <h2>By step</h2>
              <p>How far along each part of the curriculum is.</p>
            </div>
          </div>
          <div className="step-table">
            {steps.map((s) => (
              <a key={s.id} className="step-row" href={`#/progress`} onClick={(e) => { e.preventDefault(); setFilter('all'); setQ(''); requestAnimationFrame(() => document.getElementById('p-' + s.id)?.scrollIntoView({ behavior: 'smooth' })); }}>
                <span className="step-row-num">{s.num.padStart(2, '0')}</span>
                <span className="step-row-name">{s.name}</span>
                <SegBar s={s} />
                <span className="step-row-count">{s.done}/{s.total}</span>
                <span className="step-row-avg">{s.avg != null ? `avg ${s.avg}%` : '—'}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="all-articles">
          <div className="section-head">
            <div>
              <h2>Every article</h2>
              <p>Status, understanding and notes-to-self for all {totals.count}.</p>
            </div>
          </div>
          <div className="toolbar">
            <div className="search-field">
              <Search size={16} />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search titles or what I haven't understood…" aria-label="Search progress" />
              {q && <button className="icon-btn clear" style={{ width: 26, height: 26 }} onClick={() => setQ('')} aria-label="Clear"><X size={14} /></button>}
            </div>
          </div>
          <div className="chips" role="group" aria-label="Filter by status">
            {chips.map(([k, label, n]) => (
              <button key={k} className="chip" aria-pressed={filter === k} onClick={() => setFilter(k)}>
                {label} <span className="count">{n}</span>
              </button>
            ))}
          </div>

          {grouped.length === 0 && (
            <div className="empty"><h3>Nothing matches</h3><button className="btn btn-sm" onClick={() => { setFilter('all'); setQ(''); }}>Clear filters</button></div>
          )}

          {grouped.map((s) => (
            <section key={s.id} id={'p-' + s.id} className="step-section">
              <div className="step-head">
                <div>
                  <span className="eyebrow">Step {s.num}</span>
                  <h2>{s.name}</h2>
                </div>
                <div className="step-head-meta">{s.done} of {s.total} studied<br />{fmtHours(s.mins)} h of reading</div>
              </div>
              <ul className="post-list">
                {s.visible.map((b) => (
                  <li key={b.id} className="post">
                    <span className="post-num">{String(b.id).padStart(3, '0')}</span>
                    <div>
                      <a href={b.href} className="post-title" style={{ fontSize: 17.5 }}>{b.title}</a>
                      {b.progress?.gap && <div className="post-gap"><b>To revisit:</b> {b.progress.gap}</div>}
                    </div>
                    <div className="post-side">
                      {b.progress?.understanding != null ? (
                        <Meter value={b.progress.understanding} kind={b.status} />
                      ) : (
                        <span className={`status st-${b.status}`}>{STATUS[b.status].label}</span>
                      )}
                      <span className="post-meta">{b.mins} min read</span>
                      <a className="post-ext" href={b.url} target="_blank" rel="noopener noreferrer" title="Read the original blog" aria-label={`Original: ${b.title}`}>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </section>
      </div>
    </>
  );
}
