import React from 'react';
import { cn } from '@/utils/shadcnUtils.ts';

export const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
);

DialogHeader.displayName = 'DialogHeader';
