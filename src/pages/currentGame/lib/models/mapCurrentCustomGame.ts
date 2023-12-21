import { deployments, missionRules, primaryMissions } from '@//shared/tempDB';
import { InfoCardProps } from '@//shared/ui';

export const mapCurrentCustomGame = (missionInfo: string[]): InfoCardProps[] => {
  const primaryMission = primaryMissions[missionInfo[0]];
  const deployment = deployments[missionInfo[1]];
  const extraRules = Object.keys(missionRules)
    .filter((elem) => missionInfo.slice(2).includes(elem))
    .map((elem) => missionRules[elem]);
  return [primaryMission, deployment, ...extraRules];
};
