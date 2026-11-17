# Blog study notes — style guide

You are writing study notes for blogs from Amit Shekhar's AI Engineer Roadmap (Outcome School).
Repo root: /Users/kaisarahmadnajar/Desktop/Workspace/outcome-school-blogs

The reader revises from these notes INSTEAD of re-reading the blog, so notes must be **short but complete**:
compress the wording hard, but **do not drop any important idea, step, formula, comparison, example, number, trade-off, or caveat**.
"Short" means dense, not lossy.

Before writing, read 1–2 existing notes in the same step folder as your OUT path (e.g. `ls` the folder and open one) to match the house style exactly.

## Inputs
Each line of your batch file (made by `scripts/extract_blog_text.py`) is:
`ID | Title | URL | read time | SRC=<extracted blog text> | OUT=<repo-relative output path>`

- SRC is the full blog text (headings, paragraphs, lists, code, tables, `[image: alt]` placeholders). Do not fetch the web.
- **Read the ENTIRE SRC file** — check `wc -l` first and read in chunks with offset/limit until you've seen the last line.
- Ignore promotional boilerplate (author bio, "Join Outcome School", "Planning your move into AI?" role lists, program ads, interview-prep links, sign-offs).

## Method (per blog)
1. Read SRC fully; list every H2/H3 section.
2. Every substantive section must map to something in the note (bullet, table row, step, diagram node). FAQ sections → keep non-trivial Q&As as a compact Q → A list.
3. Write the note, then re-check against the section list.

## Output
One Markdown file per blog at `<repo root>/<OUT>` (exact path). Rendered on GitHub AND a React site (GFM tables, KaTeX, Mermaid, fenced code).

```markdown
# <Title>

> **<Step name from SRC "Step:" line>** · ⏱️ <N> min read · [Read original](<URL>)

## TL;DR
2–4 sentences: what it is, how it works in one breath, why it matters.

## Key Concepts
- **Term** — crisp definition.

## How It Works
Mirror the blog's structure with `###` sub-sections. Numbered steps for processes, bullets for properties,
tables for comparisons, worked examples with the blog's real numbers, short code only when central.

## Diagram(s)
At least one Mermaid diagram (2–3 for long blogs), each under a `###` heading saying what it shows.
Diagrams may instead sit inline in "How It Works" (then omit this section).

## Trade-offs & Pitfalls
(if the blog discusses limitations / when-to-use / failure modes)

## Key Takeaways
- 4–8 interview-ready one-liners.
```

## Length
Roughly 20–25% of the blog's word count (excluding diagrams/code): ~1,600-word blog → 350–450 words; ~3,500-word blog → 700–900 words.

## Math (KaTeX)
- Inline: `$...$`.
- Display formulas: `$$` on its own line, the formula on the next line(s), `$$` on its own line, with a BLANK LINE before and after the block. Never put `$$...$$` on the same line as text or directly under a text line.
- Write currency as "USD 5", never with `$`.

## Mermaid rules (must parse on Mermaid v11 AND v12)
- Allowed: `flowchart TD|LR`, `sequenceDiagram`, `stateDiagram-v2`, `mindmap`, `timeline`.
- ALWAYS quote node labels: `A["Tokenizer (BPE)"] --> B["Embeddings"]`, decisions `C{"Is cached?"}`.
- Line breaks only via `<br/>` inside quoted labels. No markdown, backticks, `;` or unescaped `"` inside labels.
- Never use bare `end`, `graph`, `style`, `class` as node ids. Edge labels quoted: `A -->|"yes"| B`.
- mindmap: exactly ONE root; every other node indented under it.
- sequenceDiagram: message text after the first `:` must not contain `;` or `#`.
- ≤ ~18 nodes per diagram.

## Faithfulness & formatting
- Only what the blog supports; paraphrase. No emojis except ⏱️ in the header. No HTML except `<br/>` in Mermaid labels.

## When done
Reply ONLY: files written, and IDs where you were unsure (and why).
