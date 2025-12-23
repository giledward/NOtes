import { FormEvent, useState } from 'react';
import { useAppStore } from '../state/useAppStore';

const ClipboardPage = () => {
  const clipboard = useAppStore((state) => state.clipboard);
  const addClipboardEntry = useAppStore((state) => state.addClipboardEntry);
  const [content, setContent] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!content.trim()) return;
    addClipboardEntry(content.trim());
    setContent('');
  };

  return (
    <section className="panel" aria-labelledby="clipboard-heading">
      <div>
        <h2 id="clipboard-heading">Clipboard</h2>
        <p className="section-description">
          Keep a history of copied items and snippets. Quick paste shortcuts and search will land next.
        </p>
      </div>

      <div className="list-grid" role="list">
        {clipboard.map((entry) => (
          <article className="card" key={entry.id} role="listitem">
            <h3 className="card-title">Snippet</h3>
            <p className="card-meta">{entry.content}</p>
          </article>
        ))}
      </div>

      <form onSubmit={onSubmit} style={{ marginTop: '1rem' }}>
        <label htmlFor="clipboard-entry">Add a clipboard item</label>
        <textarea
          id="clipboard-entry"
          className="inline-input"
          placeholder="Drop a snippet to keep handy"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          rows={3}
        />
        <p className="helper-text">Pin and search are on the roadmap.</p>
      </form>
    </section>
  );
};

export default ClipboardPage;
