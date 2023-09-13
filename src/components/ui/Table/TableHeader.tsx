import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/utils/shadcnUtils.ts';

const TableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
  ),
);
TableHeader.displayName = 'TableHeader';
export { TableHeader };
