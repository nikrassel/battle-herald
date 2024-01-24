import { APP_PATHS } from '@//app/lib/constants/APP_PATHS';
import { checkCurrentGame } from '@//app/localStorage';

export const setLeviathanSearchParams = () => {
  const currentGame = checkCurrentGame();
  if (currentGame) {
    const gameSettings = currentGame.split('|');
    return `${APP_PATHS.current}?type=${gameSettings[0]}&objective=${gameSettings[1]}&rule=${gameSettings[2]}&deployment=${gameSettings[3]}&layout=${gameSettings[4]}`;
  }
  return APP_PATHS.main;
};
