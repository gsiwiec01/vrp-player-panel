import { Button } from '@/components/ui/Button.tsx';
import { LoginForm } from '@/features/auth';
import { Separator } from '@/components/ui/Separator.tsx';
import { useLocation, useNavigate } from 'react-router-dom';

export function Login() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const onSuccessHandler = () => {
    const pathname = state.pathname ?? '/';

    console.log(state);
    navigate(pathname, { state: state.state });
  };

  return (
    <div className="mx-auto flex flex-col justify-center space-y-6 w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">Zaloguj się</h1>
        <p className="text-sm text-muted-foreground">Wprowadź login i hasło aby się zalogować</p>
      </div>

      <LoginForm onSuccess={onSuccessHandler} />

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
  );
}
