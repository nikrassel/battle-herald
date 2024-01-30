import { deployments, missionRules, primaryMissions, terrainLayouts } from '@//shared/tempDB';
import { InfoCardProps } from '@//shared/ui';

export const mapCurrentLeviathanGame = (missionInfo: string): InfoCardProps[] => {
  const missionDetails = missionInfo.split('|');
  const primaryMission = primaryMissions[missionDetails[1]];
  const missionRule = missionRules[missionDetails[2]];
  const deployment = deployments[missionDetails[3]];
  const terrainLayout = terrainLayouts[missionDetails[4]];
  return [primaryMission, missionRule, deployment, terrainLayout];
};
