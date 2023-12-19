import { DeploymentsNames, MissionsRulesNames, PrimaryMissionsNames } from '..';

export type TCustomGameSettings = {
  primaryMission: PrimaryMissionsNames;
  deployment: DeploymentsNames;
  missionRuleA: MissionsRulesNames;
  missionRuleB: MissionsRulesNames;
  missionRuleC: MissionsRulesNames;
};
