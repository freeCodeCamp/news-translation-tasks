# freeCodeCamp News Translation Tasks

A collaborative localization repository for translating and post-editing freeCodeCamp news articles into multiple languages. Contributors work through GitHub Issues and automated workflows to produce high-quality translated articles ready for publication.

---

## Table of Contents

- [Overview](#overview)
- [Supported Languages](#supported-languages)
- [How to Contribute](#how-to-contribute)
  - [(A) Traditional Translation](#a-traditional-translation)
  - [(B) Post-Editing (AI-assisted)](#b-post-editing-ai-assisted)
- [Repository Structure](#repository-structure)
- [Automation Architecture](#automation-architecture)
  - [Workflows](#workflows)
  - [Slash Commands](#slash-commands)
  - [Scripts](#scripts)
- [Developer Guide](#developer-guide)
  - [Secrets & Tokens Required](#secrets--tokens-required)
  - [Known Issues & Pain Points](#known-issues--pain-points)
  - [Pending Tasks & Roadmap](#pending-tasks--roadmap)
- [Tips for Contributors](#tips-for-contributors)

---

## Overview

This repository manages the end-to-end localization workflow for freeCodeCamp news articles:

1. English articles are fetched from the freeCodeCamp website and saved as Markdown in `articles/_raw/`.
2. Articles are auto-translated via the OpenAI API and saved on the `auto-translate` branch under `articles/{lang}/`.
3. Human contributors claim articles, post-edit AI translations (or translate from scratch), and submit PRs targeting `main`.
4. Language leads review and merge, then publish to the freeCodeCamp publication platform.

**Sign up to contribute:** [Contributor Sign-Up Form](https://forms.gle/1w8umSbTF4JTPwyj9)

---

## Supported Languages

| Code | Language   | Language Lead         |
|------|------------|-----------------------|
| `zh` | Chinese    | @miyaliu666            |
| `es` | Spanish    | @RafaelDavisH          |
| `pt` | Portuguese | @DanielRosa74          |
| `it` | Italian    | @Dario-DC              |
| `ja` | Japanese   | @sidemt                |
| `ko` | Korean     | @scissorsneedfoodtoo   |
| `uk` | Ukrainian  | @anastasiiauk          |

---

## How to Contribute

### (A) Traditional Translation

1. Browse the GitHub Project board for your language and pick an available issue.
2. Comment `/translate` on the issue — this assigns it to you and moves the card to **In Translation**.
3. Translate the article and commit it to the `auto-translate` branch under `articles/{lang}/`.
4. When finished, comment `/review` — this notifies the language lead and moves the card to **In Review**.

### (B) Post-Editing (AI-assisted)

1. Browse the GitHub Project board for your language and pick an available issue.
2. Comment `/postedit` on the issue — this assigns it to you and moves the card to **In Postediting**.
3. Open the file via the link in the issue comment (direct link to `github.dev` on the `auto-translate` branch).
4. In the `posteditor` front-matter field, enter your Ghost username.
5. Review and fix the AI translation: mistranslations, missing content, awkward phrasing, backtick wrapping errors, untranslated segments.
6. Commit your changes and open a PR from your fork/branch **targeting `main`** (not `auto-translate`).
7. Comment `/review` on the issue to notify the language lead.

> PRs that target any branch other than `main` are automatically closed with instructions to retarget.

---

## Repository Structure

```
news-translation-tasks/
├── .github/
│   └── workflows/
│       ├── ArticlesAutoTranslate.yml   # Auto-fetch + AI-translate on "auto" label
│       ├── slash-command-action.yml    # Handles /postedit, /translate, /review
│       └── close-non-main-prs.yml     # Auto-closes PRs not targeting main
├── articles/
│   ├── _raw/        # Original English Markdown files (source of truth)
│   ├── zh/          # Chinese translations
│   ├── es/          # Spanish translations
│   ├── pt/          # Portuguese translations
│   ├── it/          # Italian translations
│   ├── ja/          # Japanese translations
│   └── uk/          # Ukrainian translations
├── scripts/
│   ├── validateCommand.js   # Parses and validates slash commands
│   ├── getProjectCard.js    # Fetches GitHub Projects v2 card via GraphQL
│   ├── assignPosteditor.js  # Assigns issue to the commenter
│   └── assignReviewer.js    # Assigns issue to the language lead
└── images/                  # Screenshots used in this README
```

---

## Automation Architecture

### Workflows

#### `ArticlesAutoTranslate.yml`
Triggered when the `auto` label is added to an issue.

**Flow:**
1. **Validate** — extracts language code from issue title (e.g. `[zh] Article Title`), verifies the issue body contains an article URL.
2. **Fetch** — calls `freecodecamp/article-webpage-to-markdown-action` to convert the article webpage to Markdown; saves the raw file to `articles/_raw/` on `main`.
3. **Translate** — switches to the `auto-translate` branch, calls `freeCodeCamp/articles-auto-translate-action` (OpenAI API) to produce the translated file under `articles/{lang}/`.
4. **Commit & Push** — commits both the raw and translated files with retry/rebase logic.
5. **Comment** — posts a success or failure comment on the issue with links to the translated file.

Concurrency is grouped by language code so different languages run in parallel but same-language jobs queue.

#### `slash-command-action.yml`
Triggered on new issue comments that start with `/`.

**Supported commands:**

| Command      | Effect                                           |
|--------------|--------------------------------------------------|
| `/postedit`  | Assigns issue to commenter → moves to **In Postediting** |
| `/post-edit` | Alias for `/postedit`                            |
| `/translate` | Assigns issue to commenter → moves to **In Translation** |
| `/review`    | Assigns issue to the language lead → moves to **In Review** |

**Flow:**
1. `validateCommand.js` — validates command and outputs `valid_command`, `command`, `target_status`.
2. `getProjectCard.js` — fetches the project card ID and URL via GitHub GraphQL API (requires `MOVE_CARDS_TOKEN`).
3. `assignPosteditor.js` or `assignReviewer.js` — assigns the issue.
4. `titoportas/update-project-fields` — updates the project card status.

#### `close-non-main-prs.yml`
Triggered on any PR that targets a branch other than `main`. Automatically closes the PR and posts a comment instructing the contributor to retarget to `main`.

---

### Slash Commands

| Command      | Valid From | Target Status    |
|--------------|------------|------------------|
| `/postedit`  | Anyone     | In Postediting   |
| `/post-edit` | Anyone     | In Postediting   |
| `/translate` | Anyone     | In Translation   |
| `/review`    | Assignee   | In Review        |

> `/review` verifies the commenter is the current assignee before handing off to the language lead.

---

### Scripts

| File                   | Purpose                                                       |
|------------------------|---------------------------------------------------------------|
| `validateCommand.js`   | Parses comment text, maps commands to statuses, sets outputs  |
| `getProjectCard.js`    | GraphQL query to find the Projects v2 card for the issue      |
| `assignPosteditor.js`  | Adds commenter as assignee; rejects if already assigned       |
| `assignReviewer.js`    | Adds language lead as assignee; verifies commenter is assignee |

---

## Developer Guide

### Secrets & Tokens Required

| Secret             | Used By                          | Scope Required                          |
|--------------------|----------------------------------|-----------------------------------------|
| `GITHUB_TOKEN`     | All workflows (auto-provisioned) | `issues: write`, `contents: write`, `pull-requests: write` |
| `MOVE_CARDS_TOKEN` | `slash-command-action.yml`       | PAT with `project` scope (Projects v2)  |
| `OPENAI_API_KEY`   | `ArticlesAutoTranslate.yml`      | OpenAI API key for translation          |

> `MOVE_CARDS_TOKEN` must be a classic or fine-grained PAT — the built-in `GITHUB_TOKEN` cannot manage Projects v2 items.

---

### Known Issues & Pain Points

1. **`auto-translate` branch divergence** — The `auto-translate` branch is long-lived and shared across all languages. Concurrent runs for the same language are serialized via `softprops/turnstyle` and concurrency groups, but merge conflicts can still accumulate over time as the branch diverges from `main`. Periodic rebases or branch resets may be needed.

2. **Revert history** — The `articles-auto-translate-action` has been reverted and re-applied (`d77685d` / `e264dc4`). The action at `freeCodeCamp/articles-auto-translate-action@main` is the canonical one; changes to that action's interface will break the translate step silently unless the `with_task_translate_to_save_path` placeholder (`{lang}`) convention is respected.

3. **`/review` does not remove previous assignee** — When `/review` is used, the language lead is *added* as an assignee but the posteditor is not removed. This can make it unclear who is currently responsible for the issue.

4. **Language lead list is hardcoded** — `assignReviewer.js` contains a hardcoded map of language-to-lead usernames. Adding a new language or changing a lead requires a code change and a deploy.

5. **No Korean (`ko`) articles directory** — The `LANG_MAP` in `ArticlesAutoTranslate.yml` includes `ko`, but the `articles/ko/` directory does not exist in the repo. First auto-translate run for Korean will create it, but `mkdir -p` in the workflow handles this gracefully.

6. **`softprops/turnstyle` timeout** — There is no explicit timeout on the turnstyle action. If a workflow run hangs, subsequent same-language runs will queue indefinitely and must be cancelled manually.

---

### Pending Tasks & Roadmap

- [ ] **Remove `/translate` command deprecation** — The README and workflow still support `/translate` for backwards compatibility. Once all existing issues are resolved, this alias should be removed to reduce confusion (`slash-command-action.yml` line 73).
- [ ] **Add `/unassign` command** — Contributors sometimes claim articles and go inactive. A `/unassign` command would let them release the issue or allow leads to do so.
- [ ] **Dynamic language lead configuration** — Move the language lead map from `assignReviewer.js` into a config file (e.g., `config/language-leads.json`) so leads can be updated without touching script logic.
- [ ] **Workflow observability** — Add a summary step to `ArticlesAutoTranslate.yml` that posts a structured job summary (GitHub Actions `$GITHUB_STEP_SUMMARY`) so run results are visible without opening individual log lines.
- [ ] **Auto-translate action pinning** — The workflow pins `freeCodeCamp/articles-auto-translate-action@main`, which means any breaking change to that action will break this workflow without notice. Pin to a specific tag or SHA once the action is stable.
- [ ] **Post-edit quality gate** — No automated check verifies that a post-edited file actually differs meaningfully from the raw AI translation before a PR is merged. A diff-based lint or word-count heuristic could help flag unedited submissions.

---

## Tips for Contributors

### Tables of Contents in non-Latin scripts

When translating into languages with non-Latin scripts (Chinese, Japanese, Korean, Ukrainian, etc.), heading anchors must be set manually:

```md
## Table of Contents

- [什么是记忆化](#what-is-memoization)
    - [什么时候使用记忆化](#when-to-memoize)

<h2 id="what-is-memoization">什么是记忆化</h2>
<h3 id="when-to-memoize">什么时候使用记忆化</h3>
```

### Image captions

```md
<figure class="kg-card kg-card-image kg-card-hascaption">
    <img src="https://www.freecodecamp.org/news/content/images/..." alt="Alt text" class="kg-image">
    <figcaption>Caption in target language</figcaption>
</figure>
```

### Finding the original article

The original English Markdown is always available in `articles/_raw/` under the same filename as the translated file. Do not edit files in `_raw/`.
