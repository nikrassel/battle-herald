import { useContext, useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { GameContext } from '@//app/context';
import { Button, OptionsField } from '@//shared/ui';
import { CardRow } from '@//entities/cardRow/CardRow';
import { localStorageService } from '@//app/localStorage';

import {
  TCustomGameSettings,
  customGameDefaultValues,
  deployOptions,
  getRandomSettings,
  mapCurentGameInfo,
  mapInfoCardsKeys,
  missionsRulesOptions,
  primaryMissionsOptions,
} from './lib';

export const CustomGame = () => {
  const navigate = useNavigate();
  const context = useContext(GameContext);

  const { control, getValues, watch } = useForm<TCustomGameSettings>();

  const infoCards = useMemo(() => {
    const newValues = getValues();
    return mapInfoCardsKeys(newValues);
  }, [watch()]);

  const beginNewMissionHandler = (random: boolean) => {
    if (random) {
      const randomMission = getRandomSettings();
      localStorageService.setCurrentCustomGame(randomMission);
    } else {
      const gameInfo = mapCurentGameInfo(getValues());
      localStorageService.setCurrentCustomGame(gameInfo);
    }
    context?.setIsCurrentGame(true);
    navigate('/currentGame');
  };
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
      <div className="page__control-panel">
        <Button onClick={() => beginNewMissionHandler(true)}>Получить случайную миссию</Button>
        <Button onClick={() => beginNewMissionHandler(false)}>Это мой выбор</Button>
      </div>
    </main>
  );
};
