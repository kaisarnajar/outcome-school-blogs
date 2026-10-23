import React from 'react';
import { Compass } from 'lucide-react';

export default function StepScroller({ stepsData, selectedStep, onSelectStep, readingSpeed }) {
  return (
    <div className="step-nav-section">
      <div className="step-nav-header">
        <div className="step-nav-title">
          <Compass size={18} color="#6366f1" />
          <span>Curriculum Steps Matrix</span>
        </div>
      </div>

      <div className="step-scroll-track">
        <button
          className={`step-pill-btn ${selectedStep === 'all' ? 'active' : ''}`}
          onClick={() => onSelectStep('all')}
        >
          <div className="step-pill-top">All Steps</div>
          <div className="step-pill-meta">
            <span>{stepsData.reduce((acc, s) => acc + s.count, 0)} articles</span>
          </div>
        </button>

        {stepsData.map((step) => {
          const stepMins = Math.max(1, Math.round(step.totalWords / readingSpeed));
          return (
            <button
              key={step.step}
              className={`step-pill-btn ${selectedStep === step.step ? 'active' : ''}`}
              onClick={() => onSelectStep(step.step)}
            >
              <div className="step-pill-top">{step.shortTitle}</div>
              <div className="step-pill-meta">
                <span>{step.count} blogs</span>
                <span>•</span>
                <span>~{stepMins}m</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
