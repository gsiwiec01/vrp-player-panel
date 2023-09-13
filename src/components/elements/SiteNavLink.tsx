import { NavLink, NavLinkProps } from 'react-router-dom';
import { cn } from '@/utils/shadcnUtils.ts';
import { buttonVariants } from '@/components/ui/Button.tsx';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export type SiteNavLinkProps = NavLinkProps & {
  icon?: ReactNode;
};

export const SiteNavLink = ({ className, icon, children, ...rest }: SiteNavLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          buttonVariants({ variant: 'ghost' }),
          className,
          isActive ? 'bg-muted hover:bg-muted' : 'hover:bg-card',
          'justify-start',
        )
      }
      {...rest}
    >
      {() => (
        <>
          {icon && <Slot className="h-4 w-4 mr-4">{icon}</Slot>}

          {children}
        </>
      )}
    </NavLink>
  );
};
