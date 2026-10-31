# Outcome School AI Engineering Roadmap — Blog Length & Structural Analysis

> Modern React.js web application and quantitative analysis of word counts, reading commitment, and architectural depth for all **185 blog articles** across the [AI Engineer Roadmap](https://github.com/amitshekhariitbhu/ai-engineer-roadmap) by [Amit Shekhar](https://github.com/amitshekhariitbhu) ([Outcome School](https://outcomeschool.com)).

🌐 **Live Application:**  
**[https://kaisarnajar.github.io/outcome-school-blogs/](https://kaisarnajar.github.io/outcome-school-blogs/)**

---

## 📊 Executive Summary Metrics

| Metric | Value | Details |
| :--- | :--- | :--- |
| **Total Blog Articles** | **185** | Synced with latest upstream roadmap commits |
| **Total Word Count** | **645,213 words** | Extracted and normalized article prose body |
| **Total Reading Time** | **~53.8 hours (3,227 mins)** | Calculated at standard reading pace of 200 WPM |
| **Average Words / Blog** | **3,487 words** | In-depth technical articles (~17 min average read) |
| **Longest Article** | **13,588 words (~68 mins)** | *Design a Real-Time Voice AI Agent* |
| **Shortest Article** | **205 words (~1 min)** | *Positional Embeddings in LLMs* |

---

## ⏱️ Distribution by Reading Length

| Reading Category | Reading Time Range | Blog Count | Percentage |
| :--- | :--- | :---: | :---: |
| 🟢 **Quick Read** | ≤ 4 minutes (under 900 words) | **7** | 3.8% |
| 🔵 **Standard Read** | 5 – 8 minutes (900 – 1,700 words) | **6** | 3.2% |
| 🟣 **Deep Dive** | 9 – 15 minutes (1,700 – 3,100 words) | **49** | 26.5% |
| 🟠 **Comprehensive Guide** | 16+ minutes (3,100+ words) | **123** | 66.5% |

---

## 🗺️ Step-by-Step Curriculum Breakdown

| Step | Topic | Articles | Total Words | Est. Time (200 WPM) |
| :---: | :--- | :---: | :---: | :---: |
| **Step 1** | Machine Learning Foundations | 11 | 21,545 | ~108 mins (1.8 hrs) |
| **Step 2** | Deep Learning and Neural Networks | 17 | 47,628 | ~238 mins (4.0 hrs) |
| **Step 3** | Generative AI and the Transformer Architecture | 19 | 53,495 | ~267 mins (4.5 hrs) |
| **Step 4** | How LLMs Generate Text | 6 | 23,756 | ~119 mins (2.0 hrs) |
| **Step 5** | Modern LLM Architecture | 6 | 22,099 | ~110 mins (1.8 hrs) |
| **Step 6** | Types of Language Models | 5 | 18,566 | ~93 mins (1.6 hrs) |
| **Step 7** | Training, Fine-Tuning, and Alignment | 11 | 37,439 | ~187 mins (3.1 hrs) |
| **Step 8** | Prompt Engineering and Context Engineering | 6 | 20,566 | ~103 mins (1.7 hrs) |
| **Step 9** | Vector Search and Retrieval-Augmented Generation (RAG) | 16 | 62,754 | ~314 mins (5.2 hrs) |
| **Step 10** | AI Agents and Agentic Systems | 18 | 66,124 | ~331 mins (5.5 hrs) |
| **Step 11** | Agentic Engineering and Agent Frameworks | 8 | 30,212 | ~151 mins (2.5 hrs) |
| **Step 12** | LLM Inference Engineering | 18 | 73,478 | ~367 mins (6.1 hrs) |
| **Step 13** | Evaluation and Observability | 4 | 16,572 | ~83 mins (1.4 hrs) |
| **Step 14** | AI Safety and Security | 3 | 14,476 | ~72 mins (1.2 hrs) |
| **Step 15** | Multimodal AI and Generative Models | 7 | 23,464 | ~117 mins (1.9 hrs) |
| **Step 16** | AI Infrastructure, Deployment, and System Design | 24 | 94,317 | ~472 mins (7.9 hrs) |
| **Step 16+**| Supporting reads for AI System Design | 3 | 4,097 | ~20 mins (0.3 hrs) |
| **Step 17** | Frontier Ideas in AI | 3 | 14,625 | ~73 mins (1.2 hrs) |
| **Total** | **All Analyzed Roadmap Blogs** | **185** | **645,213** | **~53.8 Hours** |

---

## ⚡ React Application Features

- **Modern Tech Stack**: React 19 + Vite + Lucide Icons.
- **Aesthetic Excellence**: Sleek dark and light modes, ambient radial glows, glassmorphism, responsive grid layouts.
- **Standardized Reading Metrics**: Standard pace (200 WPM) calculates consistent estimated reading times across every article and cumulative steps.
- **Multi-Filter Engine**: Filter by Roadmap Step, Reading Length (Quick, Standard, Deep, Comprehensive), and instant keyword search.
- **Dual View Modes**: Switch between immersive **Card Grid** view and high-density sortable **Table** view.
- **Deep-Dive Article Modal**: Inspect detailed prose metrics: word count, headings, code blocks, paragraphs, published dates, and excerpts.
- **Exporting**: Download filtered datasets directly as CSV or JSON.
- **Continuous Deployment**: Single-branch workflow (`main`) deployed automatically via GitHub Actions to GitHub Pages.

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
