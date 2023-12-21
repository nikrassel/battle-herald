import { InfoCardProps, TFieldOptions } from '@//shared/ui';

import { deployments, missionRules, primaryMissions, terrainLayouts } from '@//shared/tempDB';
import { TerrainLayouts } from '..';

export type TLeviathanMission = {
  missionInfo: string[];
  terrainLayout: TFieldOptions[];
};

export type TLeviathanTournamentMissionsPool = {
  [key: string]: TLeviathanMission;
};

export const leviathanTournamentMissions: TLeviathanTournamentMissionsPool = {
  missionA: {
    missionInfo: ['takeAndHold', 'chillingRain', 'searchAndDestroy'],
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
    missionInfo: ['priorityTargets', 'hiddenSupplies', 'searchAndDestroy'],
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
    missionInfo: ['theRitual', 'scramblerFields', 'sweepingEngagement'],
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
    missionInfo: ['deployServoSkulls', 'chillingRain', 'searchAndDestroy'],
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
