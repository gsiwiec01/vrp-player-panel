import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/features/auth';

type GuardedRouteProps = {
  render: ReactNode;
};

export const GuardedRoute = ({ render }: GuardedRouteProps) => {
  const { isAuthorized } = useAuth();
  const { pathname, state } = useLocation();

  return isAuthorized ? (
    <>{render}</>
  ) : (
    <Navigate to="/login" state={{ pathname, state }} replace={true} />
  );
};
