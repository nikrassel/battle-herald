import { deployments, missionRules, primaryMissions } from '@//pages/leviathanGame/lib';
import { TCustomGameSettings } from '..';
import { InfoCardProps } from '@//shared/ui';

export const mapInfoCardsKeys = (gameSettings: TCustomGameSettings): InfoCardProps[] => {
  if (gameSettings.primaryMission === undefined) {
    return [primaryMissions.takeAndHold, deployments.dawnOfWar, missionRules.chillingRain];
  }
  const keys = Object.values(gameSettings).filter((elem) => {
    //   @ts-ignore
    return elem !== 'noMission';
  });
  const chosenMissionRules = keys.slice(2).map((elem) => {
    return missionRules[elem];
  });
  return [primaryMissions[keys[0]], deployments[keys[1]], ...chosenMissionRules];
};
