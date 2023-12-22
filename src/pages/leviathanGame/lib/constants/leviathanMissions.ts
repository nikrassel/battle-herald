import { DeploymentsNames } from '@//pages/customGame/lib';
import { TFieldOptions } from '@//shared/ui';

export type TLeviathanMission = {
  missionInfo: string[];
  terrainLayout: TFieldOptions[];
};

export type TLeviathanTournamentMissionsPool = {
  [key: string]: TLeviathanMission;
};

export const leviathanTournamentMissions: TLeviathanTournamentMissionsPool = {
  missionA: {
    missionInfo: ['takeAndHold', 'chillingRain', DeploymentsNames.searchAndDestroy],
    terrainLayout: [
      {
        label: 'Layout 1',
        value: 'layoutOne',
      },
      {
        label: 'Layout 3',
        value: 'layoutThree',
      },
      {
        label: 'Layout 4',
        value: 'layoutFour',
      },
    ],
  },
  missionB: {
    missionInfo: ['priorityTargets', 'hiddenSupplies', DeploymentsNames.searchAndDestroy],
    terrainLayout: [
      {
        label: 'Layout 1',
        value: 'layoutOne',
      },
      {
        label: 'Layout 3',
        value: 'layoutThree',
      },
      {
        label: 'Layout 4',
        value: 'layoutFour',
      },
    ],
  },
  missionC: {
    missionInfo: ['theRitual', 'scramblerFields', DeploymentsNames.sweepingEngagement],
    terrainLayout: [
      {
        label: 'Layout 1',
        value: 'layoutOne',
      },
      {
        label: 'Layout 2',
        value: 'layoutTwo',
      },
      {
        label: 'Layout 3',
        value: 'layoutThree',
      },
      {
        label: 'Layout 4',
        value: 'layoutFour',
      },
    ],
  },
  missionD: {
    missionInfo: ['deployServoSkulls', 'chillingRain', DeploymentsNames.searchAndDestroy],
    terrainLayout: [
      {
        label: 'Layout 1',
        value: 'layoutOne',
      },
      {
        label: 'Layout 3',
        value: 'layoutThree',
      },
      {
        label: 'Layout 4',
        value: 'layoutFour',
      },
    ],
  },
  missionE: {
    missionInfo: ['takeAndHold', 'chosenBattlefield', DeploymentsNames.sweepingEngagement],
    terrainLayout: [
      {
        label: 'Layout 1',
        value: 'layoutOne',
      },
      {
        label: 'Layout 2',
        value: 'layoutTwo',
      },
      {
        label: 'Layout 3',
        value: 'layoutThree',
      },
      {
        label: 'Layout 4',
        value: 'layoutFour',
      },
    ],
  },
  missionF: {
    missionInfo: ['supplyDrop', 'chillingRain', DeploymentsNames.searchAndDestroy],
    terrainLayout: [
      {
        label: 'Layout 1',
        value: 'layoutOne',
      },
      {
        label: 'Layout 3',
        value: 'layoutThree',
      },
      {
        label: 'Layout 4',
        value: 'layoutFour',
      },
    ],
  },
  missionG: {
    missionInfo: ['sitesOfPower', 'chillingRain', DeploymentsNames.hammerAndAnvil],
    terrainLayout: [
      {
        label: 'Layout 1',
        value: 'layoutOne',
      },
      {
        label: 'Layout 2',
        value: 'layoutTwo',
      },
      {
        label: 'Layout 4',
        value: 'layoutFour',
      },
    ],
  },
  missionH: {
    missionInfo: ['theRitual', 'chillingRain', DeploymentsNames.hammerAndAnvil],
    terrainLayout: [
      {
        label: 'Layout 1',
        value: 'layoutOne',
      },
      {
        label: 'Layout 2',
        value: 'layoutTwo',
      },
      {
        label: 'Layout 4',
        value: 'layoutFour',
      },
    ],
  },
  missionI: {
    missionInfo: ['takeAndHold', 'hiddenSupplies', DeploymentsNames.hammerAndAnvil],
    terrainLayout: [
      {
        label: 'Layout 1',
        value: 'layoutOne',
      },
      {
        label: 'Layout 2',
        value: 'layoutTwo',
      },
      {
        label: 'Layout 4',
        value: 'layoutFour',
      },
    ],
  },
  missionJ: {
    missionInfo: ['priorityTargets', 'chillingRain', DeploymentsNames.crucibleOfBattle],
    terrainLayout: [
      {
        label: 'Layout 1',
        value: 'layoutOne',
      },
      {
        label: 'Layout 3',
        value: 'layoutThree',
      },
      {
        label: 'Layout 4',
        value: 'layoutFour',
      },
    ],
  },
  missionK: {
    missionInfo: ['deployServoSkulls', 'hiddenSupplies', DeploymentsNames.crucibleOfBattle],
    terrainLayout: [
      {
        label: 'Layout 1',
        value: 'layoutOne',
      },
      {
        label: 'Layout 3',
        value: 'layoutThree',
      },
      {
        label: 'Layout 4',
        value: 'layoutFour',
      },
    ],
  },
  missionL: {
    missionInfo: ['scorchedEarth', 'chillingRain', DeploymentsNames.dawnOfWar],
    terrainLayout: [
      {
        label: 'Layout 1',
        value: 'layoutOne',
      },
      {
        label: 'Layout 3',
        value: 'layoutThree',
      },
      {
        label: 'Layout 2',
        value: 'layoutTwo',
      },
    ],
  },
  missionM: {
    missionInfo: ['purgeTheFoe', 'chillingRain', DeploymentsNames.crucibleOfBattle],
    terrainLayout: [
      {
        label: 'Layout 1',
        value: 'layoutOne',
      },
      {
        label: 'Layout 3',
        value: 'layoutThree',
      },
      {
        label: 'Layout 4',
        value: 'layoutFour',
      },
    ],
  },
  missionN: {
    missionInfo: ['priorityTargets', 'chosenBattlefield', DeploymentsNames.dawnOfWar],
    terrainLayout: [
      {
        label: 'Layout 1',
        value: 'layoutOne',
      },
      {
        label: 'Layout 3',
        value: 'layoutThree',
      },
      {
        label: 'Layout 2',
        value: 'layoutTwo',
      },
    ],
  },
  missionO: {
    missionInfo: ['vitalGround', 'chillingRain', DeploymentsNames.crucibleOfBattle],
    terrainLayout: [
      {
        label: 'Layout 1',
        value: 'layoutOne',
      },
      {
        label: 'Layout 3',
        value: 'layoutThree',
      },
      {
        label: 'Layout 4',
        value: 'layoutFour',
      },
    ],
  },
};
