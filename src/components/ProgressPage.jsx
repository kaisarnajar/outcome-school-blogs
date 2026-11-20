import React, { useMemo, useState } from 'react';
import { Search, X, ExternalLink } from 'lucide-react';
import { blogs, steps, totals, progressUpdated, fmtHours, STATUS } from '../lib/data';

const saved = { filter: 'all', q: '' };

function ReadBar({ read, total, className = '' }) {
  return (
    <div className={`segbar ${className}`} aria-hidden="true">
      {read > 0 && <span className="st-read" style={{ flexGrow: read }} />}
      {total - read > 0 && <span className="st-unread" style={{ flexGrow: total - read }} />}
    </div>
  );
}

export default function ProgressPage() {
  const [filter, setF] = useState(saved.filter);
  const [q, setQ_] = useState(saved.q);
  const setFilter = (v) => setF((saved.filter = v));
  const setQ = (v) => setQ_((saved.q = v));

  const upNext = useMemo(() => blogs.filter((b) => b.status === 'unread').slice(0, 6), []);

  const listed = useMemo(() => {
    const query = q.trim().toLowerCase();
    return blogs.filter((b) => {
      if (filter !== 'all' && b.status !== filter) return false;
      if (query && !b.title.toLowerCase().includes(query)) return false;
      return true;
    });
  }, [filter, q]);

  const grouped = steps.map((s) => ({ ...s, visible: listed.filter((b) => b.step === s.step) })).filter((s) => s.visible.length);
  const updated = new Date(progressUpdated).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  const chips = [
    ['all', 'All', totals.count],
    ['read', 'Read', totals.read],
    ['unread', 'Unread', totals.unread],
  ];

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">Reading progress · updated {updated}</span>
          <div className="progress-hero" style={{ marginTop: 18 }}>
            <div>
              <div className="big-pct">{totals.pct}<small>% read</small></div>
              <p className="lead" style={{ marginTop: 18 }}>
                {totals.read} of {totals.count} articles read — about {Math.round(totals.minsRead / 60)} of {Math.round(totals.mins / 60)} hours.
              </p>
            </div>
            <div className="progress-summary">
              <ReadBar read={totals.read} total={totals.count} />
              <div className="legend">
                {['read', 'unread'].map((k) => (
                  <span key={k} className={`status st-${k}`}>{STATUS[k].label}<b>{totals[k]}</b></span>
                ))}
              </div>
            </div>
          </div>
          <div className="figures">
            <div className="figure"><div className="figure-num">{totals.read}</div><div className="figure-label">articles read</div></div>
            <div className="figure"><div className="figure-num">{totals.unread}</div><div className="figure-label">still to read</div></div>
            <div className="figure"><div className="figure-num">{fmtHours(totals.minsRead)}<small>h</small></div><div className="figure-label">of reading done</div></div>
            <div className="figure"><div className="figure-num">{fmtHours(totals.mins - totals.minsRead)}<small>h</small></div><div className="figure-label">of reading left</div></div>
          </div>
        </div>
      </section>

      <div className="wrap" style={{ paddingBottom: 96 }}>
        {upNext.length > 0 && (
          <section className="section">
            <div className="section-head">
              <div>
                <h2>Up next</h2>
                <p>The next unread articles, in roadmap order.</p>
              </div>
              <span className="muted" style={{ fontSize: 13 }}>{totals.unread} unread</span>
            </div>
            <div className="queue">
              {upNext.map((b) => (
                <div key={b.id} className="queue-card">
                  <div className="queue-top"><span>Step {b.stepInfo.num} · {b.mins} min</span></div>
                  <a href={b.href}>{b.title}</a>
                  <p>{b.stepInfo.name}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="section">
          <div className="section-head">
            <div>
              <h2>By step</h2>
              <p>How much of each part of the curriculum is read.</p>
            </div>
          </div>
          <div className="step-table">
            {steps.map((s) => (
              <a key={s.id} className="step-row" href={`#/progress`} onClick={(e) => { e.preventDefault(); setFilter('all'); setQ(''); requestAnimationFrame(() => document.getElementById('p-' + s.id)?.scrollIntoView({ behavior: 'smooth' })); }}>
                <span className="step-row-num">{s.num.padStart(2, '0')}</span>
                <span className="step-row-name">{s.name}</span>
                <ReadBar read={s.read} total={s.total} />
                <span className="step-row-count">{s.read}/{s.total}</span>
                <span className="step-row-avg">{Math.round((s.read / s.total) * 100)}%</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="all-articles">
          <div className="section-head">
            <div>
              <h2>Every article</h2>
              <p>Read or unread, for all {totals.count}.</p>
            </div>
          </div>
          <div className="toolbar">
            <div className="search-field">
              <Search size={16} />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search titles…" aria-label="Search articles" />
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
                <div className="step-head-meta">{s.read} of {s.total} read<br />{fmtHours(s.mins)} h of reading</div>
              </div>
              <ul className="post-list">
                {s.visible.map((b) => (
                  <li key={b.id} className="post">
                    <span className="post-num">{String(b.id).padStart(3, '0')}</span>
                    <div>
                      <a href={b.href} className="post-title" style={{ fontSize: 17.5 }}>{b.title}</a>
                    </div>
                    <div className="post-side">
                      <span className={`status st-${b.status}`}>{STATUS[b.status].label}</span>
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
