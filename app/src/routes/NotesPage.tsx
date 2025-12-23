import { FormEvent, useState } from 'react';
import { useAppStore } from '../state/useAppStore';

const NotesPage = () => {
  const notes = useAppStore((state) => state.notes);
  const addNote = useAppStore((state) => state.addNote);
  const [title, setTitle] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim()) return;
    addNote(title.trim());
    setTitle('');
  };

  return (
    <section className="panel" aria-labelledby="notes-heading">
      <div>
        <h2 id="notes-heading">Notes</h2>
        <p className="section-description">
          A quick space to draft ideas, todos, or research snippets. Rich editing will come later.
        </p>
      </div>

      <div className="list-grid" role="list">
        {notes.map((note) => (
          <article className="card" key={note.id} role="listitem">
            <h3 className="card-title">{note.title}</h3>
            <p className="card-meta">Metadata and tags will appear here.</p>
          </article>
        ))}
      </div>

      <form onSubmit={onSubmit} style={{ marginTop: '1rem' }}>
        <label htmlFor="note-title">Add a note title</label>
        <input
          id="note-title"
          className="inline-input"
          placeholder="e.g., Draft onboarding checklist"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <p className="helper-text">This creates a placeholder card to refine later.</p>
      </form>
    </section>
  );
};

export default NotesPage;
