import { Button } from '@/components/ui/Button.tsx';
import { LoginForm } from '@/features/auth';
import { Separator } from '@/components/ui/Separator.tsx';

export function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-10 lg:px-0">
      <div className="relative hidden h-full flex-col bg-auth bg-center bg-cover p-10 text-white dark:border-r lg:flex col-span-6">
        <div className="relative z-20 flex items-center text-lg font-medium">
          <img src="/vrp-logo.webp" className="h-16" />
        </div>
      </div>

      <div className="p-4 lg:p-8 col-span-4">
        <div className="mx-auto flex flex-col justify-center space-y-6 w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Zaloguj się</h1>
            <p className="text-sm text-muted-foreground">
              Wprowadź login i hasło aby się zalogować
            </p>
          </div>

          <LoginForm />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>

            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">NIE MASZ KONTA?</span>
            </div>
          </div>

          <Button variant="outline" asChild>
            <a href="https://forum.v-rp.pl/register/">Zarejestruj się</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
