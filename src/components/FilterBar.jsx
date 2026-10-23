import React from 'react';
import { Search, X, LayoutGrid, List, Download, FileJson } from 'lucide-react';

export default function FilterBar({
  search,
  setSearch,
  step,
  setStep,
  sortBy,
  setSortBy,
  category,
  setCategory,
  viewMode,
  setViewMode,
  stepsList,
  categoryCounts,
  onExportCsv,
  onExportJson
}) {
  return (
    <div className="control-bar">
      <div className="search-and-selects">
        <div className="search-box-wrapper">
          <Search size={18} className="search-icon-inside" />
          <input
            type="text"
            placeholder="Search blogs by title, keywords, or topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="clear-search-btn"
              title="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <select
          value={step}
          onChange={(e) => setStep(e.target.value)}
          className="select-dropdown"
          aria-label="Filter by Roadmap Step"
        >
          <option value="all">All Roadmap Steps</option>
          {stepsList.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select-dropdown"
          aria-label="Sort by Criteria"
        >
          <option value="roadmap-order">Sort: Roadmap Order</option>
          <option value="words-desc">Sort: Word Count (High → Low)</option>
          <option value="words-asc">Sort: Word Count (Low → High)</option>
          <option value="time-desc">Sort: Reading Time (Longest)</option>
          <option value="time-asc">Sort: Reading Time (Shortest)</option>
          <option value="title-asc">Sort: Title (A → Z)</option>
        </select>
      </div>

      <div className="filter-row-bottom">
        <div className="chips-group">
          <button
            className={`filter-chip ${category === 'all' ? 'active' : ''}`}
            onClick={() => setCategory('all')}
          >
            All Lengths <span className="chip-count">{categoryCounts.all}</span>
          </button>
          <button
            className={`filter-chip ${category === 'quick' ? 'active' : ''}`}
            onClick={() => setCategory('quick')}
          >
            ⚡ Quick (≤ 4m) <span className="chip-count">{categoryCounts.quick}</span>
          </button>
          <button
            className={`filter-chip ${category === 'standard' ? 'active' : ''}`}
            onClick={() => setCategory('standard')}
          >
            📘 Standard (5-8m) <span className="chip-count">{categoryCounts.standard}</span>
          </button>
          <button
            className={`filter-chip ${category === 'deep' ? 'active' : ''}`}
            onClick={() => setCategory('deep')}
          >
            🔬 Deep Dive (9-15m) <span className="chip-count">{categoryCounts.deep}</span>
          </button>
          <button
            className={`filter-chip ${category === 'comprehensive' ? 'active' : ''}`}
            onClick={() => setCategory('comprehensive')}
          >
            🏆 Comprehensive (16m+) <span className="chip-count">{categoryCounts.comprehensive}</span>
          </button>
        </div>

        <div className="view-actions-group">
          <button
            className={`view-switch-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            title="Card Grid View"
          >
            <LayoutGrid size={17} />
          </button>
          <button
            className={`view-switch-btn ${viewMode === 'table' ? 'active' : ''}`}
            onClick={() => setViewMode('table')}
            title="Compact Table View"
          >
            <List size={17} />
          </button>

          <button onClick={onExportCsv} className="export-btn" title="Export current list to CSV">
            <Download size={15} />
            <span>CSV</span>
          </button>
          <button onClick={onExportJson} className="export-btn" title="Export current list to JSON">
            <FileJson size={15} />
            <span>JSON</span>
          </button>
        </div>
      </div>
    </div>
  );
}
