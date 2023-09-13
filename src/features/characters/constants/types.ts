import { Sex } from '@/constants/enums/Sex.ts';

export type CharacterBasicData = {
  id: number;
  name: string;
  surname: string;
  sex: Sex;
  money: number;
  bankMoney: number | null;
  blocked: boolean;
  isLogged: boolean;
  onlineTime: number;
  isHidden: boolean;
};
