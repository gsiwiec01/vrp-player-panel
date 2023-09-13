import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/utils/shadcnUtils.ts';
import { FormItemProvider } from '@/contexts/FormItemProvider.tsx';

export const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <FormItemProvider>
        <div ref={ref} className={cn('space-y-2 grid', className)} {...props} />
      </FormItemProvider>
    );
  },
);

FormItem.displayName = 'FormItem';
