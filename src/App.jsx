import React, { useState, useEffect, Suspense, lazy } from 'react';
import { flushSync } from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RoadmapPage from './components/RoadmapPage';
import ProgressPage from './components/ProgressPage';
import CommandPalette from './components/CommandPalette';
import { nav } from './notes';

const NotesPage = lazy(() => import('./components/NotesPage'));

function routeFromHash(hash = window.location.hash) {
  const m = hash.match(/^#\/notes\/([^/?#]+)/);
  if (m) return { page: 'notes', slug: decodeURIComponent(m[1]) };
  if (hash.startsWith('#/progress')) return { page: 'progress' };
  return { page: 'roadmap' };
}

// Remember scroll position per list page so "Back" from a note lands where you were.
const scrollMemory = {};
const pageKey = (r) => (r.page === 'notes' ? null : r.page);

function initialTheme() {
  try {
    const saved = localStorage.getItem('outcome_blogs_theme');
    if (saved === 'dark' || saved === 'light') return saved;
  } catch { /* storage unavailable */ }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [route, setRoute] = useState(() => routeFromHash());
  const [theme, setTheme] = useState(initialTheme);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#131312' : '#fbfaf7');
    try { localStorage.setItem('outcome_blogs_theme', theme); } catch { /* ignore */ }
  }, [theme]);

  useEffect(() => {
    const onHash = (e) => {
      const from = routeFromHash(new URL(e.oldURL).hash);
      const to = routeFromHash();
      // In-page anchors (e.g. #section-id) aren't routes; ignore them.
      if (!window.location.hash.startsWith('#/') && window.location.hash !== '') return;
      if (pageKey(from)) {
        scrollMemory[pageKey(from)] = window.scrollY;
        nav.returnTo = from.page === 'progress' ? '#/progress' : '#/';
      }
      const y = pageKey(to) ? scrollMemory[pageKey(to)] || 0 : 0;
      flushSync(() => setRoute(to));
      const root = document.documentElement;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, y);
      requestAnimationFrame(() => {
        window.scrollTo(0, y);
        root.style.scrollBehavior = '';
      });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((o) => !o);
      } else if (e.key === '/' && !searchOpen && !/input|textarea|select/i.test(document.activeElement?.tagName || '')) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [searchOpen]);

  return (
    <>
      <Header
        page={route.page}
        theme={theme}
        toggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        openSearch={() => setSearchOpen(true)}
      />
      <main id="top">
        {route.page === 'notes' ? (
          <Suspense fallback={<div className="note-loading">Loading notes…</div>}>
            <NotesPage slug={route.slug} theme={theme} />
          </Suspense>
        ) : route.page === 'progress' ? (
          <ProgressPage />
        ) : (
          <RoadmapPage openSearch={() => setSearchOpen(true)} />
        )}
      </main>
      <Footer />
      <CommandPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
