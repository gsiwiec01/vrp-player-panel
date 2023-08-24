import { NavLink, NavLinkProps } from 'react-router-dom';
import { cn } from '@/utils/shadcnUtils.ts';
import { buttonVariants } from '@/components/ui/Button.tsx';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export type SidebarNavLikProps = NavLinkProps & {
  icon?: ReactNode;
};

type SidebarNavProps = {
  items: SidebarNavLikProps[];
};

export const MainNav = ({ items }: SidebarNavProps) => {
  return (
    <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2">
      {items.map(({ className, icon, children, ...rest }, index) => (
        <NavLink
          key={`mainnav-link-${index}`}
          className={({ isActive }) =>
            cn(
              buttonVariants({ variant: 'ghost' }),
              className,
              isActive ? 'bg-muted hover:bg-muted' : 'hover:bg-transparent hover:underline',
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
      ))}
    </nav>
  );
};
