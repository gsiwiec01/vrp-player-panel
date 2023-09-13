import { HTMLAttributes } from 'react';
import { cn } from '@/utils/shadcnUtils.ts';

export const SheetHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
);
