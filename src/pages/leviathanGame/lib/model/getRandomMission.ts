import { getRandomItem } from '@//shared/model';

import { leviathanTournamentMissions } from '..';

export const getRandomMission = () => {
  const missionKey = getRandomItem(Object.keys(leviathanTournamentMissions).length);
  const missionName = Object.keys(leviathanTournamentMissions)[missionKey];
  return leviathanTournamentMissions[missionName];
};
