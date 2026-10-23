import React from 'react';
import { Info, ExternalLink } from 'lucide-react';

export default function BlogTable({
  blogs,
  readingSpeed,
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
            <th style={{ width: 100, textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, idx) => {
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
