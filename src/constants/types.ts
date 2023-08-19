import { DomainExceptionCode } from '@/constants/domainExceptionCode.ts';

export type DomainException = {
  description: string;
  domainExceptionCode: DomainExceptionCode;
};
