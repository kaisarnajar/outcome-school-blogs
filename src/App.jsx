import React, { useState, useEffect, useMemo } from 'react';
import blogsData from './data/blogsData.json';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsGrid from './components/StatsGrid';
import StepScroller from './components/StepScroller';
import FilterBar from './components/FilterBar';
import BlogCard from './components/BlogCard';
import BlogTable from './components/BlogTable';
import BlogModal from './components/BlogModal';
import Footer from './components/Footer';
import { SearchX } from 'lucide-react';

const DEFAULT_WPM = 200;

export default function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('outcome_blogs_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  // Filter & Search states
  const [search, setSearch] = useState('');
  const [step, setStep] = useState('all');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('roadmap-order');
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem('outcome_view_mode') || 'grid';
  });

  // Modal detail
  const [activeModalBlog, setActiveModalBlog] = useState(null);

  // Sync theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('outcome_blogs_theme', theme);
  }, [theme]);

  // Clean up any legacy personal tracking keys from localStorage
  useEffect(() => {
    localStorage.removeItem('outcome_completed_ids');
    localStorage.removeItem('outcome_bookmarked_ids');
    localStorage.removeItem('outcome_reading_speed');
  }, []);

  // Sync viewMode
  useEffect(() => {
    localStorage.setItem('outcome_view_mode', viewMode);
  }, [viewMode]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Extract distinct steps in order with metadata
  const stepsData = useMemo(() => {
    const map = new Map();
    blogsData.forEach((b) => {
      const s = b.step || 'Other';
      if (!map.has(s)) {
        map.set(s, {
          step: s,
          shortTitle: s,
          count: 0,
          totalWords: 0
        });
      }
      const item = map.get(s);
      item.count += 1;
      item.totalWords += b.word_count || 0;
    });
    return Array.from(map.values());
  }, []);

  const stepsList = useMemo(() => stepsData.map((s) => s.step), [stepsData]);

  // Category counts based on default reading speed (200 WPM)
  const categoryCounts = useMemo(() => {
    let all = blogsData.length;
    let quick = 0;
    let standard = 0;
    let deep = 0;
    let comprehensive = 0;

    blogsData.forEach((b) => {
      const mins = Math.max(1, Math.round((b.word_count || 0) / DEFAULT_WPM));
      if (mins <= 4) quick++;
      else if (mins <= 8) standard++;
      else if (mins <= 15) deep++;
      else comprehensive++;
    });

    return { all, quick, standard, deep, comprehensive };
  }, []);

  // Filtered and Sorted Blogs
  const filteredBlogs = useMemo(() => {
    return blogsData
      .filter((b) => {
        // Search filter
        if (search) {
          const q = search.toLowerCase();
          const matchTitle = b.title.toLowerCase().includes(q);
          const matchExcerpt = (b.excerpt || '').toLowerCase().includes(q);
          const matchStep = (b.step || '').toLowerCase().includes(q);
          if (!matchTitle && !matchExcerpt && !matchStep) return false;
        }

        // Step filter
        if (step !== 'all' && b.step !== step) return false;

        // Category filter (based on default 200 WPM)
        const mins = Math.max(1, Math.round((b.word_count || 0) / DEFAULT_WPM));
        if (category === 'quick' && mins > 4) return false;
        if (category === 'standard' && (mins < 5 || mins > 8)) return false;
        if (category === 'deep' && (mins < 9 || mins > 15)) return false;
        if (category === 'comprehensive' && mins < 16) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'roadmap-order') return a.id - b.id;
        if (sortBy === 'words-desc') return (b.word_count || 0) - (a.word_count || 0);
        if (sortBy === 'words-asc') return (a.word_count || 0) - (b.word_count || 0);
        if (sortBy === 'time-desc') return (b.word_count || 0) - (a.word_count || 0);
        if (sortBy === 'time-asc') return (a.word_count || 0) - (b.word_count || 0);
        if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
        return 0;
      });
  }, [search, step, category, sortBy]);

  // Export handlers
  const handleExportCsv = () => {
    const headers = [
      'ID',
      'Step',
      'Title',
      'Word Count',
      'Reading Time (Mins)',
      'Headings',
      'Code Blocks',
      'Paragraphs',
      'URL'
    ];
    const rows = filteredBlogs.map((b) => [
      b.id,
      `"${(b.step || '').replace(/"/g, '""')}"`,
      `"${b.title.replace(/"/g, '""')}"`,
      b.word_count || 0,
      Math.max(1, Math.round((b.word_count || 0) / DEFAULT_WPM)),
      b.headings_count || 0,
      b.code_blocks_count || 0,
      b.paragraphs_count || 0,
      `"${b.url}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `outcome_school_blogs_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(filteredBlogs, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `outcome_school_blogs_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <>
      {/* Background glowing effects */}
      <div className="bg-ambient" aria-hidden="true">
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
        <div className="ambient-orb orb-3" />
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="container">
        <HeroSection totalBlogs={blogsData.length} />

        <StatsGrid blogs={blogsData} readingSpeed={DEFAULT_WPM} />

        <StepScroller
          stepsData={stepsData}
          selectedStep={step}
          onSelectStep={setStep}
          readingSpeed={DEFAULT_WPM}
        />

        <FilterBar
          search={search}
          setSearch={setSearch}
          step={step}
          setStep={setStep}
          sortBy={sortBy}
          setSortBy={setSortBy}
          category={category}
          setCategory={setCategory}
          viewMode={viewMode}
          setViewMode={setViewMode}
          stepsList={stepsList}
          categoryCounts={categoryCounts}
          onExportCsv={handleExportCsv}
          onExportJson={handleExportJson}
        />

        <div className="results-meta-bar">
          <div>
            Showing <strong>{filteredBlogs.length}</strong> of <strong>{blogsData.length}</strong> articles
            {step !== 'all' && <span> in <em>{step.split(':')[0]}</em></span>}
          </div>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="empty-state">
            <SearchX size={44} className="empty-icon" />
            <h3 className="empty-title">No matching blog articles found</h3>
            <p className="empty-desc">
              Try adjusting your search query, selecting "All Steps", or clearing the category filter.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setStep('all');
                setCategory('all');
              }}
              className="reset-filters-btn"
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="blogs-grid">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                readingSpeed={DEFAULT_WPM}
                onOpenModal={setActiveModalBlog}
              />
            ))}
          </div>
        ) : (
          <BlogTable
            blogs={filteredBlogs}
            readingSpeed={DEFAULT_WPM}
            onOpenModal={setActiveModalBlog}
          />
        )}
      </main>

      <Footer totalBlogs={blogsData.length} />

      {activeModalBlog && (
        <BlogModal
          blog={activeModalBlog}
          readingSpeed={DEFAULT_WPM}
          onClose={() => setActiveModalBlog(null)}
        />
      )}
    </>
  );
}
