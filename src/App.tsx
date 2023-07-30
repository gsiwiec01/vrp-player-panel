import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from '@/routes.tsx';

export function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}
