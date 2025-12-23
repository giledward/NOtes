# NOtes

NOtes is a lightweight personal knowledge tool that combines fast note‑taking with a frictionless clipboard and general‑purpose tracking utilities. The goal is to give you a single, friendly workspace to capture thoughts, reuse snippets, and stay organized without juggling multiple apps.

## Vision

- **Unified capture:** Write notes, paste clippings, and stash quick thoughts in one place.
- **Clipboard superpowers:** Keep a history of copied items, organize them, and quickly re‑insert them into documents.
- **Task & reminder helpers:** Track todos alongside notes so action items stay visible.
- **Searchable vault:** Quickly find anything you’ve captured with tagging and filters.
- **Offline‑first:** Keep data available locally with optional sync later.

## Planned feature set

- Rich note editing (markdown with checkboxes, code fences, and inline formatting).
- Clipboard history with pinning, deduplication, and quick search.
- Saved “snippets” for commonly reused text or commands.
- Per‑note metadata: tags, reminders, timestamps, and source attribution.
- Fast global search with filters for tags, dates, and content type.
- Cross‑platform desktop app feel (keyboard shortcuts, theming).

## Project structure (planned)

This repository will grow into a small desktop/web hybrid app. Tentative layout:

- `app/` – frontend UI (likely React or Svelte with a component library).
- `core/` – shared domain logic (notes, clipboard items, search indexing).
- `server/` – sync API and persistence adapters (e.g., SQLite/local files, later remote sync).
- `docs/` – design notes, UX flows, and architecture decisions.

## Getting started (current state)

The codebase is at the planning stage. To contribute:

1. Clone the repo and create a feature branch.
2. Open issues or design notes in `docs/` to propose features or flows.
3. Add implementation inside the planned folders as they’re created.

As the app emerges, this section will include concrete setup steps, scripts, and dependency installation commands.

## Roadmap

- [ ] Decide on the initial UI stack and state management approach.
- [ ] Define the data model for notes, clipboard entries, and tags.
- [ ] Implement local persistence (SQLite or file‑based) with migration support.
- [ ] Build a minimal UI: note list, note editor, clipboard history panel.
- [ ] Add search and filtering.
- [ ] Ship keyboard shortcuts and theming.
- [ ] Document sync options and backup strategy.

## Contributing

- Propose changes via issues or discussions.
- Keep changes small and focused; prefer clear commit messages.
- Update docs and tests as features are added.

## License

MIT (to be finalized alongside the first implementation).
