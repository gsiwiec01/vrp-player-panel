import { Outlet } from 'react-router-dom';

export function SideLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-10 lg:px-0">
      <div className="relative hidden h-full flex-col bg-auth bg-center bg-cover p-10 text-white dark:border-r lg:flex col-span-6">
        <div className="relative z-20 flex items-center text-lg font-medium">
          <img src="/vrp-logo.webp" className="h-16" alt="logo v-rp.pl" />
        </div>
      </div>

      <div className="p-4 lg:p-8 col-span-4">
        <Outlet />
      </div>
    </div>
  );
}
