import { deployments, missionRules, primaryMissions } from '@//shared/tempDB';
import { InfoCardProps } from '@//shared/ui';

export const mapCurrentCustomGame = (missionInfo: string): InfoCardProps[] => {
  const missionDetails = missionInfo.split('|');
  const primaryMission = primaryMissions[missionDetails[1]];
  const deployment = deployments[missionDetails[2]];
  const extraRules = Object.keys(missionRules)
    .filter((elem) => missionDetails.slice(3).includes(elem))
    .map((elem) => missionRules[elem]);
  return [primaryMission, deployment, ...extraRules];
};
