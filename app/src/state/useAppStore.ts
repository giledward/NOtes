import { create } from 'zustand';

export type NoteSummary = {
  id: string;
  title: string;
};

export type ClipboardEntry = {
  id: string;
  content: string;
};

type AppState = {
  notes: NoteSummary[];
  clipboard: ClipboardEntry[];
  addNote: (title: string) => void;
  addClipboardEntry: (content: string) => void;
};

export const useAppStore = create<AppState>((set) => ({
  notes: [{ id: 'welcome-note', title: 'Welcome to NOtes' }],
  clipboard: [
    {
      id: 'sample-clipboard-entry',
      content: 'Captured snippets will appear here.',
    },
  ],
  addNote: (title) =>
    set((state) => ({
      notes: [...state.notes, { id: crypto.randomUUID(), title }],
    })),
  addClipboardEntry: (content) =>
    set((state) => ({
      clipboard: [...state.clipboard, { id: crypto.randomUUID(), content }],
    })),
}));
