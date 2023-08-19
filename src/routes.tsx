import { RouteObject } from 'react-router-dom';
import { Login } from '@/pages/Login.tsx';

export const routes: RouteObject[] = [
  {
    path: '',
    element: <>Work</>,
  },
  {
    path: '/login',
    element: <Login />,
  },
];
