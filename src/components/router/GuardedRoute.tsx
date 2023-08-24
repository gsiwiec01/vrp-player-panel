import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/features/auth';

type GuardedRouteProps = {
  render: ReactNode;
};

export const GuardedRoute = ({ render }: GuardedRouteProps) => {
  const { isAuthorized } = useAuth();

  return isAuthorized ? <>{render}</> : <Navigate to="/login" replace={true} />;
};
