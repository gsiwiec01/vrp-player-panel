import { Button } from '@/components/ui/Button.tsx';
import { Link } from 'react-router-dom';
import { UserPlus2 } from 'lucide-react';
import { CharacterList } from '@/features/characters/components/CharacterList.tsx';

export const CharacterListPage = () => {
  return (
    <div className="space-y-6 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Postacie</h2>
          <p className="text-muted-foreground">Zarządzaj swoimi postaciami.</p>
        </div>

        <Button asChild>
          <Link to="/characters/create-new">
            <UserPlus2 className="h-4 w-4 mr-4" />
            Stwórz nową postać
          </Link>
        </Button>
      </div>

      <CharacterList />
    </div>
  );
};
