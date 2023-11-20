import { HTMLAttributes } from 'react';
import { cn } from '@/utils/shadcnUtils.ts';
import Balancer from 'react-wrap-balancer';

export const PageHeaderDescription = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <Balancer {...props} className={cn('text-muted-foreground', className)}>
      {children}
    </Balancer>
  );
};
