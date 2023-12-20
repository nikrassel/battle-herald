import { TCustomGameSettings } from '..';

export const mapCurentGameInfo = (gameSettings: TCustomGameSettings): string[] => {
  if (gameSettings.primaryMission === undefined) {
    return ['takeAndHold', 'dawnOfWar', 'chillingRain'];
  }
  const gameInfo = Object.values(gameSettings).filter((elem) => {
    //   @ts-ignore
    return elem !== 'noMission';
  });
  return gameInfo;
};
