import { HTMLAttributes } from 'react';
import { cn } from '@/utils/shadcnUtils.ts';

export const PageHeaderHeading = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 {...props} className={cn('text-2xl font-bold tracking-tight', className)}>
      {children}
    </h2>
  );
};
