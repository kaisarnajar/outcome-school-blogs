import React from 'react';
import { ExternalLink } from 'lucide-react';

function GithubIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'inline', marginRight: 4, verticalAlign: 'text-bottom' }}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Footer({ totalBlogs }) {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <p>
            Curated analysis & learning engine for the{' '}
            <strong>Outcome School AI Engineering Roadmap</strong> ({totalBlogs} blogs).
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 4 }}>
            Original articles written by Amit Shekhar. Built with React & Vite.
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/amitshekhariitbhu/ai-engineer-roadmap"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <GithubIcon size={15} />
            <span>AI Roadmap Repository</span>
          </a>
          <a
            href="https://outcomeschool.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <ExternalLink size={15} style={{ display: 'inline', marginRight: 4, verticalAlign: 'text-bottom' }} />
            <span>Outcome School</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
