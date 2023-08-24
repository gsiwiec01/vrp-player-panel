import { RouteObject } from 'react-router-dom';
import { Login } from '@/pages/Login.tsx';
import { MainLayout } from '@/layouts/MainLayout.tsx';
import { GuardedRoute } from '@/components/router/GuardedRoute.tsx';

export const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    element: <GuardedRoute render={<MainLayout />} />,
    children: [
      {
        path: '/',
        element: <>Work</>,
      },
    ],
  },
];
