import { forwardRef, ComponentPropsWithoutRef, ElementRef } from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/utils/shadcnUtils.ts';

export const SheetDescription = forwardRef<
  ElementRef<typeof SheetPrimitive.Description>,
  ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
