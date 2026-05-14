# wiki/raw/

Immutable source documents. The LLM agent may add new files supplied by the
human, but must not modify or delete existing raw files.

## What Goes Here

- Articles, blog posts, and papers.
- Meeting transcripts, podcast transcripts, and interview notes.
- Exported chats, email threads, and customer calls.
- Screenshots and other reference images under `assets/`.
- Any document you want the LLM to read and integrate into the wiki.

## What Does Not Go Here

- LLM-generated summaries or analysis. Those belong in `wiki/pages/`.
- Files you intend to keep editing. If a source changes, add a new version.
- Secrets, API keys, JWTs, OTPs, real user phone numbers, or sensitive
  screenshots.

## Naming

Use ISO date prefix plus kebab-case slug:

```text
2026-05-08-karpathy-llm-wiki.md
2026-05-08-karpathy-llm-wiki.pdf
2026-05-08-interview-transcript.md
```

Use the date you added the source unless the project establishes a different
convention.

## Assets

`assets/` holds images and binary attachments referenced from raw markdown
files.
