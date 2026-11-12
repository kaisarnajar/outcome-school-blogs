import React, { useMemo, useState } from 'react';
import { CheckCircle2, RotateCcw, Circle, Sparkles, Gauge, Search, X, ExternalLink, NotebookPen } from 'lucide-react';
import blogsData from '../data/blogsData.json';
import progressData from '../data/progressData.json';
import { noteHref } from '../notes';

// Filters survive leaving the page (e.g. opening a note and coming back).
const saved = { filter: 'all', step: 'all', search: '' };

const STATUS_META = {
  mastered: { label: 'Mastered', cls: 'pg-mastered', Icon: CheckCircle2 },
  revision: { label: 'Needs revision', cls: 'pg-revision', Icon: RotateCcw },
  pending: { label: 'Not started', cls: 'pg-pending', Icon: Circle },
  new: { label: 'New · not started', cls: 'pg-new', Icon: Sparkles },
};

function classify(entry) {
  if (!entry) return 'new';
  if (entry.status !== 'completed') return 'pending';
  return entry.understanding === 100 ? 'mastered' : 'revision';
}

function shortStep(step) {
  const [num, rest] = step.split(':');
  return { num: num.replace('Step ', ''), name: (rest || '').trim() };
}

export default function ProgressPage() {
  const [filter, setFilterState] = useState(saved.filter);
  const [step, setStepState] = useState(saved.step);
  const [search, setSearchState] = useState(saved.search);
  const setFilter = (v) => setFilterState((saved.filter = v));
  const setStep = (v) => setStepState((saved.step = v));
  const setSearch = (v) => setSearchState((saved.search = v));

  const items = useMemo(() => {
    const byUrl = new Map(progressData.entries.map((e) => [e.url, e]));
    return blogsData.map((b) => {
      const entry = byUrl.get(b.url);
      return {
        ...b,
        progress: entry || null,
        kind: classify(entry),
        notesUrl: noteHref(b),
      };
    });
  }, []);

  const totals = useMemo(() => {
    const t = { mastered: 0, revision: 0, pending: 0, new: 0 };
    items.forEach((i) => (t[i.kind] += 1));
    const completed = t.mastered + t.revision;
    const levels = items.filter((i) => i.progress?.understanding != null).map((i) => i.progress.understanding);
    const avg = levels.length ? Math.round(levels.reduce((a, b) => a + b, 0) / levels.length) : 0;
    const minsDone = items
      .filter((i) => i.kind === 'mastered' || i.kind === 'revision')
      .reduce((a, i) => a + (i.reading_time_mins || 0), 0);
    const minsTotal = items.reduce((a, i) => a + (i.reading_time_mins || 0), 0);
    return { ...t, completed, total: items.length, avg, minsDone, minsTotal };
  }, [items]);

  const steps = useMemo(() => {
    const map = new Map();
    items.forEach((i) => {
      if (!map.has(i.step)) map.set(i.step, { step: i.step, items: [], mastered: 0, revision: 0, pending: 0, new: 0 });
      const s = map.get(i.step);
      s.items.push(i);
      s[i.kind] += 1;
    });
    return Array.from(map.values());
  }, [items]);

  const visibleSteps = useMemo(() => {
    const q = search.trim().toLowerCase();
    return steps
      .filter((s) => step === 'all' || s.step === step)
      .map((s) => ({
        ...s,
        visible: s.items.filter((i) => {
          if (filter === 'completed' && !(i.kind === 'mastered' || i.kind === 'revision')) return false;
          if (filter === 'not-started' && !(i.kind === 'pending' || i.kind === 'new')) return false;
          if (filter !== 'all' && filter !== 'completed' && filter !== 'not-started' && i.kind !== filter) return false;
          if (q && !(i.title.toLowerCase().includes(q) || (i.progress?.gap || '').toLowerCase().includes(q))) return false;
          return true;
        }),
      }))
      .filter((s) => s.visible.length > 0);
  }, [steps, filter, step, search]);

  const visibleCount = visibleSteps.reduce((a, s) => a + s.visible.length, 0);
  const pct = (n) => Math.round((n / totals.total) * 100);

  const chips = [
    { key: 'all', label: 'All', count: totals.total },
    { key: 'completed', label: 'Completed', count: totals.completed },
    { key: 'mastered', label: 'Mastered', count: totals.mastered },
    { key: 'revision', label: 'Needs revision', count: totals.revision },
    { key: 'not-started', label: 'Not started', count: totals.pending + totals.new },
  ];

  return (
    <>
      <header className="hero-section">
        <div className="hero-pill">
          <span className="dot" />
          <span>Tracker last updated {new Date(progressData.updated).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
        </div>
        <h1 className="hero-title">
          My Study Progress <br />
          <span className="gradient-text">AI Engineering Roadmap</span>
        </h1>
        <p className="hero-desc">
          Which roadmap blogs I've completed, how well I understood each one, and what still needs another round.
        </p>
      </header>

      <section className="pg-overview" aria-label="Overall progress">
        <div className="pg-ring-card">
          <div className="pg-ring" style={{ '--p': pct(totals.completed) }}>
            <div className="pg-ring-inner">
              <div className="pg-ring-num">{pct(totals.completed)}%</div>
              <div className="pg-ring-label">complete</div>
            </div>
          </div>
          <div className="pg-ring-meta">
            <div className="pg-ring-title">
              <strong>{totals.completed}</strong> of {totals.total} blogs
            </div>
            <div className="pg-ring-sub">
              ~{Math.round(totals.minsDone / 60)} of {Math.round(totals.minsTotal / 60)} reading hours done
            </div>
            <div className="pg-stack" role="img" aria-label="Progress breakdown">
              {['mastered', 'revision', 'pending', 'new'].map((k) =>
                totals[k] ? <span key={k} className={`pg-seg ${STATUS_META[k].cls}`} style={{ flexGrow: totals[k] }} title={`${STATUS_META[k].label}: ${totals[k]}`} /> : null
              )}
            </div>
            <div className="pg-legend">
              {['mastered', 'revision', 'pending', 'new'].map((k) => (
                <span key={k} className="pg-legend-item">
                  <span className={`pg-dot ${STATUS_META[k].cls}`} />
                  {STATUS_META[k].label} <strong>{totals[k]}</strong>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="stats-grid pg-stats">
          <div className="stat-card accent-emerald">
            <div className="stat-header"><span className="stat-label">Mastered</span><div className="stat-icon"><CheckCircle2 size={18} /></div></div>
            <div className="stat-value">{totals.mastered}</div>
            <div className="stat-subtext">Completed at 100% understanding</div>
          </div>
          <div className="stat-card accent-amber">
            <div className="stat-header"><span className="stat-label">Needs revision</span><div className="stat-icon"><RotateCcw size={18} /></div></div>
            <div className="stat-value">{totals.revision}</div>
            <div className="stat-subtext">Completed, below 100%</div>
          </div>
          <div className="stat-card accent-cyan">
            <div className="stat-header"><span className="stat-label">Not started</span><div className="stat-icon"><Circle size={18} /></div></div>
            <div className="stat-value">{totals.pending + totals.new}</div>
            <div className="stat-subtext">{totals.new} newly added to the roadmap</div>
          </div>
          <div className="stat-card accent-purple">
            <div className="stat-header"><span className="stat-label">Avg understanding</span><div className="stat-icon"><Gauge size={18} /></div></div>
            <div className="stat-value">{totals.avg}%</div>
            <div className="stat-subtext">Across completed blogs</div>
          </div>
        </div>
      </section>

      <section className="pg-steps" aria-label="Progress by step">
        <h2 className="pg-section-title">Progress by step</h2>
        <div className="pg-step-grid">
          {steps.map((s) => {
            const done = s.mastered + s.revision;
            const { num, name } = shortStep(s.step);
            const active = step === s.step;
            return (
              <button
                key={s.step}
                className={`pg-step-card${active ? ' active' : ''}`}
                onClick={() => setStep(active ? 'all' : s.step)}
                title={active ? 'Show all steps' : `Show only ${s.step}`}
              >
                <div className="pg-step-head">
                  <span className="pg-step-num">{num}</span>
                  <span className="pg-step-name">{name}</span>
                  <span className="pg-step-count">{done}/{s.items.length}</span>
                </div>
                <div className="pg-stack small">
                  {['mastered', 'revision', 'pending', 'new'].map((k) =>
                    s[k] ? <span key={k} className={`pg-seg ${STATUS_META[k].cls}`} style={{ flexGrow: s[k] }} /> : null
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="control-bar pg-controls">
        <div className="search-and-selects">
          <div className="search-box-wrapper">
            <Search size={16} className="search-icon-inside" />
            <input
              className="search-input"
              placeholder="Search titles or what I haven't understood…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="clear-search-btn" onClick={() => setSearch('')} aria-label="Clear search">
                <X size={14} />
              </button>
            )}
          </div>
          <select className="select-dropdown" value={step} onChange={(e) => setStep(e.target.value)}>
            <option value="all">All steps</option>
            {steps.map((s) => (
              <option key={s.step} value={s.step}>{s.step}</option>
            ))}
          </select>
        </div>
        <div className="chips-group">
          {chips.map((c) => (
            <button key={c.key} className={`filter-chip${filter === c.key ? ' active' : ''}`} onClick={() => setFilter(c.key)}>
              {c.label} <span className="chip-count">{c.count}</span>
            </button>
          ))}
        </div>
      </section>

      <div className="results-meta-bar">
        <div>Showing <strong>{visibleCount}</strong> of <strong>{totals.total}</strong> blogs</div>
      </div>

      {visibleSteps.length === 0 && (
        <div className="empty-state">
          <h3 className="empty-title">Nothing matches these filters</h3>
          <button className="reset-filters-btn" onClick={() => { setFilter('all'); setStep('all'); setSearch(''); }}>Reset filters</button>
        </div>
      )}

      {visibleSteps.map((s) => (
        <section key={s.step} className="pg-group">
          <h3 className="pg-group-title">
            {s.step}
            <span className="pg-group-count">{s.mastered + s.revision}/{s.items.length} done</span>
          </h3>
          <ul className="pg-list">
            {s.visible.map((i) => {
              const meta = STATUS_META[i.kind];
              const lvl = i.progress?.understanding;
              return (
                <li key={i.id} className={`pg-row ${meta.cls}`}>
                  <span className="pg-row-id">{i.id}</span>
                  <div className="pg-row-main">
                    <a className="pg-row-title" href={i.notesUrl} title="Open my short notes">
                      {i.title}
                    </a>
                    {i.progress?.gap && <div className="pg-row-gap">{i.progress.gap}</div>}
                  </div>
                  <div className="pg-row-side">
                    <span className={`pg-badge ${meta.cls}`}>
                      <meta.Icon size={13} /> {meta.label}
                    </span>
                    {lvl != null && (
                      <span className="pg-level" title={`Understanding: ${lvl}%`}>
                        <span className="pg-level-track"><span className="pg-level-fill" style={{ width: `${lvl}%` }} /></span>
                        <span className="pg-level-num">{lvl}%</span>
                      </span>
                    )}
                    <span className="pg-row-links">
                      <span className="pg-row-time">{i.reading_time_mins} min</span>
                      {i.notesUrl && (
                        <a href={i.notesUrl} title="My notes" className="pg-icon-link">
                          <NotebookPen size={15} />
                        </a>
                      )}
                      <a href={i.url} target="_blank" rel="noopener noreferrer" title="Read the blog" className="pg-icon-link">
                        <ExternalLink size={15} />
                      </a>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </>
  );
}
