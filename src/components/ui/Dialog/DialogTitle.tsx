import React from 'react';
import { cn } from '@/utils/shadcnUtils.ts';
import { Title } from '@radix-ui/react-dialog';

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof Title>,
  React.ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
DialogTitle.displayName = Title.displayName;
