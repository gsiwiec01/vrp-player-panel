import { z } from 'zod';
import { Input } from '@/components/ui/Input.tsx';
import { Button } from '@/components/ui/Button.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuth } from '@/features/auth/hooks/useAuth.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { useState } from 'react';
import { Checkbox } from '@/components/ui/Checkbox.tsx';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import { DomainExceptionCode } from '@/constants/domainExceptionCode.ts';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { useNavigate } from 'react-router-dom';
import { XCircle } from 'lucide-react';

const loginSchema = z.object({
  username: z.string().nonempty(),
  password: z.string().nonempty(),
  mfaCode: z.union([z.string().length(6), z.string().length(0)]).nullable(),
  rememberThisBrowser: z.boolean().default(false),
});

type LoginSchema = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const navigate = useNavigate();
  const [isMfaInputVisible, setIsMfaInputVisible] = useState<boolean>(false);

  const { login } = useAuth();
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: '', password: '', mfaCode: null, rememberThisBrowser: false },
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    await login.mutateAsync(data, {
      onSuccess: () => {
        navigate('/');
      },
      onError: ({ response }) => {
        if (!response || response.status != 400) return;

        switch (response.data.domainExceptionCode) {
          case DomainExceptionCode.AccountTemporarilyBlocked:
            form.setError('root', {
              type: 'Konto zostało zablokowane',
              message: `Blokada nastąpiła w wyniku zbyt wielu prób logowania. Blokada wygaśnie: ${response.data.description}.`,
            });
            break;

          case DomainExceptionCode.AccountBanned:
            form.setError('root', {
              type: 'Konto zbanowane',
              message: 'To konto zostało zbanowane przez administrację.',
            });
            break;

          case DomainExceptionCode.IpBanned:
            form.setError('root', {
              type: 'Adres IP zbanowany',
              message: 'Możliwość logowania na konta z tego adresu IP została zbanowana.',
            });
            break;

          case DomainExceptionCode.BrowserNotValidated:
            form.setError('root', {
              type: 'Logowanie z nowej przeglądarki',
              message:
                'Wykryto, że logujesz się z innej przeglądarki. Na twój email została wysłana wiadomość w celu weryfikacji urządzenia.',
            });
            break;

          case DomainExceptionCode.NeedsMfaCode:
            setIsMfaInputVisible(true);
            break;

          case DomainExceptionCode.InvalidMfaCode:
            form.setError('mfaCode', {
              type: 'string',
              message: 'Kod jest niepoprawny',
            });
            break;

          default:
            form.setError('root', {
              type: 'Niepoprawne dane logowania',
              message: 'Podany login lub hasło są niepoprawne.',
            });
            break;
        }
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {form.formState.errors.root && (
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>{form.formState.errors.root.type}</AlertTitle>
            <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
          </Alert>
        )}

        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nazwa użytkownika</FormLabel>
              <FormControl>
                <Input {...field} placeholder="name@exemple.com" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hasło</FormLabel>
              <FormControl>
                <Input {...field} type="password" placeholder="Hasło" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Dialog open={isMfaInputVisible} onOpenChange={setIsMfaInputVisible}>
          <DialogContent onPointerDownOutside={(e) => e.preventDefault()}>
            <DialogHeader>
              <DialogTitle>Weryfikacja dwuetapowa</DialogTitle>
              <DialogDescription>
                Zanim zostaniesz zalogowany na wybrane konto, musisz potwierdzić swoją tożsamość.
                Wprowadź poniżej kod z aplikacji Google Authtenticator.
              </DialogDescription>
            </DialogHeader>

            <FormField
              name="mfaCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kod autoryzacyjny</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="1234556" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="rememberThisBrowser"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox {...field} />
                  </FormControl>

                  <FormLabel className="cursor-pointer">Zapamiętaj tę przeglądarke</FormLabel>

                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="submit"
                className="w-full"
                onClick={form.handleSubmit(onSubmit)}
                loading={login.isLoading}
              >
                Zaloguj
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Button
          type="submit"
          className="w-full"
          onClick={form.handleSubmit(onSubmit)}
          loading={login.isLoading}
        >
          Zaloguj
        </Button>
      </form>
    </Form>
  );
};
