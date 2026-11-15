import React, { useMemo, useRef } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { blogs, steps, addedInfo, fmtDay, STATUS } from '../lib/data';

// All dates are 'YYYY-MM-DD' strings handled in UTC so no timezone can shift a day.
const toDate = (iso) => new Date(iso + 'T00:00:00Z');
const toIso = (d) => d.toISOString().slice(0, 10);
const addDays = (iso, n) => { const d = toDate(iso); d.setUTCDate(d.getUTCDate() + n); return toIso(d); };
const daysBetween = (a, b) => Math.round((toDate(b) - toDate(a)) / 86400000);
const localToday = () => {
  const t = new Date();
  return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`;
};

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const LONG_DAY = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' };
const level = (n) => (n === 0 ? 0 : n >= 4 ? 4 : n);
const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;

const byDay = new Map();
blogs.forEach((b) => {
  if (!b.added) return;
  if (!byDay.has(b.added)) byDay.set(b.added, []);
  byDay.get(b.added).push(b);
});
const activeDays = [...byDay.keys()].sort();
const launch = addedInfo.launch || activeDays[0];

function stats(today) {
  const since = blogs.filter((b) => b.added && b.added !== launch).length;
  const elapsed = Math.max(1, daysBetween(launch, today));
  const most = Math.max(0, ...activeDays.filter((d) => d !== launch).map((d) => byDay.get(d).length));
  const mostDays = activeDays.filter((d) => d !== launch && byDay.get(d).length === most).length;
  // Current streak: consecutive days with additions, ending today (or yesterday, if today has none yet).
  let cur = byDay.has(today) ? today : addDays(today, -1);
  let streak = 0;
  while (byDay.has(cur) && cur > launch) { streak++; cur = addDays(cur, -1); }
  const weekAgo = addDays(today, -6);
  const thisWeek = blogs.filter((b) => b.added && b.added >= weekAgo && b.added <= today && b.added !== launch).length;
  return { since, perDay: (since / elapsed).toFixed(1), most, mostDays, streak, thisWeek };
}

// Weeks (Sunday-first columns) from the launch week to the current week.
function buildWeeks(start, end) {
  const first = addDays(start, -toDate(start).getUTCDay());
  const weeks = [];
  for (let w = first; w <= end; w = addDays(w, 7)) {
    weeks.push(Array.from({ length: 7 }, (_, i) => addDays(w, i)));
  }
  return weeks;
}

function Heatmap({ weeks, start, end, selected, onSelect }) {
  const gridRef = useRef(null);
  // Big squares while the roadmap is young; shrink as the calendar grows (the card scrolls past ~a year).
  const cell = weeks.length <= 16 ? 26 : weeks.length <= 30 ? 20 : weeks.length <= 44 ? 15 : 12;
  const months = [];
  weeks.forEach((wk, i) => {
    const firstOfMonth = wk.find((d) => d.endsWith('-01') && d >= start && d <= end);
    if (i === 0 || firstOfMonth) {
      const d = firstOfMonth || (wk[0] < start ? start : wk[0]);
      months.push({ col: i, label: fmtDay(d, { month: 'short', timeZone: 'UTC' }) });
    }
  });
  // Like GitHub: if the partial first month sits too close to the next label, drop the first one.
  const minCols = Math.ceil(30 / (cell + (cell > 20 ? 5 : 3)));
  const monthLabels = months.filter((m, i) => !(i === 0 && months[1] && months[1].col - m.col < minCols));

  const onKey = (e) => {
    const step = { ArrowLeft: -7, ArrowRight: 7, ArrowUp: -1, ArrowDown: 1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = addDays(selected, step);
    if (next < start || next > end) return;
    onSelect(next);
    requestAnimationFrame(() => gridRef.current?.querySelector(`[data-day="${next}"]`)?.focus());
  };

  return (
    <div className="hm" style={{ '--weeks': weeks.length, '--cell': `${cell}px`, '--gap': `${cell > 20 ? 5 : 3}px` }}>
      <div className="hm-months" aria-hidden="true">
        {monthLabels.map((m) => <span key={m.col} style={{ gridColumn: `${m.col + 1} / span ${minCols}` }}>{m.label}</span>)}
      </div>
      <div className="hm-days" aria-hidden="true">
        {WEEKDAYS.map((d, i) => <span key={d}>{i % 2 ? d : ''}</span>)}
      </div>
      <div className="hm-grid" ref={gridRef} role="grid" aria-label="Blogs added to the roadmap per day" onKeyDown={onKey}>
        {weeks.map((wk) => (
          <div key={wk[0]} className="hm-week" role="row">
            {wk.map((d) => {
              const inRange = d >= start && d <= end;
              if (!inRange) return <span key={d} className="hm-cell out" role="presentation" />;
              const n = byDay.get(d)?.length || 0;
              const label = `${n ? plural(n, 'blog') : 'No blogs'} added · ${fmtDay(d, LONG_DAY)}${d === launch ? ' · roadmap launch' : ''}`;
              return (
                <button
                  key={d}
                  type="button"
                  role="gridcell"
                  data-day={d}
                  data-l={level(n)}
                  className={`hm-cell${d === launch ? ' launch' : ''}`}
                  aria-label={label}
                  aria-selected={d === selected}
                  tabIndex={d === selected ? 0 : -1}
                  title={label}
                  onClick={() => onSelect(d)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ActivityPage({ day }) {
  const today = useMemo(localToday, []);
  const end = today > activeDays[activeDays.length - 1] ? today : activeDays[activeDays.length - 1];
  const weeks = useMemo(() => buildWeeks(launch, end), [end]);
  const s = useMemo(() => stats(today), [today]);
  const latest = activeDays[activeDays.length - 1];
  const selected = day && /^\d{4}-\d{2}-\d{2}$/.test(day) && day >= launch && day <= end ? day : latest;
  const list = byDay.get(selected) || [];
  const grouped = steps.map((st) => ({ ...st, items: list.filter((b) => b.step === st.step) })).filter((st) => st.items.length);
  const idx = activeDays.indexOf(selected);
  const prevDay = idx >= 0 ? activeDays[idx - 1] : [...activeDays].reverse().find((d) => d < selected);
  const nextDay = idx >= 0 ? activeDays[idx + 1] : activeDays.find((d) => d > selected);
  const recent = [...activeDays].reverse().slice(0, 8);

  const select = (d) => {
    const target = `#/activity/${d}`;
    if (window.location.hash !== target) window.location.hash = target.slice(1);
  };
  const selectAndShow = (d) => {
    select(d);
    requestAnimationFrame(() => document.getElementById('day-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">Roadmap activity · synced {fmtDay(addedInfo.updated)}</span>
          <h1>When each blog <em>joined</em> the roadmap.</h1>
          <p className="lead">
            The roadmap launched on {fmtDay(launch, LONG_DAY)} with {byDay.get(launch)?.length || 0} blogs. Since then
            Amit Shekhar has added {s.since} more. Each square is a day — pick one to see what landed.
          </p>
          <div className="figures">
            <div className="figure"><div className="figure-num">{s.since}</div><div className="figure-label">added since launch</div></div>
            <div className="figure"><div className="figure-num">{s.perDay}</div><div className="figure-label">blogs per day on average</div></div>
            <div className="figure"><div className="figure-num">{s.thisWeek}</div><div className="figure-label">in the last 7 days</div></div>
            <div className="figure">
              <div className="figure-num">{s.streak}<small>{s.streak === 1 ? 'day' : 'days'}</small></div>
              <div className="figure-label">current daily streak</div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap" style={{ paddingBottom: 96 }}>
        <section className="section">
          <div className="section-head">
            <div>
              <h2>Daily additions</h2>
              <p>
                {fmtDay(launch)} – {fmtDay(end)} · {activeDays.length} days with new blogs
                {s.most > 0 && <> · at most {s.most} in a day since launch ({plural(s.mostDays, 'day')})</>}
              </p>
            </div>
          </div>

          <div className="activity-card">
            <div className="hm-scroll">
              <Heatmap weeks={weeks} start={launch} end={end} selected={selected} onSelect={select} />
              <div className="hm-legend" aria-hidden="true">
                <span>Less</span>
                {[0, 1, 2, 3, 4].map((l) => <span key={l} className="hm-cell" data-l={l} />)}
                <span>More</span>
                <span className="hm-legend-launch"><span className="hm-cell launch" data-l={4} /> Launch day</span>
              </div>
            </div>

            <aside className="recent-days" aria-label="Recent days">
              <div className="recent-head">Recent days</div>
              <ol>
                {recent.map((d) => (
                  <li key={d}>
                    <button type="button" aria-current={d === selected ? 'true' : undefined} onClick={() => selectAndShow(d)}>
                      <span>{fmtDay(d, { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' })}</span>
                      <span className="recent-bar" style={{ '--n': Math.min(byDay.get(d).length, 6) }} aria-hidden="true" />
                      <b>{byDay.get(d).length}</b>
                    </button>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </section>

        <section className="section day-panel" id="day-panel" aria-live="polite">
          <div className="day-head">
            <div>
              <span className="eyebrow">{selected === launch ? 'Roadmap launch' : selected === today ? 'Today' : 'Added on'}</span>
              <h2>{fmtDay(selected, LONG_DAY)}</h2>
              <p>{list.length ? `${plural(list.length, 'blog')} added to the roadmap${grouped.length > 1 ? ` across ${plural(grouped.length, 'step')}` : ''}.` : 'No blogs were added on this day.'}</p>
            </div>
            <div className="day-nav">
              <button className="btn btn-sm" disabled={!prevDay} onClick={() => prevDay && select(prevDay)} aria-label="Previous day with additions">
                <ArrowLeft size={14} /> {prevDay ? fmtDay(prevDay, { day: 'numeric', month: 'short', timeZone: 'UTC' }) : 'Earlier'}
              </button>
              <button className="btn btn-sm" disabled={!nextDay} onClick={() => nextDay && select(nextDay)} aria-label="Next day with additions">
                {nextDay ? fmtDay(nextDay, { day: 'numeric', month: 'short', timeZone: 'UTC' }) : 'Later'} <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {grouped.map((st) => (
            <section key={st.id} className="day-step">
              {grouped.length > 1 || list.length > 3 ? (
                <h3><span className="mono">{st.num.padStart(2, '0')}</span> {st.name} <span className="muted">· {st.items.length}</span></h3>
              ) : null}
              <ul className="post-list">
                {st.items.map((b) => (
                  <li key={b.id} className="post">
                    <span className="post-num">{String(b.id).padStart(3, '0')}</span>
                    <div>
                      <a href={b.href} className="post-title" style={{ fontSize: 17.5 }}>{b.title}</a>
                      <div className="post-meta" style={{ textAlign: 'left', marginTop: 4 }}>
                        {grouped.length === 1 && list.length <= 3 ? `Step ${st.num} · ${st.name} · ` : ''}
                        Published {b.published_date}
                      </div>
                    </div>
                    <div className="post-side">
                      <span className={`status st-${b.status}`}>
                        {b.status === 'revision' ? `Revise · ${b.progress.understanding}%` : STATUS[b.status].label}
                      </span>
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
