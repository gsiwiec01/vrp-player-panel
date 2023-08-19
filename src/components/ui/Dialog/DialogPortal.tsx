import { DialogPortalProps, Portal } from '@radix-ui/react-dialog';
import { cn } from '@/utils/shadcnUtils.ts';

export const DialogPortal = ({ className, ...props }: DialogPortalProps) => (
  <Portal className={cn(className)} {...props} />
);

DialogPortal.displayName = Portal.displayName;
