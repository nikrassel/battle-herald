import { deployments, primaryMissions } from '@//pages/leviathanGame/lib';
import { getRandomItem } from '@//shared/model';
import { customMissionRules } from '..';

export const getRandomSettings = () => {
  const primaryMissionKey = getRandomItem(Object.keys(primaryMissions).length);
  const deploymentKey = getRandomItem(Object.keys(deployments).length);
  let missionRules: string[] = [];
  let randomRule = getRandomItem(customMissionRules.length);
  if (customMissionRules[randomRule] == 'maelstormOfBattle') {
    while (missionRules.length < 2) {
      const newKey = getRandomItem(customMissionRules.length);
      if (!missionRules.includes(customMissionRules[newKey])) {
        missionRules.push(customMissionRules[newKey]);
      }
    }
    if (missionRules.includes('chillingRain')) {
      missionRules = missionRules.filter((elem) => elem !== 'chillingRain');
      while (missionRules.length < 3) {
        const newKey = getRandomItem(customMissionRules.length);
        if (
          !missionRules.includes(customMissionRules[newKey]) &&
          customMissionRules[newKey] !== 'chillingRain' &&
          customMissionRules[newKey] !== 'maelstormOfBattle'
        ) {
          missionRules.push(customMissionRules[newKey]);
        }
      }
    }
  } else {
    missionRules.push(customMissionRules[randomRule]);
  }
  return [
    Object.keys(primaryMissions)[primaryMissionKey],
    Object.keys(deployments)[deploymentKey],
    ...missionRules,
  ];
};
