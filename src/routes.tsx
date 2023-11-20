import { RouteObject } from 'react-router-dom';

import { GuardedRoute } from '@/components/router/GuardedRoute.tsx';
import { MainLayout } from '@/layouts/MainLayout.tsx';
import { SideLayout } from '@/layouts/SideLayout.tsx';

import { LoginPage } from '@/pages/LoginPage.tsx';
import { Error404 } from '@/pages/Error404.tsx';
import { CharacterListPage } from '@/pages/Characters/CharacterListPage.tsx';
import { CharacterCreationPage } from '@/pages/Characters/CharacterCreationPage.tsx';

export const routes: RouteObject[] = [
  {
    element: <GuardedRoute render={<MainLayout />} />,
    children: [
      {
        path: '/',
        element: <>Work</>,
      },
      {
        path: '/characters',
        element: <CharacterListPage />,
      },
      {
        path: '/characters/:slag',
        element: <>work</>,
      },
      {
        path: '/characters/new',
        element: <CharacterCreationPage />,
      },
    ],
  },
  {
    element: <SideLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
];
