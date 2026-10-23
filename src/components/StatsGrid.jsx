import React from 'react';
import { FileText, Layers, Clock, BarChart3, Flame } from 'lucide-react';

export default function StatsGrid({ blogs, readingSpeed }) {
  const totalBlogs = blogs.length;
  const totalWords = blogs.reduce((acc, b) => acc + (b.word_count || 0), 0);
  const totalMinutes = blogs.reduce((acc, b) => acc + Math.max(1, Math.round((b.word_count || 0) / readingSpeed)), 0);
  const totalHours = (totalMinutes / 60).toFixed(1);
  const avgWords = totalBlogs ? Math.round(totalWords / totalBlogs) : 0;
  const avgMins = totalBlogs ? Math.round(totalMinutes / totalBlogs) : 0;

  const longestBlog = blogs.length > 0
    ? [...blogs].sort((a, b) => (b.word_count || 0) - (a.word_count || 0))[0]
    : null;

  return (
    <section className="stats-grid" aria-label="Key Roadmap Statistics">
      <div className="stat-card accent-indigo">
        <div className="stat-header">
          <span className="stat-label">Total Articles</span>
          <div className="stat-icon">
            <FileText size={18} />
          </div>
        </div>
        <div className="stat-value">{totalBlogs}</div>
        <div className="stat-subtext">Across 17 roadmap steps</div>
      </div>

      <div className="stat-card accent-cyan">
        <div className="stat-header">
          <span className="stat-label">Total Words</span>
          <div className="stat-icon">
            <Layers size={18} />
          </div>
        </div>
        <div className="stat-value">{totalWords.toLocaleString()}</div>
        <div className="stat-subtext">Verified prose analyzed</div>
      </div>

      <div className="stat-card accent-purple">
        <div className="stat-header">
          <span className="stat-label">Total Time</span>
          <div className="stat-icon">
            <Clock size={18} />
          </div>
        </div>
        <div className="stat-value">{totalHours} hrs</div>
        <div className="stat-subtext">{totalMinutes.toLocaleString()} mins @ {readingSpeed} WPM</div>
      </div>

      <div className="stat-card accent-emerald">
        <div className="stat-header">
          <span className="stat-label">Average Depth</span>
          <div className="stat-icon">
            <BarChart3 size={18} />
          </div>
        </div>
        <div className="stat-value">{avgWords.toLocaleString()} w</div>
        <div className="stat-subtext">~{avgMins} mins per article</div>
      </div>

      <div className="stat-card accent-amber">
        <div className="stat-header">
          <span className="stat-label">Longest Deep Dive</span>
          <div className="stat-icon">
            <Flame size={18} />
          </div>
        </div>
        <div className="stat-value" style={{ fontSize: '1.25rem', lineHeight: 1.3 }}>
          {longestBlog ? Math.round((longestBlog.word_count || 0) / readingSpeed) + ' mins' : '-'}
        </div>
        <div className="stat-subtext" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={longestBlog?.title}>
          {longestBlog ? longestBlog.title : '-'}
        </div>
      </div>
    </section>
  );
}
