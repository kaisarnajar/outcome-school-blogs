import React from 'react';
import { Sparkles } from 'lucide-react';

export default function HeroSection({ totalBlogs }) {
  return (
    <header className="hero-section">
      <div className="hero-pill">
        <span className="dot" />
        <Sparkles size={14} style={{ marginRight: 4 }} />
        <span>{totalBlogs} Blogs Analyzed • Real-time Word & Time Intelligence</span>
      </div>

      <h1 className="hero-title">
        AI Engineering Roadmap <br />
        <span className="gradient-text">Blog Length & Reading Analysis</span>
      </h1>

      <p className="hero-desc">
        A comprehensive quantitative analysis of all articles in the Outcome School AI Engineering Roadmap
        by Amit Shekhar. Explore exact word counts, estimated reading commitment, structural depth, and topics
        across foundational ML, Transformers, RAG, Voice AI, and Frontier Agents.
      </p>
    </header>
  );
}
