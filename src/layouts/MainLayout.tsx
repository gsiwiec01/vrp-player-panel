import { Outlet } from 'react-router-dom';
import { SiteNavLinkProps } from '@/components/elements/SiteNavLink.tsx';
import { Button } from '@/components/ui/Button.tsx';
import {
  Home,
  User2,
  Users2,
  Flag,
  History,
  Image,
  SprayCan,
  Presentation,
  ShoppingBasket,
  Map,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';
import { useState } from 'react';
import { SiteSider } from '@/components/elements/SiteSider.tsx';
import { Separator } from '@/components/ui/Separator.tsx';

const items: SiteNavLinkProps[] = [
  {
    to: '/',
    children: <>Dashboard</>,
    icon: <Home />,
  },
  {
    to: '/characters',
    children: <>Postacie</>,
    icon: <User2 />,
  },
  {
    to: '/groups',
    children: <>Grupy</>,
    icon: <Users2 />,
  },
  {
    to: '/groups',
    children: <>Zgłoszenia</>,
    icon: <Flag />,
  },
  {
    to: '/groups',
    children: <>Historia logowań i czatu</>,
    icon: <History />,
  },
  {
    to: '/groups',
    children: <>Galeria zdjęć</>,
    icon: <Image />,
  },
  {
    to: '/groups',
    children: <>Zarządzanie billboardami</>,
    icon: <Presentation />,
  },
  {
    to: '/groups',
    children: <>Zarządzanie graffiti</>,
    icon: <SprayCan />,
  },
  {
    to: '/groups',
    children: <>Sklep premium </>,
    icon: <ShoppingBasket />,
  },
];

export const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col lg:flex-row">
      <nav className="hidden lg:flex flex-col sticky top-0 lg:w-1/5 lg:min-w-[350px] border-r h-screen p-10 space-y-4">
        <SiteSider menuItemList={items} />
      </nav>

      <div className="lg:hidden">
        <nav className="flex justify-between items-center mx-10">
          <img src="/vrp-logo.webp" className="h-16" alt="logo v-rp.pl" />

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" onClick={() => setIsMenuOpen((x) => !x)}>
                <Map />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex flex-col space-y-6 w-full sm:w-1/5 sm:min-w-[400px]"
            >
              <SiteSider menuItemList={items} />
            </SheetContent>
          </Sheet>
        </nav>

        <Separator />
      </div>

      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
};
