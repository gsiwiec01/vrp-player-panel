import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@/utils/shadcnUtils';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col rounded-xl border bg-card text-card-foreground shadow p-6 space-y-6',
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = 'Card';
