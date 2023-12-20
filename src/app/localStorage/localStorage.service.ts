import { CURRENT_CUSTOM_GAME, CURRENT_LEVIATHAN_GAME } from './lib';

export const endCurrentGame = () => {
  localStorage.clear();
};

export const setCurrentLeviathanGame = (missionId: string) => {
  endCurrentGame();
  localStorage.setItem(CURRENT_LEVIATHAN_GAME, missionId);
};

export const setCurrentCustomGame = (missionSettings: string[]) => {
  endCurrentGame();
  const savedInfo = missionSettings.join('|');
  localStorage.setItem(CURRENT_CUSTOM_GAME, savedInfo);
};

export const checkCurrentGame = () => {
  const leviathanGame = localStorage.getItem(CURRENT_LEVIATHAN_GAME);
  const customGame = localStorage.getItem(CURRENT_CUSTOM_GAME);
  if (leviathanGame) {
    return leviathanGame;
  }
  if (customGame) {
    const gameInfo = customGame.split('|');
    return gameInfo;
  }
  return null;
};

export const localStorageService = {
  setCurrentLeviathanGame,
  checkCurrentGame,
  endCurrentGame,
};
