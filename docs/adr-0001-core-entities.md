# ADR 0001: Core entity model for NOtes

## Status
Accepted

## Context
We need a shared, framework-agnostic description of the domain entities (notes, clipboard captures, tags, and snippets) to coordinate server and client work. The model should keep provenance information, support pinning, and clarify how deduplication and tagging operate across entity types.

## Decision
- Define TypeScript interfaces in `core/entities.ts` that describe the four primary entities plus shared metadata for timestamps, source attribution, and deduplication.
- Use ISO 8601 strings for temporal fields (`createdAt`, `updatedAt`, `capturedAt`, `pinnedAt`) to keep serialization simple across clients.
- Model source attribution explicitly (`origin`, `sourceApp`, `sourceId`, `url`) so imports, clipboard captures, and integrations can be traced and reconciled.
- Represent deduplication with a normalized `contentHash` and an optional `canonicalEntityId` pointer to the authoritative record when duplicates are merged.
- Keep `tagIds` on Notes, ClipboardItems, and Snippets to allow many-to-many tagging with standalone `Tag` records.
- Provide `pinned` and `pinnedAt` on Note, ClipboardItem, and Snippet to maintain pin state and sort order without separate tables.

## Consequences
- Frontend and backend implementations can import `core/entities.ts` as the single source of truth for the domain model, reducing drift.
- Provenance fields allow sync/integration code to reconcile external identifiers and trace where content came from.
- Deduplication and pinning rules are discoverable directly on the entities and in code comments, clarifying expected behavior for merging and UI ordering.
