import { Button } from '@/components/ui/Button.tsx';
import { Link } from 'react-router-dom';
import { UserPlus2 } from 'lucide-react';
import { CharacterList } from '@/features/characters/components/CharacterList.tsx';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/elements/PageHeader';

export const CharacterListPage = () => {
  return (
    <div className="space-y-6 flex flex-col">
      <div className="flex flex-wrap justify-between items-center gap-6">
        <PageHeader>
          <PageHeaderHeading>Postacie</PageHeaderHeading>
          <PageHeaderDescription>Zarządzaj swoimi postaciami.</PageHeaderDescription>
        </PageHeader>

        <Button asChild className="w-full sm:w-fit">
          <Link to="/characters/new">
            <UserPlus2 className="mr-4" />
            Stwórz nową postać
          </Link>
        </Button>
      </div>

      <CharacterList />
    </div>
  );
};
