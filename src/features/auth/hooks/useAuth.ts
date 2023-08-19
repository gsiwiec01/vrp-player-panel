import { useContext } from 'react';
import { AuthContext } from '@/features/auth/contexts/AuthProvider.tsx';

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (ctx === null) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return ctx;
}
