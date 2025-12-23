/**
 * Core domain entities shared across the app. These types are framework-agnostic
 * and meant to be imported by both server and client code.
 */
export type EntityId = string;

export type EntityKind = 'note' | 'clipboardItem' | 'snippet' | 'tag';

export interface Timestamped {
  /** ISO 8601 timestamp for creation. */
  createdAt: string;
  /** ISO 8601 timestamp for last mutation. */
  updatedAt: string;
}

export interface SourceAttribution {
  /** Where the entity originated from. */
  origin: 'manual' | 'clipboard' | 'import' | 'integration';
  /** Optional integration or upstream identifier (e.g., app name, plugin id). */
  sourceApp?: string;
  /** Upstream identifier for correlating entities across syncs. */
  sourceId?: string;
  /** Optional URL or file reference to the source material. */
  url?: string;
  /** When the source content was captured (may differ from createdAt). */
  capturedAt?: string;
}

export interface Deduplication {
  /** Stable hash derived from normalized content for deduplication. */
  contentHash: string;
  /** Entity id that this record was deduplicated against, if any. */
  canonicalEntityId?: EntityId;
}

export interface Tag extends Timestamped {
  id: EntityId;
  name: string;
  description?: string;
  /** Hex color for quick visual grouping. */
  color?: string;
  source: SourceAttribution;
}

export interface Note extends Timestamped {
  id: EntityId;
  title: string;
  /** Markdown/plaintext body. */
  body: string;
  tagIds: EntityId[];
  snippetIds: EntityId[];
  pinned: boolean;
  /** When the note was pinned; undefined if not pinned. */
  pinnedAt?: string;
  source: SourceAttribution;
  deduplication: Deduplication;
}

export interface ClipboardItem extends Timestamped {
  id: EntityId;
  /** Text form of the clipboard capture. */
  plainText?: string;
  /** Rich HTML representation when available. */
  htmlText?: string;
  /** MIME type for the capture payload. */
  mimeType?: string;
  tagIds: EntityId[];
  pinned: boolean;
  pinnedAt?: string;
  source: SourceAttribution;
  deduplication: Deduplication;
}

export interface Snippet extends Timestamped {
  id: EntityId;
  /** Display name for quick insertion. */
  label: string;
  /** The snippet content (markdown/plaintext). */
  body: string;
  /**
   * References to the entity the snippet was extracted from. Only one of
   * these will typically be set.
   */
  fromNoteId?: EntityId;
  fromClipboardItemId?: EntityId;
  tagIds: EntityId[];
  pinned: boolean;
  pinnedAt?: string;
  source: SourceAttribution;
  deduplication: Deduplication;
}

/**
 * Relationships & rules:
 * - Tags: any Note, ClipboardItem, or Snippet can reference multiple tags via tagIds.
 *   Tags themselves are standalone for reuse across entities.
 * - Pinned items: Note, ClipboardItem, and Snippet expose pinned + pinnedAt; only set
 *   when pinnedAt is defined to preserve ordering and auditing of pin events.
 * - Deduplication: Notes/ClipboardItems/Snippets carry a contentHash computed on
 *   normalized content (trimmed, lowercased when appropriate, HTML stripped). If two
 *   entities share a hash, canonicalEntityId tracks which record is kept as the
 *   authoritative copy during merge/sync.
 */
