import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>
          Personal study notes on the{' '}
          <a href="https://github.com/amitshekhariitbhu/ai-engineer-roadmap" target="_blank" rel="noopener noreferrer">
            AI Engineer Roadmap
          </a>{' '}
          by Amit Shekhar ·{' '}
          <a href="https://outcomeschool.com" target="_blank" rel="noopener noreferrer">Outcome School</a>
        </div>
        <div className="footer-links">
          <a href="#/">Roadmap</a>
          <a href="#/progress">Progress</a>
          <a href="https://github.com/kaisarnajar/outcome-school-blogs" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
