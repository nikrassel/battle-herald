import { APP_PATHS } from '@//app/lib/constants/APP_PATHS';
import { checkCurrentGame } from '@//app/localStorage';

export const setCustomSearchParams = () => {
  const currentGame = checkCurrentGame();
  if (currentGame) {
    const gameSettings = currentGame.split('|');
    return `${APP_PATHS.current}?type=${gameSettings[0]}&objective=${gameSettings[1]}&deployment=${
      gameSettings[2]
    }&rule=${gameSettings.slice(3).join('&rule=')}`;
  }
  return APP_PATHS.main;
};
