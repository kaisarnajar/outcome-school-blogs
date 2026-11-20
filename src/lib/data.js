import blogsData from '../data/blogsData.json';
import progressData from '../data/progressData.json';
import addedData from '../data/addedDates.json';
import { noteHref, noteSlug } from '../notes';

// Every blog is either read (listed in progressData.json) or unread.
export const STATUS = {
  read: { key: 'read', label: 'Read' },
  unread: { key: 'unread', label: 'Unread' },
};

const readUrls = new Set(progressData.read.map((e) => e.url));

export function lengthBucket(mins) {
  if (mins <= 4) return 'quick';
  if (mins <= 8) return 'standard';
  if (mins <= 15) return 'deep';
  return 'long';
}

export const LENGTHS = {
  quick: 'Quick · ≤4 min',
  standard: 'Standard · 5–8 min',
  deep: 'Deep dive · 9–15 min',
  long: 'Long read · 16+ min',
};

function splitStep(step) {
  const [head, ...rest] = step.split(':');
  const isSupporting = /Supporting/i.test(step);
  const num = head.replace('Step', '').trim();
  return {
    num: isSupporting ? `${num}+` : num,
    name: rest.join(':').trim(),
  };
}

export const blogs = blogsData.map((b) => {
  const mins = b.reading_time_mins || Math.max(1, Math.round((b.word_count || 0) / 200));
  return {
    ...b,
    mins,
    slug: noteSlug(b),
    href: noteHref(b),
    added: addedData.entries[b.url]?.date || null,
    status: readUrls.has(b.url) ? 'read' : 'unread',
    length: lengthBucket(mins),
    stepInfo: splitStep(b.step),
  };
});

export const steps = (() => {
  const map = new Map();
  blogs.forEach((b) => {
    if (!map.has(b.step)) {
      map.set(b.step, {
        step: b.step,
        id: 'step-' + b.stepInfo.num.replace('+', '-plus'),
        ...b.stepInfo,
        blogs: [],
      });
    }
    map.get(b.step).blogs.push(b);
  });
  return Array.from(map.values()).map((s) => {
    const read = s.blogs.filter((b) => b.status === 'read').length;
    return {
      ...s,
      read,
      unread: s.blogs.length - read,
      total: s.blogs.length,
      mins: s.blogs.reduce((a, b) => a + b.mins, 0),
      words: s.blogs.reduce((a, b) => a + (b.word_count || 0), 0),
    };
  });
})();

export const totals = (() => {
  const read = blogs.filter((b) => b.status === 'read');
  return {
    count: blogs.length,
    steps: new Set(blogs.map((b) => b.step_number)).size,
    words: blogs.reduce((a, b) => a + (b.word_count || 0), 0),
    mins: blogs.reduce((a, b) => a + b.mins, 0),
    minsRead: read.reduce((a, b) => a + b.mins, 0),
    read: read.length,
    unread: blogs.length - read.length,
    pct: Math.round((read.length / blogs.length) * 100),
  };
})();

export const progressUpdated = progressData.updated;

export function fmtHours(mins) {
  return (mins / 60).toFixed(1);
}

export const addedInfo = { updated: addedData.updated, launch: addedData.launch, source: addedData.source };

const DAY_FMT = { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' };
export function fmtDay(iso, opts = DAY_FMT) {
  return iso ? new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', opts) : '';
}
