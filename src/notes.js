import notesPaths from './data/notesPaths.json';

// Every note under notes/<step>/<id>-<slug>.md, loaded lazily as raw markdown (one small chunk per note).
const noteLoaders = import.meta.glob('../notes/*/*.md', { query: '?raw', import: 'default' });

// Stable, readable id for a blog: the last segment of its URL (e.g. "machine-learning").
export function noteSlug(blog) {
  return blog.url.replace(/\/+$/, '').split('/').pop();
}

export function noteHref(blog) {
  return `#/notes/${noteSlug(blog)}`;
}

export function hasNote(blog) {
  const p = notesPaths[blog.url];
  return Boolean(p && noteLoaders['../' + p]);
}

export function loadNote(blog) {
  const loader = noteLoaders['../' + notesPaths[blog.url]];
  return loader ? loader() : Promise.reject(new Error('Note not found'));
}

export function githubNoteUrl(blog) {
  const p = notesPaths[blog.url];
  return p ? `https://github.com/kaisarnajar/outcome-school-blogs/blob/main/${p}` : null;
}

// Where the "Back" link on a notes page should return to (last non-notes page visited).
export const nav = { returnTo: '#/' };
