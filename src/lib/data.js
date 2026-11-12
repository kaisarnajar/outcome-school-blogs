import blogsData from '../data/blogsData.json';
import progressData from '../data/progressData.json';
import { noteHref, noteSlug } from '../notes';

export const STATUS = {
  mastered: { key: 'mastered', label: 'Mastered', short: 'Mastered' },
  revision: { key: 'revision', label: 'Needs revision', short: 'Revise' },
  pending: { key: 'pending', label: 'Not started', short: 'To read' },
  new: { key: 'new', label: 'New · not started', short: 'New' },
};

const progressByUrl = new Map(progressData.entries.map((e) => [e.url, e]));

function classify(entry) {
  if (!entry) return 'new';
  if (entry.status !== 'completed') return 'pending';
  return entry.understanding === 100 ? 'mastered' : 'revision';
}

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
  const progress = progressByUrl.get(b.url) || null;
  const mins = b.reading_time_mins || Math.max(1, Math.round((b.word_count || 0) / 200));
  return {
    ...b,
    mins,
    slug: noteSlug(b),
    href: noteHref(b),
    progress,
    status: classify(progress),
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
    const count = (k) => s.blogs.filter((b) => b.status === k).length;
    const done = count('mastered') + count('revision');
    const levels = s.blogs.map((b) => b.progress?.understanding).filter((v) => v != null);
    return {
      ...s,
      mastered: count('mastered'),
      revision: count('revision'),
      pending: count('pending'),
      new: count('new'),
      done,
      total: s.blogs.length,
      mins: s.blogs.reduce((a, b) => a + b.mins, 0),
      words: s.blogs.reduce((a, b) => a + (b.word_count || 0), 0),
      avg: levels.length ? Math.round(levels.reduce((a, v) => a + v, 0) / levels.length) : null,
    };
  });
})();

export const totals = (() => {
  const c = (k) => blogs.filter((b) => b.status === k).length;
  const levels = blogs.map((b) => b.progress?.understanding).filter((v) => v != null);
  const done = c('mastered') + c('revision');
  return {
    count: blogs.length,
    steps: new Set(blogs.map((b) => b.step_number)).size,
    words: blogs.reduce((a, b) => a + (b.word_count || 0), 0),
    mins: blogs.reduce((a, b) => a + b.mins, 0),
    minsDone: blogs.filter((b) => b.status === 'mastered' || b.status === 'revision').reduce((a, b) => a + b.mins, 0),
    mastered: c('mastered'),
    revision: c('revision'),
    pending: c('pending'),
    new: c('new'),
    done,
    pct: Math.round((done / blogs.length) * 100),
    avg: levels.length ? Math.round(levels.reduce((a, v) => a + v, 0) / levels.length) : 0,
  };
})();

export const progressUpdated = progressData.updated;

export function fmtHours(mins) {
  return (mins / 60).toFixed(1);
}
