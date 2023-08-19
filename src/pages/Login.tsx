import { Button } from '@/components/ui/Button.tsx';
import { LoginForm } from '@/features/auth';

export function Login() {
  return (
    <div className="min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-auth bg-center bg-cover p-10 text-white dark:border-r lg:flex">
        <div className="relative z-20 flex items-center text-lg font-medium">
          <img src="/vrp-logo.webp" className="h-16" />
        </div>
      </div>

      <Button className="absolute right-4 top-4 md:right-10 md:top-10" variant="ghost" asChild>
        <a href="https://forum.v-rp.pl/register/">Zarejestruj się</a>
      </Button>

      <div className="p-4 lg:p-8">
        <div className="mx-auto flex flex-col justify-center space-y-6 w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Zaloguj się</h1>
            <p className="text-sm text-muted-foreground">
              Wprowadź login i hasło aby się zalogować
            </p>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
}
