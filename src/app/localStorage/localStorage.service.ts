import { LeviathanMissions } from '@//pages/leviathanGame/lib';
import { CURRENT_LEVIATHAN_GAME } from './lib';

export const setCurrentLeviathanGame = (missionId: LeviathanMissions) => {
  localStorage.setItem(CURRENT_LEVIATHAN_GAME, missionId);
};

export const checkCurrentGame = () => {
  return localStorage.getItem(CURRENT_LEVIATHAN_GAME);
};

export const localStorageService = {
  setCurrentLeviathanGame,
  checkCurrentGame,
};
