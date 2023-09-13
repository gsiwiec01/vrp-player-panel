import { forwardRef, ComponentPropsWithoutRef, ElementRef } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Label } from '@/components/ui/Label.tsx';
import { cn } from '@/utils/shadcnUtils.ts';
import { useFormField } from '@/hooks/useFormField.ts';

export const FormLabel = forwardRef<
  ElementRef<typeof LabelPrimitive.Root>,
  ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && 'text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = 'FormLabel';
