# wiki/AGENTS.md - schema for the LLM-maintained wiki

This file is the operating manual for any LLM agent working inside `wiki/`.
It implements the pattern from karpathy/llm-wiki:
https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f

If you are an LLM and you are reading this: you own this directory. The human
curates raw sources and asks questions. You read sources, write pages, keep
cross-references current, and append the log. Do not write outside `wiki/`
unless explicitly asked.

The top-level repo `AGENTS.md` governs the codebase. This file governs the
wiki. They do not overlap.

## Three Layers

1. Raw sources - `wiki/raw/`. Articles, papers, transcripts, screenshots,
   PDFs, exported chats. Immutable. Never modify, never delete. If a source is
   wrong or superseded, note it in the corresponding wiki page; do not touch
   the raw file.
2. The wiki - `wiki/pages/`, plus `wiki/index.md` and `wiki/log.md`. The LLM
   owns this layer. Create, update, and restructure it as needed.
3. The schema - this file. Co-evolves with the human. If a convention should
   change, propose an edit here.

## Directory Layout

```text
wiki/
  AGENTS.md
  README.md
  index.md
  log.md
  raw/
    README.md
    assets/
  pages/
    entities/
    concepts/
    sources/
    analysis/
```

You may create new top-level subdirectories under `pages/` if a domain needs
them. Update this file and `index.md` when you do.

## Page Conventions

- Filenames: kebab-case, `.md`. Example: `pages/entities/sergei-petrov.md`.
- Title: every page starts with a single `# Title` heading after frontmatter.
- Frontmatter: every page begins with YAML frontmatter:

```yaml
---
type: entity | concept | source | analysis
summary: One-sentence description used by index.md
sources: [raw/2026-05-08-example.md]
updated: 2026-05-08
---
```

- `type` is required and must match the page category.
- `summary` is required and should be one concise sentence.
- `sources` lists raw files this page draws from, using paths starting with
  `raw/`. Empty list `[]` is allowed for synthesis pages.
- `updated` is the ISO date of the last meaningful edit.
- Wikilinks: use Obsidian-style `[[Page Title]]` for cross-references.
- External links and raw-source links should use standard markdown links.
- Cite concrete claims inline with a page wikilink or raw source path.
- If a new source contradicts an existing claim, keep both claims, attribute
  each one, and add a `## Contradictions` section.
- If you reference an important concept or entity that does not have a page,
  create a stub page with frontmatter and a `## Stub` section.

## index.md

`index.md` is the content catalog. Read it first when answering a query.

Keep one section per `pages/` subdirectory. Each entry is a wikilink plus the
page's `summary` field. Keep entries sorted alphabetically within each section.

```markdown
## Entities
- [[Sergei Petrov]] - early backer; ran the 2025 Petersburg meetup

## Concepts
- [[LLM Wiki]] - pattern for LLM-maintained personal knowledge bases

## Sources
- [[2026-05-08 Example Source]] - summary of the source

## Analysis
- [[Q: how do fan wikis differ from RAG?]] - comparison filed 2026-05-08
```

Update `index.md` on every ingest, lint fix, or analysis page creation.

## log.md

Append-only chronological log. Newest entries go at the bottom.

Each entry must start with a heading line of this exact shape:

```text
## [YYYY-MM-DD] ingest | <Source title>
## [YYYY-MM-DD] query | <One-line question>
## [YYYY-MM-DD] lint | <Scope>
## [YYYY-MM-DD] note | <Free-form>
```

Below the heading, write 2-6 bullets: what changed, which pages were touched,
open questions, and links to affected pages or sources.

## Operations

### Ingest

Trigger: the human drops a file into `raw/` and says "ingest this", or pastes
a link.

Steps:

1. Read the raw source completely. If it has images, view them separately.
2. Briefly surface key takeaways, surprises, and conflicts before writing,
   unless the human explicitly asked you to proceed autonomously.
3. Write a source page in `pages/sources/<YYYY-MM-DD>-<slug>.md` with
   frontmatter, a concise summary, key points, and citations.
4. Update or create entity pages for notable named people, products, places,
   and organizations.
5. Update or create concept pages for notable ideas, methods, and themes.
6. Update `index.md`.
7. Append a `log.md` entry.

### Query

Trigger: the human asks a question.

Steps:

1. Read `index.md` to find candidate pages.
2. Read relevant pages and follow wikilinks one or two hops as needed.
3. Consult raw sources only if wiki pages do not answer the question.
4. Synthesize an answer with citations.
5. If the answer is likely to be reused, file it under `pages/analysis/`,
   link it from `index.md`, and append a `query` entry to `log.md`.

### Lint

Trigger: the human says "lint the wiki" or "health check".

Look for and report:

- Contradictions between pages on the same claim.
- Stale claims superseded by newer sources.
- Orphan pages with no inbound links.
- Dead wikilinks.
- Concepts mentioned but lacking a page.
- Missing cross-references.
- Stub pages that need expansion.
- Topics worth investigating.

Report first. Apply fixes only after agreement, then append a `lint` entry.

## Style And Tone

- Terse, factual, neutral.
- Cite sources for every concrete claim. If you cannot cite it, mark it
  `(unsourced)`.
- Schema and tooling-facing fields stay in English. Page content can be in
  Russian or English, matching the source and the human's preference.
- Use ISO dates (`YYYY-MM-DD`) everywhere.
- Avoid filler. Lead with the claim or takeaway.

## Hard Rules

- Never modify `wiki/raw/` except to add new files supplied by the human.
- Never delete a page without explicit instruction.
- Never edit code outside `wiki/` while operating as the wiki agent.
- Never include secrets, API keys, JWTs, OTPs, real user phone numbers, or
  sensitive screenshots in wiki files.

## Co-Evolving This File

When you find a recurring pattern this file does not cover, propose a concrete
edit here. After approval, apply the edit and follow the new convention.
