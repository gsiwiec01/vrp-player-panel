import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/elements/PageHeader';
import { CharacterCreationForm } from '@/features/characters/components/CharacterCreationForm/CharacterCreationForm.tsx';

export const CharacterCreationPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader>
        <PageHeaderHeading>Nowa postać</PageHeaderHeading>
        <PageHeaderDescription>Stwórz postać jaką tylko zapragniesz!</PageHeaderDescription>
      </PageHeader>

      <CharacterCreationForm />
    </div>
  );
};
