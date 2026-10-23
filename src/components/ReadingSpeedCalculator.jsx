import React from 'react';
import { Gauge, Zap } from 'lucide-react';

export default function ReadingSpeedCalculator({ readingSpeed, setReadingSpeed, totalWords }) {
  const dynamicMinutes = Math.max(1, Math.round(totalWords / readingSpeed));
  const dynamicHours = (dynamicMinutes / 60).toFixed(1);

  return (
    <div className="speed-widget">
      <div className="speed-info">
        <Gauge size={22} className="speed-info-icon" />
        <div>
          <div className="speed-title">Dynamic Reading Speed Calculator</div>
          <div className="speed-subtitle">Personalize reading time estimates to your own pace</div>
        </div>
      </div>

      <div className="speed-controls">
        <input
          type="range"
          min="120"
          max="360"
          step="10"
          value={readingSpeed}
          onChange={(e) => setReadingSpeed(Number(e.target.value))}
          className="speed-slider"
          aria-label="Reading Speed in Words Per Minute"
        />
        <span className="speed-badge">{readingSpeed} WPM</span>
      </div>

      <div className="dynamic-time-tag">
        <Zap size={14} style={{ display: 'inline', marginRight: 4 }} />
        <span>Roadmap: ~<strong>{dynamicHours} hrs</strong> ({dynamicMinutes.toLocaleString()} mins)</span>
      </div>
    </div>
  );
}
