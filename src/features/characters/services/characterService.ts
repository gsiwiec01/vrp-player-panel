import { axios } from '@/services/baseApi.ts';
import {
  UserCharacterListRequestDto,
  UserCharacterListResponseDto,
} from '@/features/characters/constants/dtos.ts';

export function getCharacterList({
  includeBlockedCharacters,
  ...rest
}: UserCharacterListRequestDto) {
  return axios.get<UserCharacterListResponseDto>('user/character/getAllByAccountId', {
    params: {
      hideBlocked: includeBlockedCharacters,
      ...rest,
    },
  });
}

export function toggleCharacterVisibility(characterId: number) {
  return axios.patch('user/character/toggleHide', { characterId });
}
