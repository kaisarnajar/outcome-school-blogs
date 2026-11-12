import React, { useEffect, useId, useState } from 'react';

let mermaidPromise;
function getMermaid() {
  if (!mermaidPromise) mermaidPromise = import('mermaid').then((m) => m.default);
  return mermaidPromise;
}

// Diagram palette mirrors the site tokens so diagrams feel native in both themes.
const THEMES = {
  light: {
    background: 'transparent',
    fontFamily: 'Inter, -apple-system, sans-serif',
    fontSize: '15px',
    primaryColor: '#ffffff',
    primaryTextColor: '#1d1c19',
    primaryBorderColor: '#b9bfe8',
    secondaryColor: '#eceffd',
    secondaryTextColor: '#1d1c19',
    secondaryBorderColor: '#c8cff6',
    tertiaryColor: '#f6f4ef',
    tertiaryTextColor: '#1d1c19',
    tertiaryBorderColor: '#d7d2c5',
    lineColor: '#8b877d',
    textColor: '#1d1c19',
    mainBkg: '#ffffff',
    nodeBorder: '#b9bfe8',
    clusterBkg: '#f6f4efcc',
    clusterBorder: '#d7d2c5',
    titleColor: '#1d1c19',
    edgeLabelBackground: '#fbfaf7',
    actorBkg: '#ffffff',
    actorBorder: '#b9bfe8',
    actorTextColor: '#1d1c19',
    actorLineColor: '#b3afa5',
    signalColor: '#57534b',
    signalTextColor: '#1d1c19',
    labelBoxBkgColor: '#eceffd',
    labelBoxBorderColor: '#c8cff6',
    labelTextColor: '#1d1c19',
    loopTextColor: '#57534b',
    noteBkgColor: '#fbf0dc',
    noteBorderColor: '#e2c48f',
    noteTextColor: '#1d1c19',
    activationBkgColor: '#eceffd',
    activationBorderColor: '#b9bfe8',
    cScale0: '#3446cf', cScale1: '#2f7a4d', cScale2: '#b26a0c', cScale3: '#6d48c4', cScale4: '#0e7490', cScale5: '#be185d',
    cScaleLabel0: '#ffffff', cScaleLabel1: '#ffffff', cScaleLabel2: '#ffffff', cScaleLabel3: '#ffffff', cScaleLabel4: '#ffffff', cScaleLabel5: '#ffffff',
    git0: '#3446cf',
  },
  dark: {
    background: 'transparent',
    fontFamily: 'Inter, -apple-system, sans-serif',
    fontSize: '15px',
    primaryColor: '#1f1f1d',
    primaryTextColor: '#edebe5',
    primaryBorderColor: '#4b55a0',
    secondaryColor: '#232744',
    secondaryTextColor: '#edebe5',
    secondaryBorderColor: '#4b55a0',
    tertiaryColor: '#1a1a18',
    tertiaryTextColor: '#edebe5',
    tertiaryBorderColor: '#3a3935',
    lineColor: '#85817a',
    textColor: '#edebe5',
    mainBkg: '#1f1f1d',
    nodeBorder: '#4b55a0',
    clusterBkg: '#171716cc',
    clusterBorder: '#3a3935',
    titleColor: '#edebe5',
    edgeLabelBackground: '#131312',
    actorBkg: '#1f1f1d',
    actorBorder: '#4b55a0',
    actorTextColor: '#edebe5',
    actorLineColor: '#5a5852',
    signalColor: '#b3afa5',
    signalTextColor: '#edebe5',
    labelBoxBkgColor: '#232744',
    labelBoxBorderColor: '#4b55a0',
    labelTextColor: '#edebe5',
    loopTextColor: '#b3afa5',
    noteBkgColor: '#3a2e1a',
    noteBorderColor: '#7a5a26',
    noteTextColor: '#edebe5',
    activationBkgColor: '#232744',
    activationBorderColor: '#4b55a0',
    cScale0: '#4b55a0', cScale1: '#2f6b48', cScale2: '#8a5a17', cScale3: '#5b3fa0', cScale4: '#155e75', cScale5: '#9d174d',
    cScaleLabel0: '#ffffff', cScaleLabel1: '#ffffff', cScaleLabel2: '#ffffff', cScaleLabel3: '#ffffff', cScaleLabel4: '#ffffff', cScaleLabel5: '#ffffff',
    git0: '#8d9bff',
  },
};

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
      if (cancelled) return;
      try {
        const mermaid = await getMermaid();
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: 'base',
          themeVariables: THEMES[theme === 'dark' ? 'dark' : 'light'],
          flowchart: { htmlLabels: true, curve: 'basis', padding: 14, nodeSpacing: 42, rankSpacing: 48 },
          sequence: { actorMargin: 60, boxMargin: 8, mirrorActors: false },
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
      <div className="diagram error">
        <div className="label">Diagram could not be rendered — source shown instead</div>
        <pre><code>{code}</code></pre>
      </div>
    );
  }
  if (!svg) return <div className="diagram loading">Drawing diagram…</div>;
  return <figure className="diagram" dangerouslySetInnerHTML={{ __html: svg }} />;
}
