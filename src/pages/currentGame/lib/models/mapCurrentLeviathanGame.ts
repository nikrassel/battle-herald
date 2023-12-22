import { deployments, missionRules, primaryMissions, terrainLayouts } from '@//shared/tempDB';
import { InfoCardProps } from '@//shared/ui';

export const mapCurrentLeviathanGame = (missionInfo: string): InfoCardProps[] => {
  const missionDetails = missionInfo.split('|');
  const primaryMission = primaryMissions[missionDetails[0]];
  const missionRule = missionRules[missionDetails[1]];
  const deployment = deployments[missionDetails[2]];
  const terrainLayout = terrainLayouts[missionDetails[3]];
  return [primaryMission, missionRule, deployment, terrainLayout];
};
