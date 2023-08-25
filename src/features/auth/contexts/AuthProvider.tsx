import { createContext, ReactNode, useMemo, useState } from 'react';
import { login as loginService } from '@/features/auth/services/auth';
import { axios } from '@/services/baseApi.ts';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { LoginPayload } from '@/features/auth/services/auth';
import { DomainException } from '@/constants/types.ts';
import type { LoginResponse } from '@/features/auth/constants/types.ts';

type AuthContextData = {
  login: UseMutationResult<AxiosResponse<LoginResponse>, AxiosError<DomainException>, LoginPayload>;
  logout: () => void;
  accessToken: null | string;
  isAuthorized: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextData | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem('accessToken'),
  );

  const login = useMutation<
    AxiosResponse<LoginResponse>,
    AxiosError<DomainException>,
    LoginPayload
  >({
    mutationFn: loginService,
    onSuccess: ({ data }) => {
      setAccessToken(data.accessToken);

      axios.defaults.headers.common['Authorization'] = data.accessToken;

      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
    },
  });

  const logout = () => {
    setAccessToken(null);

    delete axios.defaults.headers.common['Authorization'];

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  const isAuthorized = useMemo(() => accessToken !== null, [accessToken]);

  return (
    <AuthContext.Provider value={{ login, logout, accessToken, isAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
};
