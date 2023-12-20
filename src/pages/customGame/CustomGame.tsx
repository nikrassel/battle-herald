import { useForm, Controller } from 'react-hook-form';

import { Button, InfoCardProps, OptionsField } from '@//shared/ui';

import {
  TCustomGameSettings,
  customGameDefaultValues,
  deployOptions,
  mapInfoCardsKeys,
  missionsRulesOptions,
  primaryMissionsOptions,
} from './lib';
import { useMemo } from 'react';
import { CardRow } from '@//entities/cardRow/CardRow';

export const CustomGame = () => {
  const { control, getValues, watch } = useForm<TCustomGameSettings>();
  const infoCards = useMemo(() => {
    const newValues = getValues();
    return mapInfoCardsKeys(newValues);
  }, [watch()]);
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
              id="mission-rule-A"
              options={missionsRulesOptions}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="missionRuleB"
          defaultValue={customGameDefaultValues.missionRuleB}
          render={({ field }) => (
            <OptionsField label="" id="mission-rule-B" options={missionsRulesOptions} {...field} />
          )}
        />
        <Controller
          control={control}
          name="missionRuleC"
          defaultValue={customGameDefaultValues.missionRuleC}
          render={({ field }) => (
            <OptionsField label="" id="mission-rule-C" options={missionsRulesOptions} {...field} />
          )}
        />
      </div>
      <div className="page__cards-layout">
        {infoCards.length > 0 && <CardRow cards={infoCards} />}
      </div>
    </main>
  );
};
