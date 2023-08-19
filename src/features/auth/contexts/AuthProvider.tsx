import { createContext, ReactNode, useState } from 'react';
import { login as loginService, logout as logoutService } from '@/features/auth/services/auth';
import { axios } from '@/services/baseApi.ts';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { LoginPayload } from '@/features/auth/services/auth';
import { DomainException } from '@/constants/types.ts';
import type { LoginResponse } from '@/features/auth/constants/types.ts';

type AuthContext = {
  login: UseMutationResult<AxiosResponse<LoginResponse>, AxiosError<DomainException>, LoginPayload>;
  logout: () => Promise<void>;
  accessToken: null | string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

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
    return logoutService();
  };

  return (
    <AuthContext.Provider value={{ login, logout, accessToken }}>{children}</AuthContext.Provider>
  );
};
