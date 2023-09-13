import { forwardRef, ComponentPropsWithoutRef, ElementRef } from 'react';
import { cn } from '@/utils/shadcnUtils.ts';
import { Description } from '@radix-ui/react-dialog';

export const DialogDescription = forwardRef<
  ElementRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
));
DialogDescription.displayName = Description.displayName;
