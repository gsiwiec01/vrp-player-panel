import { Button } from '@/components/ui/Button.tsx';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const Error404 = () => {
  return (
    <div className="flex flex-col items-center space-y-8 text-center">
      <div className="flex flex-col space-y-2 text-center">
        <p className="text-sm text-muted-foreground">404</p>

        <h1 className="text-3xl font-semibold tracking-tight">Żądana strona nie istnieje</h1>

        <p className="text-sm text-muted-foreground">
          Przepraszamy, nie mogliśmy znaleźć strony, której szukasz
        </p>
      </div>

      <Button asChild className="w-fit" variant="default">
        <Link to="/">
          <ArrowLeft className="w-4 h-4 mr-4" /> Powrót do strony głównej
        </Link>
      </Button>
    </div>
  );
};
