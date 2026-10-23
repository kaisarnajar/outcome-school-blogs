# Outcome School AI Engineering Roadmap — Interactive Blog & Reading Tracker

> Modern React.js web application and quantitative analysis of word counts, reading commitment, and architectural depth for all **166 blog articles** across the [AI Engineer Roadmap](https://github.com/amitshekhariitbhu/ai-engineer-roadmap) by [Amit Shekhar](https://github.com/amitshekhariitbhu) ([Outcome School](https://outcomeschool.com)).

🌐 **Live Application:**  
**[https://kaisarnajar.github.io/outcome-school-blogs/](https://kaisarnajar.github.io/outcome-school-blogs/)**

---

## 📊 Executive Summary Metrics

| Metric | Value | Details |
| :--- | :--- | :--- |
| **Total Blog Articles** | **166** | Synced with latest upstream roadmap commits |
| **Total Word Count** | **583,427 words** | Extracted and normalized article prose body |
| **Total Reading Time** | **~48.6 hours (2,917 mins)** | Calculated at standard reading pace of 200 WPM |
| **Average Words / Blog** | **3,514 words** | In-depth technical articles (~18 min average read) |
| **Longest Article** | **13,588 words (~68 mins)** | *Design a Real-Time Voice AI Agent* |
| **Shortest Article** | **205 words (~1 min)** | *Positional Embeddings in LLMs* |

---

## ⏱️ Distribution by Reading Length

| Reading Category | Reading Time Range | Blog Count | Percentage |
| :--- | :--- | :---: | :---: |
| 🟢 **Quick Read** | ≤ 4 minutes (under 900 words) | **7** | 4.2% |
| 🔵 **Standard Read** | 5 – 8 minutes (900 – 1,700 words) | **6** | 3.6% |
| 🟣 **Deep Dive** | 9 – 15 minutes (1,700 – 3,100 words) | **44** | 26.5% |
| 🟠 **Comprehensive Guide** | 16+ minutes (3,100+ words) | **109** | 65.7% |

---

## 🗺️ Step-by-Step Curriculum Breakdown

| Step | Topic | Articles | Total Words | Est. Time (200 WPM) |
| :---: | :--- | :---: | :---: | :---: |
| **Step 1** | Machine Learning Foundations | 9 | 15,771 | ~79 mins (1.3 hrs) |
| **Step 2** | Deep Learning and Neural Networks | 12 | 31,124 | ~154 mins (2.6 hrs) |
| **Step 3** | Generative AI and the Transformer Architecture | 18 | 49,895 | ~249 mins (4.2 hrs) |
| **Step 4** | How LLMs Generate Text | 6 | 23,756 | ~118 mins (2.0 hrs) |
| **Step 5** | Modern LLM Architecture | 6 | 22,099 | ~111 mins (1.9 hrs) |
| **Step 6** | Types of Language Models | 5 | 18,566 | ~93 mins (1.6 hrs) |
| **Step 7** | Training, Fine-Tuning, and Alignment | 11 | 37,439 | ~187 mins (3.1 hrs) |
| **Step 8** | Prompt Engineering and Context Engineering | 6 | 20,566 | ~104 mins (1.7 hrs) |
| **Step 9** | Vector Search and Retrieval-Augmented Generation (RAG) | 15 | 60,033 | ~300 mins (5.0 hrs) |
| **Step 10** | AI Agents and Agentic Systems | 18 | 66,124 | ~332 mins (5.5 hrs) |
| **Step 11** | Agentic Engineering and Agent Frameworks | 8 | 30,212 | ~151 mins (2.5 hrs) |
| **Step 12** | LLM Inference Engineering | 18 | 73,478 | ~369 mins (6.2 hrs) |
| **Step 13** | Evaluation and Observability | 4 | 16,572 | ~83 mins (1.4 hrs) |
| **Step 14** | AI Safety and Security | 3 | 14,476 | ~72 mins (1.2 hrs) |
| **Step 15** | Multimodal AI and Generative Models | 6 | 20,356 | ~101 mins (1.7 hrs) |
| **Step 16** | AI Infrastructure, Deployment, and System Design | 15 | 64,238 | ~321 mins (5.4 hrs) |
| **Step 16+**| Supporting reads for AI System Design | 3 | 4,097 | ~20 mins (0.3 hrs) |
| **Step 17** | Frontier Ideas in AI | 3 | 14,625 | ~73 mins (1.2 hrs) |
| **Total** | **All Analyzed Roadmap Blogs** | **166** | **583,427** | **~48.6 Hours** |

---

## ⚡ React Application Features

- **Modern Tech Stack**: React 19 + Vite 6 + Lucide Icons + Canvas Confetti.
- **Aesthetic Excellence**: Sleek dark and light modes, ambient radial glows, glassmorphism, responsive grid layouts.
- **Dynamic Speed Calculator**: Interactive slider (120–360 WPM) recalibrates estimated reading times dynamically across every article and the cumulative roadmap.
- **Personal Learning Tracker**: Mark blogs as "Completed" or "Bookmarked" (persisted in `localStorage`), with real-time percentage progress bar and celebration effects.
- **Multi-Filter Engine**: Filter by Roadmap Step, Learning Status (Completed, Bookmarked, Unread), Reading Length (Quick, Standard, Deep, Comprehensive), and instant keyword search.
- **Dual View Modes**: Switch between immersive **Card Grid** view and high-density sortable **Table** view.
- **Deep-Dive Article Modal**: Inspect detailed prose metrics: word count, character count, headings, code blocks, paragraphs, published dates, and excerpts.
- **Exporting**: Download filtered datasets directly as CSV or JSON.

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
