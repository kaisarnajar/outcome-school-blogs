import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, CornerDownLeft, ArrowUp, ArrowDown } from 'lucide-react';
import { blogs, STATUS } from '../lib/data';

function score(b, q) {
  const t = b.title.toLowerCase();
  if (t.startsWith(q)) return 3;
  if (t.split(/\W+/).some((w) => w.startsWith(q))) return 2;
  if (t.includes(q)) return 1.5;
  if (b.step.toLowerCase().includes(q) || (b.excerpt || '').toLowerCase().includes(q)) return 1;
  return 0;
}

export default function CommandPalette({ open, onClose }) {
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQ('');
      setSel(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) {
      const revise = blogs
        .filter((b) => b.status === 'revision')
        .sort((a, b) => a.progress.understanding - b.progress.understanding)
        .slice(0, 6);
      const next = blogs.filter((b) => b.status === 'pending' || b.status === 'new').slice(0, 4);
      return [
        ...revise.map((b) => ({ b, group: 'Revise next' })),
        ...next.map((b) => ({ b, group: 'Not started yet' })),
      ];
    }
    const terms = query.split(/\s+/);
    return blogs
      .map((b) => ({ b, s: terms.reduce((acc, t) => (acc === 0 ? 0 : Math.min(acc, score(b, t) || 0)), 9) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s || a.b.id - b.b.id)
      .slice(0, 40)
      .map((x) => ({ b: x.b, group: 'Notes' }));
  }, [q]);

  useEffect(() => setSel(0), [q]);

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [sel]);

  if (!open) return null;

  const go = (b) => {
    onClose();
    window.location.hash = b.href.slice(1);
  };

  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => Math.min(s + 1, results.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
    else if (e.key === 'Enter' && results[sel]) { e.preventDefault(); go(results[sel].b); }
    else if (e.key === 'Escape') { e.preventDefault(); onClose(); }
  };

  let lastGroup = null;
  return (
    <div className="palette-backdrop" onMouseDown={onClose}>
      <div className="palette" role="dialog" aria-modal="true" aria-label="Search notes" onMouseDown={(e) => e.stopPropagation()}>
        <div className="palette-input">
          <Search size={18} />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKey}
            placeholder={`Search ${blogs.length} notes by title or topic…`}
            aria-label="Search notes"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
          />
          <span className="kbd">esc</span>
        </div>
        <ul className="palette-list" id="palette-list" role="listbox" ref={listRef}>
          {results.length === 0 && <li className="palette-group" style={{ textTransform: 'none', letterSpacing: 0, fontWeight: 400 }}>No notes match “{q}”.</li>}
          {results.map(({ b, group }, i) => {
            const header = group !== lastGroup ? <li key={'g-' + group} className="palette-group" role="presentation">{group}</li> : null;
            lastGroup = group;
            return (
              <React.Fragment key={b.id}>
                {header}
                <li
                  className="palette-item"
                  role="option"
                  aria-selected={i === sel}
                  onMouseMove={() => setSel(i)}
                  onClick={() => go(b)}
                >
                  <span className="step-num">{b.stepInfo.num.padStart(2, '0')}</span>
                  <span style={{ minWidth: 0 }}>
                    <div className="t">{b.title}</div>
                    <div className="s">{b.stepInfo.name}</div>
                  </span>
                  <span className={`status st-${b.status}`}>
                    {b.status === 'revision' ? `${b.progress.understanding}%` : STATUS[b.status].short}
                  </span>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
        <div className="palette-foot">
          <span><ArrowUp size={12} /><ArrowDown size={12} /> navigate</span>
          <span><CornerDownLeft size={12} /> open</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
