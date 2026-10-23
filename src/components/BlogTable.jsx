import React from 'react';
import { Bookmark, CheckCircle2, Info, ExternalLink } from 'lucide-react';

export default function BlogTable({
  blogs,
  readingSpeed,
  bookmarkedIds,
  completedIds,
  onToggleBookmark,
  onToggleCompleted,
  onOpenModal
}) {
  return (
    <div className="table-view-container">
      <table className="data-table">
        <thead>
          <tr>
            <th style={{ width: 45 }}>#</th>
            <th style={{ width: 140 }}>Step</th>
            <th>Title</th>
            <th style={{ width: 120 }}>Words</th>
            <th style={{ width: 130 }}>Est. Time</th>
            <th style={{ width: 140 }}>Category</th>
            <th style={{ width: 120, textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, idx) => {
            const isBookmarked = bookmarkedIds.includes(blog.id);
            const isCompleted = completedIds.includes(blog.id);
            const dynamicMinutes = Math.max(1, Math.round((blog.word_count || 0) / readingSpeed));

            let badgeClass = 'badge-emerald';
            let badgeLabel = 'Quick';
            if (dynamicMinutes >= 16) {
              badgeClass = 'badge-amber';
              badgeLabel = 'Comprehensive';
            } else if (dynamicMinutes >= 9) {
              badgeClass = 'badge-purple';
              badgeLabel = 'Deep Dive';
            } else if (dynamicMinutes >= 5) {
              badgeClass = 'badge-blue';
              badgeLabel = 'Standard';
            }

            const stepDisplay = blog.step ? blog.step.split(':')[0] : `Step ${blog.step_number || 0}`;

            return (
              <tr key={blog.id}>
                <td style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {idx + 1}
                </td>
                <td>
                  <span className="step-tag">{stepDisplay}</span>
                </td>
                <td className="table-title-cell">
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="table-title-link"
                  >
                    {blog.title}
                  </a>
                </td>
                <td style={{ fontFamily: 'var(--font-mono)' }}>
                  {(blog.word_count || 0).toLocaleString()}
                </td>
                <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                  {dynamicMinutes} mins
                </td>
                <td>
                  <span className={`badge ${badgeClass}`}>{badgeLabel}</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <div style={{ display: 'inline-flex', gap: 6 }}>
                    <button
                      onClick={() => onToggleBookmark(blog.id)}
                      className={`action-icon-btn ${isBookmarked ? 'bookmarked' : ''}`}
                      title="Bookmark"
                    >
                      <Bookmark size={15} fill={isBookmarked ? '#fbbf24' : 'none'} />
                    </button>
                    <button
                      onClick={() => onToggleCompleted(blog.id)}
                      className={`action-icon-btn ${isCompleted ? 'completed' : ''}`}
                      title="Toggle Completed"
                    >
                      <CheckCircle2
                        size={15}
                        fill={isCompleted ? '#10b981' : 'none'}
                        stroke={isCompleted ? '#fff' : 'currentColor'}
                      />
                    </button>
                    <button
                      onClick={() => onOpenModal(blog)}
                      className="action-icon-btn"
                      title="Details"
                    >
                      <Info size={15} />
                    </button>
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-icon-btn"
                      title="Read Article"
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
