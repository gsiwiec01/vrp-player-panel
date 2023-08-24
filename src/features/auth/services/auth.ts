import { axios } from '@/services/baseApi.ts';
import { getBrowserHash } from '@/services/browserHash.ts';
import { LoginResponse } from '@/features/auth/constants/types.ts';

export type LoginPayload = {
  username: string;
  password: string;
  mfaCode: string | null;
  rememberThisBrowser: boolean;
};

export function login(data: LoginPayload) {
  return axios.post<LoginResponse>('/user/account/login', {
    ...data,
    earlyAuth: false,
    browserHash: getBrowserHash(),
  });
}

export function logout() {
  return Promise.resolve();
}
