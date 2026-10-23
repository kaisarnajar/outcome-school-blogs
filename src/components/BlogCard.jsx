import React from 'react';
import { Clock, FileCode, Layers, ExternalLink, Info } from 'lucide-react';

export default function BlogCard({
  blog,
  readingSpeed,
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
        <div className="metric-pill metric-words" title="Word count">
          <Layers size={15} />
          <span>{(blog.word_count || 0).toLocaleString()} words</span>
        </div>

        <div className="metric-pill metric-time" title="Estimated reading time">
          <Clock size={15} />
          <span>{dynamicMinutes} min read</span>
        </div>

        {blog.code_blocks_count > 0 && (
          <div className="metric-pill metric-code" title="Code snippets">
            <FileCode size={15} />
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
