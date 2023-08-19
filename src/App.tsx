import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from '@/routes.tsx';
import { AuthProvider } from '@/features/auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={createBrowserRouter(routes)} />
      </AuthProvider>
    </QueryClientProvider>
  );
}
