import { Navigate, createBrowserRouter } from 'react-router-dom';
import ClipboardPage from './routes/ClipboardPage';
import NotesPage from './routes/NotesPage';
import RootLayout from './routes/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/notes" replace />,
      },
      {
        path: 'notes',
        element: <NotesPage />,
      },
      {
        path: 'clipboard',
        element: <ClipboardPage />,
      },
    ],
  },
]);

export default router;
