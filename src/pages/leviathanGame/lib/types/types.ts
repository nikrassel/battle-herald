export enum LeviathanMissions {
  missionA = 'missionA',
  missionB = 'missionB',
  missionC = 'missionC',
  missionD = 'missionD',
}

export enum TerrainLayouts {
  layoutOne = 'layoutOne',
  layoutTwo = 'layoutTwo',
  layoutThree = 'layoutThree',
  layoutFour = 'layoutFour',
}

export type TLeviathanMissionChoise = {
  choise: LeviathanMissions;
  terrain: TerrainLayouts;
};
