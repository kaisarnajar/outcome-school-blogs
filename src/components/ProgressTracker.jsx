import React from 'react';
import { CheckCircle2, Bookmark, Trophy, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProgressTracker({ totalBlogs, completedIds, bookmarkedIds, onResetProgress }) {
  const completedCount = completedIds.length;
  const bookmarkedCount = bookmarkedIds.length;
  const percentage = totalBlogs > 0 ? Math.round((completedCount / totalBlogs) * 100) : 0;

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="tracker-card">
      <div className="tracker-header">
        <div className="tracker-title">
          <Trophy size={20} color="#fbbf24" />
          <span>My AI Roadmap Learning Progress</span>
        </div>

        <div className="tracker-stats-group">
          <div className="tracker-stat-item">
            <CheckCircle2 size={16} color="#10b981" />
            <span>Completed: <strong>{completedCount}</strong> / {totalBlogs} ({percentage}%)</span>
          </div>
          <div className="tracker-stat-item">
            <Bookmark size={16} color="#fbbf24" />
            <span>Bookmarked: <strong>{bookmarkedCount}</strong></span>
          </div>
          {completedCount > 0 && (
            <button
              onClick={triggerCelebration}
              className="export-btn"
              title="Celebrate progress"
              style={{ padding: '4px 10px' }}
            >
              🎉 Celebrate
            </button>
          )}
          {(completedCount > 0 || bookmarkedCount > 0) && (
            <button
              onClick={onResetProgress}
              className="export-btn"
              title="Reset tracked progress"
              style={{ padding: '4px 8px' }}
            >
              <RotateCcw size={14} />
            </button>
          )}
        </div>
      </div>

      <div className="progress-track">
        <div
          className="progress-bar"
          style={{ width: `${Math.max(percentage, completedCount > 0 ? 2 : 0)}%` }}
        />
      </div>
    </div>
  );
}
