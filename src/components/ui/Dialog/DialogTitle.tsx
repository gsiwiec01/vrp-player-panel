import { forwardRef, ComponentPropsWithoutRef, ElementRef } from 'react';
import { cn } from '@/utils/shadcnUtils.ts';
import { Title } from '@radix-ui/react-dialog';

export const DialogTitle = forwardRef<
  ElementRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
DialogTitle.displayName = Title.displayName;
