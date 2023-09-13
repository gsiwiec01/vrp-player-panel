import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/utils/shadcnUtils.ts';

export const SheetPortal = ({ className, ...props }: SheetPrimitive.DialogPortalProps) => (
  <SheetPrimitive.Portal className={cn(className)} {...props} />
);
