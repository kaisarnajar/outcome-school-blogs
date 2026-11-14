# Outcome School AI Engineering Roadmap — Blog Length & Structural Analysis

> Modern React.js web application and quantitative analysis of word counts, reading commitment, and architectural depth for all **233 blog articles** across the [AI Engineer Roadmap](https://github.com/amitshekhariitbhu/ai-engineer-roadmap) by [Amit Shekhar](https://github.com/amitshekhariitbhu) ([Outcome School](https://outcomeschool.com)).

🌐 **Live Application:**  
**[https://kaisarnajar.github.io/outcome-school-blogs/](https://kaisarnajar.github.io/outcome-school-blogs/)**

📈 **My Study Progress:** **[kaisarnajar.github.io/outcome-school-blogs/#/progress](https://kaisarnajar.github.io/outcome-school-blogs/#/progress)** (data in `src/data/progressData.json`)

📝 **Study Notes:** Click any blog on the site to open its notes (with diagrams), e.g. **[#/notes/machine-learning](https://kaisarnajar.github.io/outcome-school-blogs/#/notes/machine-learning)** · source Markdown in **[notes/](notes/README.md)**

---

## 📊 Executive Summary Metrics

| Metric | Value | Details |
| :--- | :--- | :--- |
| **Total Blog Articles** | **233** | Synced with latest upstream roadmap commits |
| **Total Word Count** | **798,938 words** | Extracted and normalized article prose body |
| **Total Reading Time** | **~66.6 hours (3,994 mins)** | Calculated at standard reading pace of 200 WPM |
| **Average Words / Blog** | **3,428 words** | In-depth technical articles (~17 min average read) |
| **Longest Article** | **13,588 words (~68 mins)** | *Design a Real-Time Voice AI Agent* |
| **Shortest Article** | **205 words (~1 min)** | *Positional Embeddings in LLMs* |

---

## ⏱️ Distribution by Reading Length

| Reading Category | Reading Time Range | Blog Count | Percentage |
| :--- | :--- | :---: | :---: |
| 🟢 **Quick Read** | ≤ 4 minutes (under 900 words) | **7** | 3.0% |
| 🔵 **Standard Read** | 5 – 8 minutes (900 – 1,700 words) | **7** | 3.0% |
| 🟣 **Deep Dive** | 9 – 15 minutes (1,700 – 3,100 words) | **61** | 26.2% |
| 🟠 **Comprehensive Guide** | 16+ minutes (3,100+ words) | **158** | 67.8% |

---

## 🗺️ Step-by-Step Curriculum Breakdown

| Step | Topic | Articles | Total Words | Est. Time (200 WPM) |
| :---: | :--- | :---: | :---: | :---: |
| **Step 1** | Machine Learning Foundations | 21 | 54,493 | ~272 mins (4.5 hrs) |
| **Step 2** | Deep Learning and Neural Networks | 25 | 73,302 | ~367 mins (6.1 hrs) |
| **Step 3** | Generative AI and the Transformer Architecture | 19 | 53,495 | ~267 mins (4.5 hrs) |
| **Step 4** | How LLMs Generate Text | 9 | 32,905 | ~165 mins (2.8 hrs) |
| **Step 5** | Modern LLM Architecture | 6 | 22,099 | ~110 mins (1.8 hrs) |
| **Step 6** | Types of Language Models | 5 | 18,566 | ~93 mins (1.6 hrs) |
| **Step 7** | Training, Fine-Tuning, and Alignment | 16 | 53,186 | ~266 mins (4.4 hrs) |
| **Step 8** | Prompt Engineering and Context Engineering | 7 | 23,243 | ~116 mins (1.9 hrs) |
| **Step 9** | Vector Search and Retrieval-Augmented Generation (RAG) | 18 | 68,804 | ~344 mins (5.7 hrs) |
| **Step 10** | AI Agents and Agentic Systems | 19 | 68,821 | ~344 mins (5.7 hrs) |
| **Step 11** | Agentic Engineering and Agent Frameworks | 8 | 30,212 | ~151 mins (2.5 hrs) |
| **Step 12** | LLM Inference Engineering | 19 | 76,216 | ~381 mins (6.3 hrs) |
| **Step 13** | Evaluation and Observability | 4 | 16,572 | ~83 mins (1.4 hrs) |
| **Step 14** | AI Safety and Security | 4 | 18,133 | ~91 mins (1.5 hrs) |
| **Step 15** | Multimodal AI and Generative Models | 8 | 26,810 | ~134 mins (2.2 hrs) |
| **Step 16** | AI Infrastructure, Deployment, and System Design | 39 | 143,359 | ~717 mins (11.9 hrs) |
| **Step 16+**| Supporting reads for AI System Design | 3 | 4,097 | ~20 mins (0.3 hrs) |
| **Step 17** | Frontier Ideas in AI | 3 | 14,625 | ~73 mins (1.2 hrs) |
| **Total** | **All Analyzed Roadmap Blogs** | **233** | **798,938** | **~66.6 Hours** |

---

## ⚡ Web App Features

- **Editorial design**: paper-and-ink light theme and a warm dark theme, serif type for reading (Source Serif 4), Inter for UI, one accent colour.
- **Roadmap index**: every article grouped by step, with a sticky curriculum sidebar that tracks the step in view; filter by text, study status and length, sort, list/table views, CSV export.
- **Notes pages** (`#/notes/<slug>`): revision notes with a TL;DR card, key-concept glossary, KaTeX math, theme-aware Mermaid diagrams, sticky "On this page" table of contents with scroll-spy, reading progress bar and previous/next navigation.
- **Study progress** (`#/progress`): overall completion, a revision queue sorted weakest-first with "to revisit" notes, per-step progress and the full per-article list.
- **Quick open**: press `⌘K` / `Ctrl K` (or `/`) to jump to any note.
- **Continuous deployment**: pushing to `main` deploys to GitHub Pages via GitHub Actions.

---

## 🚀 Development & Local Setup

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🔄 Upstream Roadmap Sync

To synchronize with new articles added to Amit Shekhar's roadmap repository:

```bash
# Pull latest upstream roadmap markdown and scrape new blogs
python scrape_and_analyze.py
```

---

## 📜 Credits & License

- Original content & AI Engineer Roadmap by [Amit Shekhar](https://github.com/amitshekhariitbhu) ([Outcome School](https://outcomeschool.com)).
- Web application & analysis engine created by Kaisar Najar.
- Licensed under the [MIT License](LICENSE).
