import { Button } from '@/components/ui/Button.tsx';
import { Save, XCircle } from 'lucide-react';
import { Form } from '@/components/ui/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Sex } from '@/constants/enums/Sex.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { CharacterCreationFormBackground } from '@/features/characters/components/CharacterCreationForm/CharacterCreationFormBackground.tsx';
import { CharacterCreationFormAppearance } from '@/features/characters/components/CharacterCreationForm/CharacterCreationFormAppearance.tsx';
import { CharacterCreationFormLegalStatus } from '@/features/characters/components/CharacterCreationForm/CharacterCreationFormLegalStatus.tsx';
import { CharacterCreationFromPersonalities } from '@/features/characters/components/CharacterCreationForm/CharacterCreationFromPersonalities.tsx';
import { CharacterCreationFormStarterVehicle } from '@/features/characters/components/CharacterCreationForm/CharacterCreationFormStarterVehicle.tsx';
import { CharacterType } from '@/features/characters/constants/enums/CharacterType.ts';
import { useMutation } from '@tanstack/react-query';
import { createCharacter } from '@/features/characters/services/character.ts';
import { UserCreationCharacterRequestDto } from '@/features/characters/constants/dtos.ts';
import { AxiosError, AxiosResponse } from 'axios';
import { STARTER_VEHICLES } from '@/features/characters/constants/STARTER_VEHICLES.ts';
import { STARTER_VEHICLE_COLORS } from '@/features/characters/constants/STARTER_VEHICLE_COLORS.ts';
import { COUNTRIES } from '@/features/characters/constants/COUNTRIES.ts';
import { EYE_COLORS } from '@/features/characters/constants/EYE_COLORS.ts';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { DomainException } from '@/constants/types.ts';
import { DomainExceptionCode } from '@/constants/domainExceptionCode.ts';
import { useNavigate } from 'react-router-dom';

const NameRegex = /^[A-Z][A-Za-z]+$/;
const LettersWithSpacesRegex = /^[A-Z][A-Za-z ]+$/;

const newCharacterSchema = z.object({
  characterType: z.nativeEnum(CharacterType),
  name: z.string().min(3).max(20).regex(NameRegex).nonempty(),
  surname: z.string().min(3).max(20).regex(NameRegex).nonempty(),
  sex: z.nativeEnum(Sex),
  dateOfBirth: z.date().max(new Date()),
  placeOfBirth: z.string().min(3).max(60).regex(LettersWithSpacesRegex).nonempty(),
  origin: z.enum(COUNTRIES.map((x) => x.value) as [string, ...string[]]),
  weight: z.number().min(40).max(250).int(),
  height: z.number().min(110).max(230).int(),
  eyeColor: z.enum(EYE_COLORS.map((x) => x.name) as [string, ...string[]]),
  fatherName: z.string().min(3).max(40).regex(NameRegex).nonempty(),
  motherName: z.string().min(3).max(40).regex(NameRegex).nonempty(),
  starterVehicleId: z.number().refine((val) => STARTER_VEHICLES.find((x) => x.id === val), {
    message: 'Ten pojazd nie może być pojazdem startowym',
  }),
  starterVehicleColor: z.enum(STARTER_VEHICLE_COLORS),
});

type NewCharacterSchema = z.infer<typeof newCharacterSchema>;

export const CharacterCreationForm = () => {
  const navigate = useNavigate();
  const form = useForm<NewCharacterSchema>({
    resolver: zodResolver(newCharacterSchema),
    mode: 'onBlur',
    defaultValues: {
      characterType: CharacterType.LegalUsa,
      sex: Sex.Male,
      eyeColor: 'LightGreen',
      starterVehicleId: 2,
      starterVehicleColor: '#ebd4cb',
    },
  });

  const mutation = useMutation<
    AxiosResponse<number>,
    AxiosError<DomainException>,
    UserCreationCharacterRequestDto
  >({
    mutationFn: createCharacter,
    onSuccess: () => {
      navigate('characters');
    },
    onError: ({ response }) => {
      if (!response) return;

      switch (response.data.domainExceptionCode) {
        case DomainExceptionCode.IncorrectCharacterAge:
          form.setError('dateOfBirth', {
            message: 'Niepoprawny wiek!',
          });
          break;

        case DomainExceptionCode.Duplication:
          form.setError('root', {
            type: 'Postać już istnieje!',
            message: `Postać o takim imieniu i nazwisku już istnieje, wybierz inne dane postaci`,
          });
          break;

        case DomainExceptionCode.TooLittleOnlineTime:
          form.setError('root', {
            type: 'Nie możesz stworzyć nowej postaci',
            message: `Nie możesz stworzyć nowej postaci dopóki na pozostałych postaniach nie będziesz mieć przegranych 10 godzin`,
          });
          break;
      }
    },
  });

  const submit: SubmitHandler<NewCharacterSchema> = ({ starterVehicleColor, ...rest }) => {
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(starterVehicleColor);
    if (!rgb) return;

    const preparedData: UserCreationCharacterRequestDto = {
      ...rest,
      starterVehicleColorRed: parseInt(rgb[1], 16),
      starterVehicleColorGreen: parseInt(rgb[2], 16),
      starterVehicleColorBlue: parseInt(rgb[3], 16),
    };

    console.log(preparedData);

    mutation.mutate(preparedData);
  };

  return (
    <Form {...form}>
      <form onSubmit={() => form.handleSubmit(submit)} className="space-y-6">
        {form.formState.errors.root && (
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>{form.formState.errors.root.type}</AlertTitle>
            <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <CharacterCreationFormLegalStatus />
          <CharacterCreationFromPersonalities />
          <CharacterCreationFormAppearance />
          <CharacterCreationFormBackground />
          <CharacterCreationFormStarterVehicle />
        </div>

        <div className="flex justify-end">
          <Button type="submit" onClick={form.handleSubmit(submit)}>
            <Save className="h-4 w-4 mr-4" />
            Zapisz
          </Button>
        </div>
      </form>
    </Form>
  );
};
