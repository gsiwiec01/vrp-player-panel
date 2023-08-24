import { RouteObject } from 'react-router-dom';
import { Login } from '@/pages/Login.tsx';
import { MainLayout } from '@/layouts/MainLayout.tsx';
import { GuardedRoute } from '@/components/router/GuardedRoute.tsx';
import { SideLayout } from '@/layouts/SideLayout.tsx';
import { Error404 } from '@/pages/Error404.tsx';

export const routes: RouteObject[] = [
  {
    element: <GuardedRoute render={<MainLayout />} />,
    children: [
      {
        path: '/',
        element: <>Work</>,
      },
    ],
  },
  {
    element: <SideLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
];
