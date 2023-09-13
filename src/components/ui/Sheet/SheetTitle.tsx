import { forwardRef, ComponentPropsWithoutRef, ElementRef } from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/utils/shadcnUtils.ts';

export const SheetTitle = forwardRef<
  ElementRef<typeof SheetPrimitive.Title>,
  ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
