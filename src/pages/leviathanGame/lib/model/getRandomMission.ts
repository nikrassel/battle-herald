import { getRandomItem } from '@//shared/model';
import { InfoCardProps } from '@//shared/ui';

import { leviathanTournamentMissions } from '..';

export type TRandomMission = {
  missionName: string;
  missionInfo: InfoCardProps[];
};

export const getRandomMission = (): TRandomMission => {
  const missionKey = getRandomItem(Object.keys(leviathanTournamentMissions).length);
  const missionName = Object.keys(leviathanTournamentMissions)[missionKey];
  return { missionName, missionInfo: leviathanTournamentMissions[missionName] };
};
