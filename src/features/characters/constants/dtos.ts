import { CharacterBasicData } from '@/features/characters/constants/types.ts';
import { Sex } from '@/constants/enums/Sex.ts';
import { CharacterType } from '@/features/characters/constants/enums/CharacterType.ts';

export type UserCharacterListRequestDto = {
  searchPhrase: string;
  includeBlockedCharacters: boolean;
  pageNumber: number;
  pageSize: number;
};

export type UserCharacterListResponseDto = {
  totalCount: number;
  data: CharacterBasicData[];
};

export type UserCreationCharacterRequestDto = {
  characterType: CharacterType;
  name: string;
  surname: string;
  sex: Sex;
  dateOfBirth: Date;
  placeOfBirth: string;
  origin: string;

  motherName: string;
  fatherName: string;

  eyeColor: string;
  weight: number;
  height: number;

  starterVehicleId: number;
  starterVehicleColorRed: number;
  starterVehicleColorGreen: number;
  starterVehicleColorBlue: number;
};
