import { useContext, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { CardRow } from '@//entities/cardRow/CardRow';
import { Button, InfoCardProps, OptionsField } from '@//shared/ui';

import {
  LeviathanMissions,
  TLeviathanMissionChoise,
  getRandomMission,
  leviathanTournamentMissions,
} from './lib';
import { localStorageService } from '@//app/localStorage';
import { GameContext } from '@//app/context';

export const LeviathanGame = () => {
  const context = useContext(GameContext);
  const [chosenMission, setChosenMission] = useState<InfoCardProps[]>(
    leviathanTournamentMissions.missionA,
  );
  const { control, setValue, getValues } = useForm<TLeviathanMissionChoise>();
  const changeMissionHandler = (value: LeviathanMissions) => {
    setValue('choise', value);
    setChosenMission(leviathanTournamentMissions[value]);
  };
  const getRandomMissionHandler = () => {
    const randomMission = getRandomMission();
    localStorageService.setCurrentLeviathanGame(randomMission.missionName);
    context?.setIsCurrentGame(true);
  };
  const getChosenMissionHandler = () => {
    localStorageService.setCurrentLeviathanGame(getValues('choise'));
    context?.setIsCurrentGame(true);
  };
  return (
    <main className="page">
      <h3>Leviathan Game settings</h3>
      <div className="page__form-wrapper">
        <Controller
          control={control}
          name="choise"
          defaultValue={LeviathanMissions.missionA}
          render={({ field }) => (
            <OptionsField
              label="Выберите тип миссии"
              id="01"
              options={Object.values(LeviathanMissions)}
              {...field}
              onChange={(event) => changeMissionHandler(event.target.value as LeviathanMissions)}
            />
          )}
        />
      </div>
      <div className="page__cards-layout">
        <CardRow cards={chosenMission} />
      </div>
      <div className="page__control-panel">
        <Button onClick={getRandomMissionHandler}>Получить случайную миссию</Button>
        <Button onClick={getChosenMissionHandler}>Это мой выбор</Button>
      </div>
    </main>
  );
};
