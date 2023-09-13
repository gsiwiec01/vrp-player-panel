import { CharacterBasicData } from '@/features/characters/constants/types.ts';

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
