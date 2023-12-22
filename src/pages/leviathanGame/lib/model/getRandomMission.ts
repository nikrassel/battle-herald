import { getRandomItem } from '@//shared/model';

import { leviathanTournamentMissions } from '..';

export type TRandomMission = {
  missionName: string[];
  terrainLayout: string;
};

export const getRandomMission = (): TRandomMission => {
  const missionKey = getRandomItem(Object.keys(leviathanTournamentMissions).length);
  const missionName = Object.keys(leviathanTournamentMissions)[missionKey];
  const terrainKey = getRandomItem(leviathanTournamentMissions[missionName].terrainLayout.length);
  const terrainLayout = leviathanTournamentMissions[missionName].terrainLayout[terrainKey].value;
  return {
    missionName: leviathanTournamentMissions[missionName].missionInfo,
    terrainLayout,
  };
};
