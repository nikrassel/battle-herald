import { useForm, Controller } from 'react-hook-form';

import { Button, InfoCardProps, OptionsField } from '@//shared/ui';

import {
  TCustomGameSettings,
  customGameDefaultValues,
  deployOptions,
  missionsRulesOptions,
  primaryMissionsOptions,
} from './lib';

export const CustomGame = () => {
  const { control } = useForm<TCustomGameSettings>();
  return (
    <main className="page">
      <h3>Custom Game settings</h3>
      <div className="page__form-wrapper">
        <Controller
          control={control}
          name="primaryMission"
          defaultValue={customGameDefaultValues.primaryMission}
          render={({ field }) => (
            <OptionsField
              label="Выберите основную миссии"
              id="primary"
              options={primaryMissionsOptions}
              {...field}
              onChange={(event) => {}}
            />
          )}
        />
        <Controller
          control={control}
          name="deployment"
          defaultValue={customGameDefaultValues.deployment}
          render={({ field }) => (
            <OptionsField
              label="Выберите тип расстановки"
              id="deploy"
              options={deployOptions}
              {...field}
              onChange={(event) => {}}
            />
          )}
        />
        <Controller
          control={control}
          name="missionRuleA"
          defaultValue={customGameDefaultValues.missionRuleA}
          render={({ field }) => (
            <OptionsField
              label="Выберите дополнительные правила"
              id="mission-rule-01"
              options={missionsRulesOptions}
              {...field}
              onChange={(event) => {}}
            />
          )}
        />
        <Controller
          control={control}
          name="missionRuleB"
          defaultValue={customGameDefaultValues.missionRuleB}
          render={({ field }) => (
            <OptionsField
              label=""
              id="mission-rule-02"
              options={missionsRulesOptions}
              {...field}
              onChange={(event) => {}}
            />
          )}
        />
        <Controller
          control={control}
          name="missionRuleC"
          defaultValue={customGameDefaultValues.missionRuleC}
          render={({ field }) => (
            <OptionsField
              label=""
              id="mission-rule-03"
              options={missionsRulesOptions}
              {...field}
              onChange={(event) => {}}
            />
          )}
        />
      </div>
    </main>
  );
};
