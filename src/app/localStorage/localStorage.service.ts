import { LeviathanMissions } from '@//pages/leviathanGame/lib';
import { CURRENT_LEVIATHAN_GAME } from './lib';

export const setCurrentLeviathanGame = (missionId: LeviathanMissions) => {
  localStorage.setItem(CURRENT_LEVIATHAN_GAME, missionId);
};

export const localStorageService = {
  setCurrentLeviathanGame,
};
