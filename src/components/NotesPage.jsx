import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { ArrowLeft, ArrowRight, ExternalLink, ChevronDown } from 'lucide-react';
import { blogs, STATUS } from '../lib/data';
import { loadNote, githubNoteUrl, nav } from '../notes';
import MermaidDiagram from './MermaidDiagram';

const DEFAULT_TITLE = 'AI Engineering Notes — Outcome School AI Engineer Roadmap';

function slugify(s, used) {
  let base = s.toLowerCase().replace(/[`*_~$\\]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
  let id = base;
  let i = 2;
  while (used.has(id)) id = `${base}-${i++}`;
  used.add(id);
  return id;
}

const plain = (s) => s.replace(/\*\*|__|`|\$/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').trim();

// Split the note into "## " sections (ignoring headings inside code fences) and collect h3s for the TOC.
function parseNote(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  let i = 0;
  while (i < lines.length && !lines[i].trim()) i++;
  if (lines[i]?.startsWith('# ')) i++;
  while (i < lines.length && !lines[i].trim()) i++;
  if (lines[i]?.startsWith('>') && /read|step/i.test(lines[i])) i++;

  const used = new Set();
  const sections = [];
  let cur = { title: null, id: 'intro', lines: [], subs: [] };
  let fence = false;
  for (; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*(```|~~~)/.test(line)) fence = !fence;
    if (!fence && line.startsWith('## ')) {
      if (cur.title || cur.lines.some((l) => l.trim())) sections.push(cur);
      const title = plain(line.slice(3));
      cur = { title, id: slugify(title, used), lines: [], subs: [] };
      continue;
    }
    if (!fence && line.startsWith('### ')) {
      const title = plain(line.slice(4));
      cur.subs.push({ title, id: slugify(title, used) });
    }
    cur.lines.push(line);
  }
  if (cur.title || cur.lines.some((l) => l.trim())) sections.push(cur);

  return sections.map((s) => {
    const t = (s.title || '').toLowerCase();
    const kind = /^tl;?dr/.test(t) ? 'tldr' : /takeaway/.test(t) ? 'takeaways' : /key concepts/.test(t) ? 'concepts' : '';
    return { ...s, body: s.lines.join('\n'), kind };
  });
}

const hastText = (n) => (n.type === 'text' ? n.value : (n.children || []).map(hastText).join(''));

function Section({ s, theme }) {
  const components = useMemo(() => {
    const subIds = new Map();
    s.subs.forEach((x) => { if (!subIds.has(x.title)) subIds.set(x.title, x.id); });
    return {
      h3({ node, children }) {
        const id = subIds.get(plain(hastText(node)));
        return id ? (
          <h3 id={id}><a className="anchor" href={`#${id}`} onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }}>{children}</a></h3>
        ) : <h3>{children}</h3>;
      },
      pre({ node, children }) {
        const child = node?.children?.[0];
        const cls = child?.properties?.className || [];
        if (child?.tagName === 'code' && cls.includes('language-mermaid')) {
          const text = (child.children || []).map((c) => c.value || '').join('');
          return <MermaidDiagram code={text} theme={theme} />;
        }
        return <pre>{children}</pre>;
      },
      table({ children }) {
        return <div className="table-wrap"><table>{children}</table></div>;
      },
      a({ href, children }) {
        const external = href && /^https?:/.test(href);
        return <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}</a>;
      },
    };
  }, [s, theme]);
  return (
    <section className={s.kind} aria-labelledby={s.title ? s.id : undefined}>
      {s.title && (
        <h2 id={s.id}>
          <a className="anchor" href={`#${s.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }); }}>{s.title}</a>
        </h2>
      )}
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={components}>
        {s.body}
      </ReactMarkdown>
    </section>
  );
}

function useReadingProgress(ref) {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight * 0.6;
      setP(Math.min(1, Math.max(0, -r.top / Math.max(total, 1))));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    update();
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, [ref]);
  return p;
}

function useScrollSpy(ids, deps) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (!ids.length) return;
    const onScroll = () => {
      let cur = ids[0];
      const line = Math.min(window.innerHeight * 0.3, 260);
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < line) cur = id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        // Pick the last heading that is visible on screen.
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top < window.innerHeight - 80) cur = id;
        }
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return active;
}

export default function NotesPage({ slug, theme }) {
  const index = useMemo(() => blogs.findIndex((b) => b.slug === slug), [slug]);
  const blog = index >= 0 ? blogs[index] : null;
  const prev = index > 0 ? blogs[index - 1] : null;
  const next = index >= 0 && index < blogs.length - 1 ? blogs[index + 1] : null;
  const [state, setState] = useState({ status: 'loading', sections: [] });
  const articleRef = useRef(null);
  const progress = useReadingProgress(articleRef);

  useEffect(() => {
    if (!blog) return;
    let cancelled = false;
    setState({ status: 'loading', sections: [] });
    document.title = `${blog.title} — AI Engineering Notes`;
    loadNote(blog)
      .then((md) => !cancelled && setState({ status: 'ready', sections: parseNote(md) }))
      .catch(() => !cancelled && setState({ status: 'error', sections: [] }));
    return () => { cancelled = true; };
  }, [blog]);

  useEffect(() => () => { document.title = DEFAULT_TITLE; }, []);

  const tocItems = useMemo(
    () => state.sections.filter((s) => s.title).flatMap((s) => [{ ...s, level: 2 }, ...s.subs.map((x) => ({ ...x, level: 3 }))]),
    [state.sections]
  );
  const active = useScrollSpy(tocItems.map((t) => t.id), [tocItems]);

  if (!blog) {
    return (
      <div className="wrap empty">
        <h3>No notes found for “{slug}”</h3>
        <a href="#/" className="btn btn-sm">Back to the roadmap</a>
      </div>
    );
  }

  const gh = githubNoteUrl(blog);
  const st = STATUS[blog.status];
  const backLabel = nav.returnTo.startsWith('#/progress') ? 'Progress' : 'Roadmap';
  const jump = (id) => (e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  const TocList = ({ cls }) => (
    <ol className={cls}>
      {tocItems.map((t) => (
        <li key={t.id} className={t.level === 3 ? 'sub' : ''}>
          <a href={`#${t.id}`} onClick={jump(t.id)} className={active === t.id ? 'active' : ''}>{t.title}</a>
        </li>
      ))}
    </ol>
  );

  return (
    <article className="note-page">
      <div className="read-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>

      <div className="note-wrap">
        <header className="note-head">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href={nav.returnTo}><ArrowLeft size={13} style={{ verticalAlign: '-2px' }} /> {backLabel}</a>
            <span>/</span>
            <span>Step {blog.stepInfo.num} · {blog.stepInfo.name}</span>
          </nav>
          <h1 className="note-title">{blog.title}</h1>
          <div className="note-meta">
            <span className={`status pill st-${blog.status}`}>
              {blog.status === 'revision' ? `Needs revision · ${blog.progress.understanding}%` : blog.status === 'mastered' ? 'Mastered · 100%' : st.label}
            </span>
            <span>{blog.mins} min original</span>
            <span className="dot" />
            <span>{blog.word_count.toLocaleString()} words</span>
            <span className="dot" />
            <span>Published {blog.published_date}</span>
          </div>
          {blog.progress?.gap && (
            <div className="revisit"><b>To revisit:</b> {blog.progress.gap}</div>
          )}
          <div className="note-actions">
            <a className="btn btn-sm btn-primary" href={blog.url} target="_blank" rel="noopener noreferrer">
              Read the original <ExternalLink size={14} />
            </a>
            {gh && <a className="btn btn-sm" href={gh} target="_blank" rel="noopener noreferrer">View source</a>}
          </div>
        </header>

        <div className="note-grid">
          <div ref={articleRef}>
            {tocItems.length > 0 && (
              <details className="toc-mobile">
                <summary>On this page <ChevronDown size={16} /></summary>
                <TocList />
              </details>
            )}
            {state.status === 'loading' && <div className="note-loading">Loading notes…</div>}
            {state.status === 'error' && <div className="note-loading">Couldn’t load these notes.</div>}
            {state.status === 'ready' && (
              <div className="prose">
                {state.sections.map((s) => <Section key={s.id} s={s} theme={theme} />)}
              </div>
            )}

            <nav className="pager" aria-label="Previous and next">
              {prev ? (
                <a href={prev.href}>
                  <span className="pager-dir"><ArrowLeft size={13} /> Previous</span>
                  <span className="pager-title">{prev.title}</span>
                </a>
              ) : <span />}
              {next ? (
                <a href={next.href} className="next">
                  <span className="pager-dir">Next <ArrowRight size={13} /></span>
                  <span className="pager-title">{next.title}</span>
                </a>
              ) : <span />}
            </nav>
          </div>

          <aside className="toc" aria-label="On this page">
            {tocItems.length > 0 && (
              <>
                <div className="toc-title">On this page</div>
                <TocList />
              </>
            )}
            <div className="toc-foot">
              <a href={blog.url} target="_blank" rel="noopener noreferrer"><ExternalLink size={12} /> Original article</a>
              <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>↑ Back to top</a>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
