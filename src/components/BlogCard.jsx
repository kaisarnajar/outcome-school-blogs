import React from 'react';
import { Bookmark, CheckCircle2, Clock, FileCode, Layers, ExternalLink, Info } from 'lucide-react';

export default function BlogCard({
  blog,
  readingSpeed,
  isBookmarked,
  isCompleted,
  onToggleBookmark,
  onToggleCompleted,
  onOpenModal
}) {
  const dynamicMinutes = Math.max(1, Math.round((blog.word_count || 0) / readingSpeed));

  // Determine badge styling based on dynamic read time
  let badgeClass = 'badge-emerald';
  let badgeLabel = 'Quick Read';
  if (dynamicMinutes >= 16) {
    badgeClass = 'badge-amber';
    badgeLabel = 'Comprehensive Guide';
  } else if (dynamicMinutes >= 9) {
    badgeClass = 'badge-purple';
    badgeLabel = 'Deep Dive';
  } else if (dynamicMinutes >= 5) {
    badgeClass = 'badge-blue';
    badgeLabel = 'Standard Read';
  }

  const stepDisplay = blog.step
    ? blog.step.split(':')[0]
    : `Step ${blog.step_number || 0}`;

  return (
    <article className="blog-card">
      <div className="card-top-row">
        <span className="step-tag" title={blog.step}>
          {stepDisplay}
        </span>

        <div className="card-actions-top">
          <button
            onClick={() => onToggleBookmark(blog.id)}
            className={`action-icon-btn ${isBookmarked ? 'bookmarked' : ''}`}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark for later'}
            aria-label="Bookmark article"
          >
            <Bookmark size={16} fill={isBookmarked ? '#fbbf24' : 'none'} />
          </button>

          <button
            onClick={() => onToggleCompleted(blog.id)}
            className={`action-icon-btn ${isCompleted ? 'completed' : ''}`}
            title={isCompleted ? 'Mark as unread' : 'Mark as completed'}
            aria-label="Mark completed"
          >
            <CheckCircle2 size={16} fill={isCompleted ? '#10b981' : 'none'} stroke={isCompleted ? '#fff' : 'currentColor'} />
          </button>

          <button
            onClick={() => onOpenModal(blog)}
            className="action-icon-btn"
            title="View article analysis details"
            aria-label="View details"
          >
            <Info size={16} />
          </button>
        </div>
      </div>

      <h3 className="blog-card-title" onClick={() => onOpenModal(blog)}>
        {blog.title}
      </h3>

      <p className="blog-card-excerpt">
        {blog.excerpt || 'Comprehensive guide covering architecture, key trade-offs, and practical implementations.'}
      </p>

      <div className="card-metrics-row">
        <div className="metric-pill" title="Word count">
          <Layers size={14} color="#6366f1" />
          <span>{(blog.word_count || 0).toLocaleString()} words</span>
        </div>

        <div className="metric-pill" title="Estimated reading time">
          <Clock size={14} color="#06b6d4" />
          <span>{dynamicMinutes} min read</span>
        </div>

        {blog.code_blocks_count > 0 && (
          <div className="metric-pill" title="Code snippets">
            <FileCode size={14} color="#10b981" />
            <span>{blog.code_blocks_count} snippets</span>
          </div>
        )}
      </div>

      <div className="card-footer">
        <span className={`badge ${badgeClass}`}>
          {badgeLabel}
        </span>

        <a
          href={blog.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-read-btn"
          title="Read on Outcome School / Substack"
        >
          <span>Read</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </article>
  );
}
