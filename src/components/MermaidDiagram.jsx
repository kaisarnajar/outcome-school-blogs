import React, { useEffect, useId, useState } from 'react';

let mermaidPromise;
function getMermaid() {
  if (!mermaidPromise) mermaidPromise = import('mermaid').then((m) => m.default);
  return mermaidPromise;
}

// Mermaid renders are global/async; serialise them so theme config can't leak between diagrams.
let queue = Promise.resolve();

export default function MermaidDiagram({ code, theme }) {
  const rawId = useId();
  const [svg, setSvg] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const id = 'mmd-' + rawId.replace(/[^a-zA-Z0-9]/g, '') + '-' + theme;
    queue = queue.then(async () => {
      try {
        const mermaid = await getMermaid();
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: theme === 'dark' ? 'dark' : 'default',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
          flowchart: { htmlLabels: true, curve: 'basis' },
        });
        const { svg: out } = await mermaid.render(id, code.trim());
        if (!cancelled) {
          setSvg(out);
          setError(null);
        }
      } catch (e) {
        document.getElementById('d' + id)?.remove();
        if (!cancelled) setError(String(e?.message || e));
      }
    });
    return () => {
      cancelled = true;
    };
  }, [code, theme, rawId]);

  if (error) {
    return (
      <div className="note-diagram note-diagram-error">
        <div className="note-diagram-error-label">Diagram could not be rendered — source shown instead</div>
        <pre><code>{code}</code></pre>
      </div>
    );
  }
  if (!svg) return <div className="note-diagram note-diagram-loading">Drawing diagram…</div>;
  return <div className="note-diagram" dangerouslySetInnerHTML={{ __html: svg }} />;
}
