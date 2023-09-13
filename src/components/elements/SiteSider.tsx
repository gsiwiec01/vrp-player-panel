import { ScrollArea } from '@/components/ui/ScrollArea';
import { SiteNavLink, SiteNavLinkProps } from '@/components/elements/SiteNavLink.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/Tooltip';
import { Button } from '@/components/ui/Button.tsx';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/features/auth';

type SiteSiderProps = {
  menuItemList: SiteNavLinkProps[];
};

export const SiteSider = ({ menuItemList }: SiteSiderProps) => {
  const { logout } = useAuth();

  return (
    <>
      <header>
        <img src="/vrp-logo.webp" className="h-16" alt="logo v-rp.pl" />
      </header>

      <ScrollArea>
        <nav className="flex flex-col space-x-2 space-y-2">
          {menuItemList.map((x) => (
            <SiteNavLink key={`${x.to}`} {...x} />
          ))}
        </nav>
      </ScrollArea>

      <footer className="space-y-6 mt-6 flex-1 flex flex-col justify-end">
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

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost" onClick={logout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Wyloguj</TooltipContent>
          </Tooltip>
        </div>
      </footer>
    </>
  );
};
