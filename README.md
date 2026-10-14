# Outcome School AI Engineering Roadmap — Blog Analysis & Intelligence

> Quantitative analysis of word counts, reading times, and structural depth for all **157 blog articles** across the [AI Engineer Roadmap](https://github.com/amitshekhariitbhu/ai-engineer-roadmap) by [Amit Shekhar](https://github.com/amitshekhariitbhu) ([Outcome School](https://outcomeschool.com)).

🌐 **Live GitHub Pages Web Application:**  
**[https://kaisarnajar.github.io/outcome-school-blogs/](https://kaisarnajar.github.io/outcome-school-blogs/)**

---

## 📊 Executive Summary Metrics

| Metric | Value | Details |
| :--- | :--- | :--- |
| **Total Blog Articles** | **157** | Across 17 roadmap steps (excluding videos & interview QA repo) |
| **Total Word Count** | **552,980 words** | Extracted and normalized article prose body |
| **Total Reading Time** | **~46.1 hours (2,765 mins)** | Calculated at standard reading pace of 200 WPM |
| **Average Words / Blog** | **3,522 words** | In-depth technical articles (~18 min average read) |
| **Longest Article** | **8,944 words (~45 mins)** | Deep learning & systems deep dives |
| **Shortest Article** | **456 words (~2 mins)** | Foundational concept introductions |

---

## ⏱️ Distribution by Reading Length

| Reading Category | Reading Time Range | Blog Count | Percentage |
| :--- | :--- | :---: | :---: |
| 🟢 **Quick Read** | ≤ 4 minutes (under 900 words) | **7** | 4.5% |
| 🔵 **Standard Read** | 5 – 8 minutes (900 – 1,700 words) | **6** | 3.8% |
| 🟣 **Deep Dive** | 9 – 15 minutes (1,700 – 3,100 words) | **43** | 27.4% |
| 🟠 **Comprehensive Guide** | 16+ minutes (3,100+ words) | **101** | 64.3% |

---

## 🗺️ Step-by-Step Roadmap Breakdown

| Step | Topic | Articles | Total Words | Est. Time (200 WPM) |
| :---: | :--- | :---: | :---: | :---: |
| **Step 1** | Machine Learning Foundations | 9 | 16,916 | ~85 mins (1.4 hrs) |
| **Step 2** | Deep Learning and Neural Networks | 10 | 25,622 | ~128 mins (2.1 hrs) |
| **Step 3** | Generative AI & Transformer Architecture | 11 | 37,975 | ~190 mins (3.2 hrs) |
| **Step 4** | How LLMs Generate Text | 6 | 21,349 | ~107 mins (1.8 hrs) |
| **Step 5** | Modern LLM Architecture | 6 | 23,088 | ~115 mins (1.9 hrs) |
| **Step 6** | Types of Language Models | 5 | 16,339 | ~82 mins (1.4 hrs) |
| **Step 7** | Training, Fine-Tuning, and Alignment | 11 | 42,429 | ~212 mins (3.5 hrs) |
| **Step 8** | Prompt Engineering & Context Engineering | 6 | 18,349 | ~92 mins (1.5 hrs) |
| **Step 9** | Vector Search & RAG | 15 | 56,128 | ~281 mins (4.7 hrs) |
| **Step 10** | AI Agents and Agentic Systems | 17 | 64,881 | ~324 mins (5.4 hrs) |
| **Step 11** | Agentic Engineering & Agent Frameworks | 8 | 29,915 | ~150 mins (2.5 hrs) |
| **Step 12** | LLM Inference Engineering | 19 | 71,942 | ~360 mins (6.0 hrs) |
| **Step 13** | Evaluation and Observability | 4 | 14,752 | ~74 mins (1.2 hrs) |
| **Step 14** | AI Safety and Security | 3 | 11,834 | ~59 mins (1.0 hr) |
| **Step 15** | Multimodal AI and Generative Models | 6 | 22,781 | ~114 mins (1.9 hrs) |
| **Step 16** | AI Infrastructure & System Design | 8 | 32,842 | ~164 mins (2.7 hrs) |
| **Step 16+**| Supporting Reads for AI System Design | 3 | 10,812 | ~54 mins (0.9 hr) |
| **Step 17** | Frontier Ideas in AI | 3 | 11,387 | ~57 mins (1.0 hr) |
| **Step 18** | Interview Preparation (Repo) | *(GitHub)* | — | — |
| **Total** | **All Analyzed Roadmap Blogs** | **157** | **552,980** | **~46.1 Hours** |

---

## 💻 Features of the Interactive GitHub Page

The repository includes a modern GitHub Pages application (`index.html`):
- 🔍 **Real-Time Instant Search:** Filter any article by keyword, topic, or concept (e.g. `LoRA`, `Transformer`, `RAG`, `Agents`).
- 🏷️ **Step & Category Filtering:** One-click filtering by Roadmap Step and Reading Length (Quick Read to Comprehensive).
- ⏱️ **Interactive Reading Pace Simulator:** Adjust reading speed from 120 WPM to 320 WPM to instantly see personal time estimates.
- 🔬 **Detailed Analysis Modal:** Inspect exact word count, character count, heading count, paragraph count, code snippets count, and excerpt.
- 🌓 **Dark / Light Theme:** Custom modern color scheme with ambient glows and sleek glassmorphism.
- 📥 **Export to CSV / JSON:** Download the complete dataset with one click for offline analysis.

---

## 📁 Repository Structure

```text
├── index.html            # Main GitHub Pages interactive dashboard
├── style.css             # Vanilla CSS design system (Dark/Light mode, glassmorphism)
├── app.js                # Search, filtering, dynamic calculator & modal logic
├── blogs-data.js         # JavaScript dataset (157 analyzed blogs)
├── blogs_analysis.json   # Full raw JSON analysis dataset
├── scrape_and_analyze.py # Automated extraction & word count analyzer script
├── raw_readme.md         # Source roadmap README from upstream
└── README.md             # Repository documentation & statistical breakdown
```

---

## 🛠️ How to Run Locally

You can open `index.html` directly in any web browser without needing a build step:
```bash
# Option 1: Open directly
start index.html

# Option 2: Run lightweight Python server
python -m http.server 8080
# Then visit http://localhost:8080
```

To re-run or update the quantitative analysis:
```bash
python scrape_and_analyze.py
```

---

## 🚀 Upcoming Phases (Roadmap)
- **Phase 2 (Upcoming):** Individual blog deep summaries, key concepts, and terminology extraction.
- **Phase 3:** Visual knowledge graph connecting prerequisites and concepts across steps.

---

### Credits & Attribution
- AI Engineer Roadmap created and maintained by **Amit Shekhar** ([Outcome School](https://outcomeschool.com)).
- Original Roadmap Repository: [amitshekhariitbhu/ai-engineer-roadmap](https://github.com/amitshekhariitbhu/ai-engineer-roadmap).
- Analysis & Explorer created for [kaisarnajar/outcome-school-blogs](https://github.com/kaisarnajar/outcome-school-blogs).
