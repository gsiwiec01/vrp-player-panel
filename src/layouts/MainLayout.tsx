import { Outlet } from 'react-router-dom';
import { MainNav, SidebarNavLikProps } from '@/components/elements/MainNav.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button.tsx';
import {
  LogOut,
  Home,
  User2,
  Users2,
  Flag,
  History,
  Image,
  SprayCan,
  Presentation,
  ShoppingBasket,
} from 'lucide-react';

const items: SidebarNavLikProps[] = [
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
    children: <>Hisotria logowań i czatu</>,
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
  return (
    <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0">
      <div className="sticky flex flex-col justify-between lg:w-1/5 border-r h-screen p-10 space-y-4">
        <div className="space-y-4">
          <img src="/vrp-logo.webp" className="h-16" />

          <MainNav items={items} />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between bg-card space-x-4 rounded-md border p-4">
            <p>Gracze na serwerze:</p>
            <p className="text-muted-foreground">243</p>
          </div>

          <div className="flex items-center justify-between bg-card space-x-4 rounded-md border p-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="space-y-1">
                <h4 className="leading-[1]">KoruS</h4>
                <p className="text-xs text-muted-foreground leading-[1]">Developer</p>
              </div>
            </div>

            <Button size="icon" variant="ghost">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 lg:max-w-2xl p-10 h-[10000px]">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>

        <Outlet />
      </div>
    </div>
  );
};
