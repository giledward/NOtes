import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <div className="brand">
            <div className="brand-logo">N</div>
            <span>NOtes</span>
          </div>
          <p className="tagline">Capture notes and clipboard snippets in one workspace.</p>
        </div>
        <nav className="app-nav" aria-label="Primary">
          <NavLink
            to="/notes"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`.trim()
            }
          >
            Notes
          </NavLink>
          <NavLink
            to="/clipboard"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`.trim()
            }
          >
            Clipboard
          </NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
