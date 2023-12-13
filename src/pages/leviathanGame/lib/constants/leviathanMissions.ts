import { InfoCardProps } from '@//shared/ui';

import { deployments, missionRules, primaryMissions, terrainLayouts } from '.';

export type TLeviathanTournamentMissionsPool = {
  [key: string]: InfoCardProps[];
};

export const leviathanTournamentMissions: TLeviathanTournamentMissionsPool = {
  missionA: [
    primaryMissions.takeAndHold,
    missionRules.chillingRain,
    deployments.hammerAndAnvil,
    terrainLayouts.layoutOne,
  ],
  missionB: [
    primaryMissions.scorchedEarth,
    missionRules.hiddenSupplies,
    deployments.sweepingEngagement,
    terrainLayouts.layoutTwo,
  ],
  missionC: [
    primaryMissions.priorityTargets,
    missionRules.chosenBattlefield,
    deployments.dawnOfWar,
    terrainLayouts.layoutThree,
  ],
  missionD: [
    primaryMissions.takeAndHold,
    missionRules.scramblerFields,
    deployments.searchAndDestroy,
    terrainLayouts.layoutFour,
  ],
};
