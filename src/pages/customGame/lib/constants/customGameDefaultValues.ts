import {
  DeploymentsNames,
  MissionsRulesNames,
  PrimaryMissionsNames,
  TCustomGameSettings,
} from '..';

export const customGameDefaultValues: TCustomGameSettings = {
  primaryMission: PrimaryMissionsNames.takeAndHold,
  deployment: DeploymentsNames.dawnOfWar,
  missionRuleA: MissionsRulesNames.chillingRain,
  missionRuleB: MissionsRulesNames.noMission,
  missionRuleC: MissionsRulesNames.noMission,
};
