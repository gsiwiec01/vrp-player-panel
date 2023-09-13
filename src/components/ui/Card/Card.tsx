import * as React from 'react';

import { cn } from '@/utils/shadcnUtils';

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
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
