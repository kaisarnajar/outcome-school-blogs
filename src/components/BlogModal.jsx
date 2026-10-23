import React, { useEffect } from 'react';
import { X, ExternalLink, Bookmark, CheckCircle2, Calendar, User } from 'lucide-react';

export default function BlogModal({
  blog,
  onClose,
  readingSpeed,
  isBookmarked,
  isCompleted,
  onToggleBookmark,
  onToggleCompleted
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!blog) return null;

  const dynamicMinutes = Math.max(1, Math.round((blog.word_count || 0) / readingSpeed));

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div className="modal-step-badge">{blog.step || `Step ${blog.step_number || 0}`}</div>
        <h2 className="modal-title">{blog.title}</h2>

        <div className="modal-stats-grid">
          <div className="modal-stat-box">
            <div className="modal-stat-num">{(blog.word_count || 0).toLocaleString()}</div>
            <div className="modal-stat-label">Words</div>
          </div>
          <div className="modal-stat-box">
            <div className="modal-stat-num">{dynamicMinutes} mins</div>
            <div className="modal-stat-label">Est. Time</div>
          </div>
          <div className="modal-stat-box">
            <div className="modal-stat-num">{blog.code_blocks_count || 0}</div>
            <div className="modal-stat-label">Code Blocks</div>
          </div>
          <div className="modal-stat-box">
            <div className="modal-stat-num">{blog.paragraphs_count || 0}</div>
            <div className="modal-stat-label">Paragraphs</div>
          </div>
          <div className="modal-stat-box">
            <div className="modal-stat-num">{blog.headings_count || 0}</div>
            <div className="modal-stat-label">Headings</div>
          </div>
          <div className="modal-stat-box">
            <div className="modal-stat-num">{blog.images_count || 0}</div>
            <div className="modal-stat-label">Images</div>
          </div>
        </div>

        <div className="modal-excerpt-box">
          <strong>Article Overview & Abstract:</strong>
          <p style={{ marginTop: 8 }}>
            {blog.excerpt || 'In-depth coverage providing practical architectural trade-offs, code samples, and conceptual explanations.'}
          </p>
        </div>

        <div style={{ display: 'flex', gap: 16, marginBottom: 24, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <User size={14} />
            <span>Author: {blog.author || 'Amit Shekhar'}</span>
          </div>
          {blog.published_date && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Calendar size={14} />
              <span>Published: {blog.published_date}</span>
            </div>
          )}
        </div>

        <div className="modal-actions">
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={() => onToggleBookmark(blog.id)}
              className="export-btn"
              style={{
                color: isBookmarked ? '#fbbf24' : 'inherit',
                borderColor: isBookmarked ? 'rgba(251, 191, 36, 0.4)' : 'var(--border-subtle)'
              }}
            >
              <Bookmark size={15} fill={isBookmarked ? '#fbbf24' : 'none'} />
              <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>

            <button
              onClick={() => onToggleCompleted(blog.id)}
              className="export-btn"
              style={{
                color: isCompleted ? '#10b981' : 'inherit',
                borderColor: isCompleted ? 'rgba(16, 185, 129, 0.4)' : 'var(--border-subtle)'
              }}
            >
              <CheckCircle2
                size={15}
                fill={isCompleted ? '#10b981' : 'none'}
                stroke={isCompleted ? '#fff' : 'currentColor'}
              />
              <span>{isCompleted ? 'Completed' : 'Mark Done'}</span>
            </button>
          </div>

          <a
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-primary-btn"
          >
            <span>Read Original Article</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
