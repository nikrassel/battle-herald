import { InfoCardProps } from '@//shared/ui';

export type TInfoCardDeck = {
  [key: string]: InfoCardProps;
};

export enum LeviathanMissions {
  missionA = 'missionA',
  missionB = 'missionB',
  missionC = 'missionC',
  missionD = 'missionD',
}

export type TLeviathanMissionChoise = {
  choise: LeviathanMissions;
};
