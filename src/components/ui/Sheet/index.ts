import { Root, Trigger, Close } from '@radix-ui/react-dialog';

import { SheetContent } from '@/components/ui/Sheet/SheetContent.tsx';
import { SheetDescription } from '@/components/ui/Sheet/SheetDescription.tsx';
import { SheetFooter } from '@/components/ui/Sheet/SheetFooter.tsx';
import { SheetHeader } from '@/components/ui/Sheet/SheetHeader.tsx';
import { SheetOverlay } from '@/components/ui/Sheet/SheetOverlay.tsx';
import { SheetPortal } from '@/components/ui/Sheet/SheetPortal.tsx';
import { SheetTitle } from '@/components/ui/Sheet/SheetTitle.tsx';

const Sheet = Root;
const SheetTrigger = Trigger;
const SheetClose = Close;

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetDescription,
  SheetContent,
  SheetFooter,
  SheetPortal,
  SheetOverlay,
  SheetTitle,
  SheetHeader,
};
