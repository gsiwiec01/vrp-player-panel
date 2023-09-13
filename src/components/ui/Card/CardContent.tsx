import { forwardRef, HTMLAttributes } from 'react';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={className} {...props} />,
);
CardContent.displayName = 'CardContent';
