import React from 'react';
import { Globe, Moon, Sun, BookOpen } from 'lucide-react';

function GithubIcon({ size = 16 }) {
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
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="brand">
          <div className="brand-icon">
            <BookOpen size={22} />
          </div>
          <div className="brand-text">
            <h1>
              Outcome School <span className="brand-badge">Analysis</span>
            </h1>
            <div className="brand-subtitle">AI Engineering Roadmap Blogs</div>
          </div>
        </a>

        <div className="nav-actions">
          <a
            href="https://github.com/amitshekhariitbhu/ai-engineer-roadmap"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            title="Original AI Engineer Roadmap Repository"
          >
            <GithubIcon size={16} />
            <span>Roadmap Repo</span>
          </a>
          <a
            href="https://outcomeschool.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            title="Outcome School Official Website"
          >
            <Globe size={16} />
            <span>Outcome School</span>
          </a>
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
