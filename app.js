/* Outcome School Blogs - Interactive Engine */

(function () {
  'use strict';

  // State
  let blogs = window.BLOGS_DATA || [];
  let currentFilter = {
    search: '',
    step: 'all',
    category: 'all',
    sortBy: 'roadmap-order',
  };
  let currentView = 'grid'; // 'grid' | 'table'
  let readingSpeed = 200; // words per minute

  // Elements
  const blogsGrid = document.getElementById('blogsGrid');
  const blogsTableBody = document.getElementById('blogsTableBody');
  const tableViewWrapper = document.getElementById('tableViewWrapper');
  const resultsCountEl = document.getElementById('resultsCount');
  const searchInput = document.getElementById('searchInput');
  const stepSelect = document.getElementById('stepSelect');
  const sortSelect = document.getElementById('sortSelect');
  const filterChips = document.querySelectorAll('.filter-chip');
  const speedSlider = document.getElementById('speedSlider');
  const speedDisplay = document.getElementById('speedDisplay');
  const dynamicTotalTime = document.getElementById('dynamicTotalTime');
  const stepScrollContainer = document.getElementById('stepCardsScroll');
  const themeToggle = document.getElementById('themeToggle');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const exportCsvBtn = document.getElementById('exportCsvBtn');
  const exportJsonBtn = document.getElementById('exportJsonBtn');
  const statTotalBlogs = document.getElementById('statTotalBlogs');
  const statTotalWords = document.getElementById('statTotalWords');
  const statTotalTime = document.getElementById('statTotalTime');
  const statAvgWords = document.getElementById('statAvgWords');

  // Initialize
  function init() {
    renderHeroStats();
    populateStepDropdown();
    renderStepOverviewCards();
    updateDisplay();
    setupEventListeners();
    setupTheme();
  }

  // Calculate dynamic reading time based on selected reading speed
  function getReadingTime(words) {
    return Math.max(1, Math.round(words / readingSpeed));
  }

  // Render hero overview numbers
  function renderHeroStats() {
    const totalBlogs = blogs.length;
    const totalWords = blogs.reduce((sum, b) => sum + b.word_count, 0);
    const totalMinutes = blogs.reduce((sum, b) => sum + getReadingTime(b.word_count), 0);
    const totalHours = (totalMinutes / 60).toFixed(1);
    const avgWords = Math.round(totalWords / totalBlogs);

    if (statTotalBlogs) statTotalBlogs.textContent = totalBlogs;
    if (statTotalWords) statTotalWords.textContent = totalWords.toLocaleString();
    if (statTotalTime) statTotalTime.textContent = `${totalHours} hrs (${totalMinutes.toLocaleString()} m)`;
    if (statAvgWords) statAvgWords.textContent = `${avgWords.toLocaleString()} words`;

    updateDynamicSpeedCalculation();
  }

  function updateDynamicSpeedCalculation() {
    if (!dynamicTotalTime) return;
    const totalWords = blogs.reduce((sum, b) => sum + b.word_count, 0);
    const totalMinutes = Math.round(totalWords / readingSpeed);
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    dynamicTotalTime.innerHTML = `<strong>${hours}h ${mins}m</strong> total time at ${readingSpeed} WPM`;
  }

  // Populate Step filter dropdown
  function populateStepDropdown() {
    if (!stepSelect) return;
    const stepsMap = new Map();
    blogs.forEach(b => {
      if (!stepsMap.has(b.step)) {
        stepsMap.set(b.step, 0);
      }
      stepsMap.set(b.step, stepsMap.get(b.step) + 1);
    });

    stepSelect.innerHTML = `<option value="all">All Roadmap Steps (${blogs.length} Blogs)</option>`;
    for (const [step, count] of stepsMap.entries()) {
      const opt = document.createElement('option');
      opt.value = step;
      opt.textContent = `${step} (${count})`;
      stepSelect.appendChild(opt);
    }
  }

  // Render Step cards in the horizontal carousel
  function renderStepOverviewCards() {
    if (!stepScrollContainer) return;
    const stepStats = new Map();
    blogs.forEach(b => {
      if (!stepStats.has(b.step)) {
        stepStats.set(b.step, { count: 0, words: 0, stepNumber: b.step_number });
      }
      const st = stepStats.get(b.step);
      st.count += 1;
      st.words += b.word_count;
    });

    let html = '';
    for (const [step, stats] of stepStats.entries()) {
      const avgW = Math.round(stats.words / stats.count);
      const approxMins = Math.round(stats.words / readingSpeed);
      html += `
        <div class="step-badge-card" data-step="${escapeHtml(step)}">
          <div class="step-num">Step ${stats.stepNumber || 'General'}</div>
          <div class="step-title" title="${escapeHtml(step)}">${escapeHtml(step.replace(/^Step \d+:\s*/, ''))}</div>
          <div class="step-meta">
            <span><strong>${stats.count}</strong> blogs</span>
            <span>~${approxMins}m read</span>
          </div>
        </div>
      `;
    }
    stepScrollContainer.innerHTML = html;

    // Click handler on step cards
    stepScrollContainer.querySelectorAll('.step-badge-card').forEach(card => {
      card.addEventListener('click', () => {
        const step = card.getAttribute('data-step');
        if (currentFilter.step === step) {
          currentFilter.step = 'all';
          card.classList.remove('active');
          if (stepSelect) stepSelect.value = 'all';
        } else {
          currentFilter.step = step;
          stepScrollContainer.querySelectorAll('.step-badge-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          if (stepSelect) stepSelect.value = step;
        }
        updateDisplay();
      });
    });
  }

  // Filter and Sort Data
  function getFilteredData() {
    let list = [...blogs];

    // Search query
    if (currentFilter.search.trim()) {
      const q = currentFilter.search.toLowerCase().trim();
      list = list.filter(b => 
        b.title.toLowerCase().includes(q) ||
        b.step.toLowerCase().includes(q) ||
        (b.excerpt && b.excerpt.toLowerCase().includes(q))
      );
    }

    // Step filter
    if (currentFilter.step !== 'all') {
      list = list.filter(b => b.step === currentFilter.step);
    }

    // Category filter
    if (currentFilter.category !== 'all') {
      list = list.filter(b => {
        const mins = getReadingTime(b.word_count);
        if (currentFilter.category === 'quick') return mins <= 4;
        if (currentFilter.category === 'standard') return mins >= 5 && mins <= 8;
        if (currentFilter.category === 'deep') return mins >= 9 && mins <= 15;
        if (currentFilter.category === 'comprehensive') return mins >= 16;
        return true;
      });
    }

    // Sorting
    list.sort((a, b) => {
      const minsA = getReadingTime(a.word_count);
      const minsB = getReadingTime(b.word_count);

      switch (currentFilter.sortBy) {
        case 'words-desc':
          return b.word_count - a.word_count;
        case 'words-asc':
          return a.word_count - b.word_count;
        case 'time-desc':
          return minsB - minsA;
        case 'time-asc':
          return minsA - minsB;
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'roadmap-order':
        default:
          return a.id - b.id;
      }
    });

    return list;
  }

  // Update Display
  function updateDisplay() {
    const filtered = getFilteredData();

    if (resultsCountEl) {
      resultsCountEl.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${blogs.length}</strong> blogs`;
    }

    if (currentView === 'grid') {
      blogsGrid.style.display = 'grid';
      tableViewWrapper.style.display = 'none';
      renderGrid(filtered);
    } else {
      blogsGrid.style.display = 'none';
      tableViewWrapper.style.display = 'block';
      renderTable(filtered);
    }
  }

  // Render Grid View
  function renderGrid(list) {
    if (!blogsGrid) return;

    if (list.length === 0) {
      blogsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 64px 20px; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px dashed var(--border-strong);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 16px; color: var(--text-muted);"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">No matching blogs found</h3>
          <p style="color: var(--text-secondary); max-width: 400px; margin: 0 auto 16px;">Try adjusting your search keywords, step filter, or reading time category.</p>
          <button class="btn-secondary" onclick="window.resetFilters()">Clear Filters</button>
        </div>
      `;
      return;
    }

    let html = '';
    list.forEach(b => {
      const dynamicMins = getReadingTime(b.word_count);
      let badgeColor = 'badge-blue';
      if (dynamicMins <= 4) badgeColor = 'badge-emerald';
      else if (dynamicMins <= 8) badgeColor = 'badge-blue';
      else if (dynamicMins <= 15) badgeColor = 'badge-purple';
      else badgeColor = 'badge-amber';

      html += `
        <div class="blog-card" data-id="${b.id}">
          <div class="card-top">
            <div class="card-badges">
              <span class="badge-step" title="${escapeHtml(b.step)}">${escapeHtml(b.step.replace(/Step \d+:\s*/, ''))}</span>
              <span class="badge-reading-time ${badgeColor}">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                ${dynamicMins} min read
              </span>
            </div>
            <a href="${escapeHtml(b.url)}" target="_blank" rel="noopener noreferrer" class="card-title">
              ${escapeHtml(b.title)}
            </a>
            <p class="card-excerpt">${escapeHtml(b.excerpt || 'Overview of key concepts and practical takeaways.')}</p>
          </div>

          <div>
            <div class="card-metrics-row">
              <div class="metric-item">
                <div class="metric-label">Words</div>
                <div class="metric-val">${b.word_count.toLocaleString()}</div>
              </div>
              <div class="metric-item">
                <div class="metric-label">Characters</div>
                <div class="metric-val">${(b.char_count || 0).toLocaleString()}</div>
              </div>
              <div class="metric-item">
                <div class="metric-label">Sections</div>
                <div class="metric-val">${b.headings_count || '-'}</div>
              </div>
            </div>

            <div class="card-footer">
              <button class="btn-inspect" onclick="window.inspectBlog(${b.id})">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                Detailed Analysis
              </button>
              <a href="${escapeHtml(b.url)}" target="_blank" rel="noopener noreferrer" class="btn-external" title="Read on Outcome School">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        </div>
      `;
    });

    blogsGrid.innerHTML = html;
  }

  // Render Table View
  function renderTable(list) {
    if (!blogsTableBody) return;

    if (list.length === 0) {
      blogsTableBody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; padding: 48px 20px;">
            No matching blogs found. <button class="btn-secondary" style="margin-left: 10px;" onclick="window.resetFilters()">Clear Filters</button>
          </td>
        </tr>
      `;
      return;
    }

    const maxWords = Math.max(...blogs.map(b => b.word_count));

    let html = '';
    list.forEach(b => {
      const dynamicMins = getReadingTime(b.word_count);
      const barWidth = Math.max(8, Math.round((b.word_count / maxWords) * 120));

      let badgeColor = 'badge-blue';
      if (dynamicMins <= 4) badgeColor = 'badge-emerald';
      else if (dynamicMins <= 8) badgeColor = 'badge-blue';
      else if (dynamicMins <= 15) badgeColor = 'badge-purple';
      else badgeColor = 'badge-amber';

      html += `
        <tr>
          <td style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); width: 50px;">#${b.id}</td>
          <td style="width: 220px;">
            <span class="badge-step" style="display: inline-block; max-width: 200px;">${escapeHtml(b.step)}</span>
          </td>
          <td class="table-title-cell">
            <a href="${escapeHtml(b.url)}" target="_blank" rel="noopener noreferrer" class="table-title-link">
              ${escapeHtml(b.title)}
            </a>
          </td>
          <td style="width: 180px;">
            <div class="word-bar-wrap">
              <span style="font-family: var(--font-mono); font-weight: 600; width: 65px;">${b.word_count.toLocaleString()}</span>
              <div class="word-bar" style="width: ${barWidth}px;"></div>
            </div>
          </td>
          <td style="width: 130px;">
            <span class="badge-reading-time ${badgeColor}">
              ${dynamicMins}m read
            </span>
          </td>
          <td style="text-align: right; width: 100px;">
            <button class="btn-secondary" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.inspectBlog(${b.id})">
              Details
            </button>
          </td>
        </tr>
      `;
    });

    blogsTableBody.innerHTML = html;
  }

  // Blog Inspector Modal
  window.inspectBlog = function (id) {
    const item = blogs.find(b => b.id === id);
    if (!item) return;

    const dynamicMins = getReadingTime(item.word_count);

    document.getElementById('modalStep').textContent = item.step;
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalWords').textContent = item.word_count.toLocaleString();
    document.getElementById('modalChars').textContent = (item.char_count || 0).toLocaleString();
    document.getElementById('modalReadTime').textContent = `${dynamicMins} mins (@ ${readingSpeed} WPM)`;
    document.getElementById('modalHeadings').textContent = item.headings_count || '0';
    document.getElementById('modalParagraphs').textContent = item.paragraphs_count || '0';
    document.getElementById('modalCodeBlocks').textContent = item.code_blocks_count || '0';
    document.getElementById('modalExcerpt').textContent = item.excerpt || 'No excerpt available.';
    
    const readBtn = document.getElementById('modalReadBtn');
    if (readBtn) {
      readBtn.href = item.url;
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Reset all filters
  window.resetFilters = function () {
    currentFilter = {
      search: '',
      step: 'all',
      category: 'all',
      sortBy: 'roadmap-order',
    };
    if (searchInput) searchInput.value = '';
    if (stepSelect) stepSelect.value = 'all';
    if (sortSelect) sortSelect.value = 'roadmap-order';
    filterChips.forEach(c => c.classList.remove('active'));
    document.querySelector('.filter-chip[data-category="all"]')?.classList.add('active');
    if (stepScrollContainer) {
      stepScrollContainer.querySelectorAll('.step-badge-card').forEach(c => c.classList.remove('active'));
    }
    updateDisplay();
  };

  // Event Listeners
  function setupEventListeners() {
    // Search with debounce
    let timeout = null;
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          currentFilter.search = e.target.value;
          updateDisplay();
        }, 150);
      });
    }

    // Step select
    if (stepSelect) {
      stepSelect.addEventListener('change', e => {
        currentFilter.step = e.target.value;
        if (stepScrollContainer) {
          stepScrollContainer.querySelectorAll('.step-badge-card').forEach(c => {
            if (c.getAttribute('data-step') === e.target.value) {
              c.classList.add('active');
              c.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
              c.classList.remove('active');
            }
          });
        }
        updateDisplay();
      });
    }

    // Sort select
    if (sortSelect) {
      sortSelect.addEventListener('change', e => {
        currentFilter.sortBy = e.target.value;
        updateDisplay();
      });
    }

    // Length chips
    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentFilter.category = chip.getAttribute('data-category');
        updateDisplay();
      });
    });

    // View toggles
    document.getElementById('viewGridBtn')?.addEventListener('click', function () {
      currentView = 'grid';
      this.classList.add('active');
      document.getElementById('viewTableBtn')?.classList.remove('active');
      updateDisplay();
    });

    document.getElementById('viewTableBtn')?.addEventListener('click', function () {
      currentView = 'table';
      this.classList.add('active');
      document.getElementById('viewGridBtn')?.classList.remove('active');
      updateDisplay();
    });

    // Reading speed slider
    if (speedSlider) {
      speedSlider.addEventListener('input', e => {
        readingSpeed = parseInt(e.target.value, 10);
        if (speedDisplay) speedDisplay.textContent = `${readingSpeed} WPM`;
        updateDynamicSpeedCalculation();
        renderHeroStats();
        updateDisplay();
      });
    }

    // Modal close
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalOverlay) {
      modalOverlay.addEventListener('click', e => {
        if (e.target === modalOverlay) closeModal();
      });
    }
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
      }
    });

    // Export CSV
    if (exportCsvBtn) {
      exportCsvBtn.addEventListener('click', exportToCsv);
    }

    // Export JSON
    if (exportJsonBtn) {
      exportJsonBtn.addEventListener('click', exportToJson);
    }
  }

  // Export functions
  function exportToCsv() {
    const filtered = getFilteredData();
    const headers = ['ID', 'Step', 'Title', 'URL', 'Word Count', 'Estimated Minutes', 'Headings', 'Paragraphs', 'Code Blocks'];
    const rows = filtered.map(b => [
      b.id,
      `"${(b.step || '').replace(/"/g, '""')}"`,
      `"${(b.title || '').replace(/"/g, '""')}"`,
      `"${b.url}"`,
      b.word_count,
      getReadingTime(b.word_count),
      b.headings_count || 0,
      b.paragraphs_count || 0,
      b.code_blocks_count || 0
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `outcome_school_blogs_analysis_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function exportToJson() {
    const filtered = getFilteredData();
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(filtered, null, 2));
    const link = document.createElement('a');
    link.setAttribute('href', dataStr);
    link.setAttribute('download', `outcome_school_blogs_analysis_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Theme support
  function setupTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
      });
    }
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    if (theme === 'light') {
      themeToggle.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      themeToggle.setAttribute('title', 'Switch to Dark Mode');
    } else {
      themeToggle.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
      themeToggle.setAttribute('title', 'Switch to Light Mode');
    }
  }

  // Safe HTML helper
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Run
  document.addEventListener('DOMContentLoaded', init);
})();
