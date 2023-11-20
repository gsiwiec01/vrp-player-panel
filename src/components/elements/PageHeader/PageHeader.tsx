import { HTMLAttributes } from 'react';
import { cn } from '@/utils/shadcnUtils.ts';

export const PageHeader = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <section {...props} className={cn('flex flex-col', className)}>
      {children}
    </section>
  );
};
