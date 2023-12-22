import { TFieldOptions } from '@//shared/ui';
import { MissionsRulesNames } from '.';

export const missionsRulesOptions: TFieldOptions[] = [
  {
    label: 'Отключено',
    value: 'noMission',
  },
  {
    label: 'Chilling Rain',
    value: MissionsRulesNames.chillingRain,
  },
  {
    label: 'Hidden Supplies',
    value: MissionsRulesNames.hiddenSupplies,
  },
  {
    label: 'Chosen Battlefield',
    value: MissionsRulesNames.chosenBattlefield,
  },
  {
    label: 'Scrambler Fields',
    value: MissionsRulesNames.scramblerFields,
  },
  {
    label: 'Sweep and Clear',
    value: MissionsRulesNames.sweepAndClear,
  },
  {
    label: 'Minefields',
    value: MissionsRulesNames.minefields,
  },
  {
    label: 'Targets of Opportunity',
    value: MissionsRulesNames.targetsOfOpportunity,
  },
  {
    label: 'Delayed Reserves',
    value: MissionsRulesNames.delayedReserves,
  },
  {
    label: 'Supply Lines',
    value: MissionsRulesNames.supplyLines,
  },
  {
    label: 'Secret Intel',
    value: MissionsRulesNames.secretIntel,
  },
  {
    label: 'Vox Static',
    value: MissionsRulesNames.voxStatic,
  },
];
