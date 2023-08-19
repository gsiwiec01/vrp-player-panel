export const enum DomainExceptionCode {
  Forbidden = 'Forbidden',
  TooLittleOnlineTime = 'TooLittleOnlineTime',
  IncorrectCharacterAge = 'IncorrectCharacterAge',
  GroupMemberProtectedFromDismissal = 'GroupMemberProtectedFromDismissal',
  PaydayTooHighForMember = 'PaydayTooHighForMember',
  PaydayTooLowForMember = 'PaydayTooLowForMember',
  LastRankProtectedFromRemoval = 'LastRankProtectedFromRemoval',
  SuperLeaderRankProtectedFromRemoval = 'SuperLeaderRankProtectedFromRemoval',
  Duplication = 'Duplication',
  DefaultRankProtectedFromRemoval = 'DefaultRankProtectedFromRemoval',
  GroupHasNoSubsidies = 'GroupHasNoSubsidies',
  AccountTemporarilyBlocked = 'AccountTemporarilyBlocked',
  AccountBanned = 'AccountBanned',
  BadIp = 'BadIp',
  TooManyHiddenCharacters = 'TooManyHiddenCharacters',
  CharacterAlreadyBlocked = 'CharacterAlreadyBlocked',
  CharacterNotBlocked = 'CharacterNotBlocked',
  IpBanned = 'IpBanned',
  GroupDoesNotOwnVehicle = 'GroupDoesNotOwnVehicle',
  CantSetSalePercentForMember = 'CantSetSalePercentForMember',
  SalePercentTooHighForMember = 'SalePercentTooHighForMember',
  InsufficientGamePoints = 'InsufficientGamePoints',
  InvalidFormData = 'InvalidFormData',
  PremiumServiceAlreadyActive = 'PremiumServiceAlreadyActive',
  PremiumServiceIsNotActive = 'PremiumServiceIsNotActive',
  PlateTooLong = 'PlateTooLong',
  PlateIsTaken = 'PlateIsTaken',
  NickIsTaken = 'NickIsTaken',
  CharacterIsNotBlocked = 'CharacterIsNotBlocked',
  NeedsMfaCode = 'NeedsMfaCode',
  InvalidMfaCode = 'InvalidMfaCode',
  BrowserNotValidated = 'BrowserNotValidated',
  DefaultRankNotExists = 'DefaultRankNotExists',
  NotValidGamePointsValue = 'NotValidGamePointsValue',
  NotFound = 'NotFound',
  ForbiddenRankUpdateForLeader = 'ForbiddenRankUpdateForLeader',
  ForbiddenRankUpdateWithLeaderPerm = 'ForbiddenRankUpdateWithLeaderPerm',
}