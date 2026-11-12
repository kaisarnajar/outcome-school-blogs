import React, { useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { ArrowLeft, ArrowRight, ExternalLink, Clock, CheckCircle2, RotateCcw, Circle, Sparkles } from 'lucide-react';
import blogsData from '../data/blogsData.json';
import progressData from '../data/progressData.json';
import { noteSlug, noteHref, loadNote, githubNoteUrl, nav } from '../notes';
import MermaidDiagram from './MermaidDiagram';

function progressFor(blog) {
  const e = progressData.entries.find((x) => x.url === blog.url);
  if (!e) return { kind: 'new', label: 'New · not started', Icon: Sparkles, cls: 'pg-new' };
  if (e.status !== 'completed') return { kind: 'pending', label: 'Not started', Icon: Circle, cls: 'pg-pending' };
  if (e.understanding === 100) return { kind: 'mastered', label: 'Mastered · 100%', Icon: CheckCircle2, cls: 'pg-mastered', entry: e };
  return { kind: 'revision', label: `Needs revision · ${e.understanding}%`, Icon: RotateCcw, cls: 'pg-revision', entry: e };
}

// The note's own "# Title" and "> Step · read time · link" lines duplicate the page header; drop them.
function stripHeader(md) {
  const lines = md.split('\n');
  let i = 0;
  while (i < lines.length && lines[i].trim() === '') i++;
  if (lines[i]?.startsWith('# ')) i++;
  while (i < lines.length && lines[i].trim() === '') i++;
  if (lines[i]?.startsWith('>') && /read|Step/i.test(lines[i])) i++;
  return lines.slice(i).join('\n');
}

export default function NotesPage({ slug, theme }) {
  const index = useMemo(() => blogsData.findIndex((b) => noteSlug(b) === slug), [slug]);
  const blog = index >= 0 ? blogsData[index] : null;
  const prev = index > 0 ? blogsData[index - 1] : null;
  const next = index >= 0 && index < blogsData.length - 1 ? blogsData[index + 1] : null;

  const [state, setState] = useState({ status: 'loading', md: '' });

  useEffect(() => {
    if (!blog) return;
    let cancelled = false;
    setState({ status: 'loading', md: '' });
    loadNote(blog)
      .then((md) => !cancelled && setState({ status: 'ready', md: stripHeader(md) }))
      .catch(() => !cancelled && setState({ status: 'error', md: '' }));
    document.title = `${blog.title} · Notes`;
    return () => {
      cancelled = true;
    };
  }, [blog]);

  useEffect(() => () => { document.title = 'Outcome School AI Engineering Roadmap — Interactive Blog & Reading Tracker'; }, []);

  const components = useMemo(
    () => ({
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
        return (
          <div className="note-table-wrap">
            <table>{children}</table>
          </div>
        );
      },
      a({ href, children }) {
        const external = href && /^https?:/.test(href);
        return (
          <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            {children}
          </a>
        );
      },
    }),
    [theme]
  );

  if (!blog) {
    return (
      <div className="empty-state note-missing">
        <h3 className="empty-title">No notes found for “{slug}”</h3>
        <a href="#/" className="reset-filters-btn">Back to all blogs</a>
      </div>
    );
  }

  const prog = progressFor(blog);
  const gh = githubNoteUrl(blog);

  return (
    <article className="note-page">
      <a href={nav.returnTo} className="note-back">
        <ArrowLeft size={16} /> Back to {nav.returnTo.startsWith('#/progress') ? 'My Progress' : 'all blogs'}
      </a>

      <header className="note-header">
        <div className="note-meta-row">
          <span className="step-tag" title={blog.step}>{blog.step.split(':')[0]}</span>
          <span className="note-step-name">{blog.step.split(':').slice(1).join(':').trim()}</span>
        </div>
        <h1 className="note-title">{blog.title}</h1>
        <div className="note-meta-row">
          <span className="note-chip"><Clock size={14} /> Original: {blog.reading_time_mins} min read</span>
          <span className={`pg-badge ${prog.cls}`}><prog.Icon size={13} /> {prog.label}</span>
        </div>
        {prog.entry?.gap && (
          <div className={`note-revisit ${prog.cls}`}>
            <strong>To revisit:</strong> {prog.entry.gap}
          </div>
        )}
        <div className="note-actions">
          <a href={blog.url} target="_blank" rel="noopener noreferrer" className="modal-primary-btn">
            Read original blog <ExternalLink size={15} />
          </a>
          {gh && (
            <a href={gh} target="_blank" rel="noopener noreferrer" className="nav-link">
              View on GitHub
            </a>
          )}
        </div>
      </header>

      <div className="note-body">
        {state.status === 'loading' && <div className="note-loading">Loading notes…</div>}
        {state.status === 'error' && <div className="note-loading">Couldn’t load these notes.</div>}
        {state.status === 'ready' && (
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={components}>
            {state.md}
          </ReactMarkdown>
        )}
      </div>

      <nav className="note-pager" aria-label="Previous and next notes">
        {prev ? (
          <a href={noteHref(prev)} className="note-pager-link">
            <span className="note-pager-dir"><ArrowLeft size={14} /> Previous</span>
            <span className="note-pager-title">{prev.title}</span>
          </a>
        ) : <span />}
        {next ? (
          <a href={noteHref(next)} className="note-pager-link next">
            <span className="note-pager-dir">Next <ArrowRight size={14} /></span>
            <span className="note-pager-title">{next.title}</span>
          </a>
        ) : <span />}
      </nav>
    </article>
  );
}
