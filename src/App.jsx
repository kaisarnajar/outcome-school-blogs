import React, { useState, useEffect, useMemo } from 'react';
import blogsData from './data/blogsData.json';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsGrid from './components/StatsGrid';
import ProgressTracker from './components/ProgressTracker';
import ReadingSpeedCalculator from './components/ReadingSpeedCalculator';
import StepScroller from './components/StepScroller';
import FilterBar from './components/FilterBar';
import BlogCard from './components/BlogCard';
import BlogTable from './components/BlogTable';
import BlogModal from './components/BlogModal';
import Footer from './components/Footer';
import { SearchX } from 'lucide-react';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('outcome_blogs_theme') || 'dark';
  });

  // Reading speed state (WPM)
  const [readingSpeed, setReadingSpeed] = useState(() => {
    const saved = localStorage.getItem('outcome_reading_speed');
    return saved ? Number(saved) : 200;
  });

  // Progress state (IDs)
  const [completedIds, setCompletedIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('outcome_completed_ids')) || [];
    } catch {
      return [];
    }
  });

  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('outcome_bookmarked_ids')) || [];
    } catch {
      return [];
    }
  });

  // Filter & Search states
  const [search, setSearch] = useState('');
  const [step, setStep] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
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
    localStorage.setItem('outcome_blogs_theme', theme);
  }, [theme]);

  // Sync reading speed
  useEffect(() => {
    localStorage.setItem('outcome_reading_speed', readingSpeed.toString());
  }, [readingSpeed]);

  // Sync progress
  useEffect(() => {
    localStorage.setItem('outcome_completed_ids', JSON.stringify(completedIds));
  }, [completedIds]);

  useEffect(() => {
    localStorage.setItem('outcome_bookmarked_ids', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  // Sync viewMode
  useEffect(() => {
    localStorage.setItem('outcome_view_mode', viewMode);
  }, [viewMode]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleBookmark = (id) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleCompleted = (id) => {
    setCompletedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all tracked learning progress and bookmarks?')) {
      setCompletedIds([]);
      setBookmarkedIds([]);
    }
  };

  // Extract distinct steps in order with metadata
  const stepsData = useMemo(() => {
    const map = new Map();
    blogsData.forEach((b) => {
      const s = b.step || 'Other';
      if (!map.has(s)) {
        let shortTitle = s;
        if (s.includes(':')) {
          const parts = s.split(':');
          shortTitle = parts[0] + ': ' + parts[1].trim().slice(0, 18);
        }
        map.set(s, {
          step: s,
          shortTitle,
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

  // Dynamic category counts according to current reading speed
  const categoryCounts = useMemo(() => {
    let all = blogsData.length;
    let quick = 0;
    let standard = 0;
    let deep = 0;
    let comprehensive = 0;

    blogsData.forEach((b) => {
      const mins = Math.max(1, Math.round((b.word_count || 0) / readingSpeed));
      if (mins <= 4) quick++;
      else if (mins <= 8) standard++;
      else if (mins <= 15) deep++;
      else comprehensive++;
    });

    return { all, quick, standard, deep, comprehensive };
  }, [readingSpeed]);

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

        // Status filter
        if (statusFilter === 'bookmarked' && !bookmarkedIds.includes(b.id)) return false;
        if (statusFilter === 'completed' && !completedIds.includes(b.id)) return false;
        if (statusFilter === 'unread' && completedIds.includes(b.id)) return false;

        // Category filter (dynamic reading speed)
        const mins = Math.max(1, Math.round((b.word_count || 0) / readingSpeed));
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
  }, [search, step, statusFilter, category, sortBy, readingSpeed, bookmarkedIds, completedIds]);

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
      Math.max(1, Math.round((b.word_count || 0) / readingSpeed)),
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

  const totalWords = useMemo(() => {
    return blogsData.reduce((acc, b) => acc + (b.word_count || 0), 0);
  }, []);

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

        <StatsGrid blogs={blogsData} readingSpeed={readingSpeed} />

        <ProgressTracker
          totalBlogs={blogsData.length}
          completedIds={completedIds}
          bookmarkedIds={bookmarkedIds}
          onResetProgress={handleResetProgress}
        />

        <ReadingSpeedCalculator
          readingSpeed={readingSpeed}
          setReadingSpeed={setReadingSpeed}
          totalWords={totalWords}
        />

        <StepScroller
          stepsData={stepsData}
          selectedStep={step}
          onSelectStep={setStep}
          readingSpeed={readingSpeed}
        />

        <FilterBar
          search={search}
          setSearch={setSearch}
          step={step}
          setStep={setStep}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
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
            {statusFilter !== 'all' && <span> • Filtered by <em>{statusFilter}</em></span>}
          </div>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="empty-state">
            <SearchX size={44} className="empty-icon" />
            <h3 className="empty-title">No matching blog articles found</h3>
            <p className="empty-desc">
              Try adjusting your search query, selecting "All Steps", or clearing status and category filters.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setStep('all');
                setStatusFilter('all');
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
                readingSpeed={readingSpeed}
                isBookmarked={bookmarkedIds.includes(blog.id)}
                isCompleted={completedIds.includes(blog.id)}
                onToggleBookmark={handleToggleBookmark}
                onToggleCompleted={handleToggleCompleted}
                onOpenModal={setActiveModalBlog}
              />
            ))}
          </div>
        ) : (
          <BlogTable
            blogs={filteredBlogs}
            readingSpeed={readingSpeed}
            bookmarkedIds={bookmarkedIds}
            completedIds={completedIds}
            onToggleBookmark={handleToggleBookmark}
            onToggleCompleted={handleToggleCompleted}
            onOpenModal={setActiveModalBlog}
          />
        )}
      </main>

      <Footer totalBlogs={blogsData.length} />

      {activeModalBlog && (
        <BlogModal
          blog={activeModalBlog}
          readingSpeed={readingSpeed}
          isBookmarked={bookmarkedIds.includes(activeModalBlog.id)}
          isCompleted={completedIds.includes(activeModalBlog.id)}
          onClose={() => setActiveModalBlog(null)}
          onToggleBookmark={handleToggleBookmark}
          onToggleCompleted={handleToggleCompleted}
        />
      )}
    </>
  );
}
