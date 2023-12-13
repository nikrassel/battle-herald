import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { CardRow } from '@//entities/cardRow/CardRow';
import { Button, InfoCardProps, OptionsField } from '@//shared/ui';

import {
  LeviathanMissions,
  TLeviathanMissionChoise,
  getRandomMission,
  leviathanTournamentMissions,
} from './lib';

export const LeviathanGame = () => {
  const [chosenMission, setChosenMission] = useState<InfoCardProps[]>(
    leviathanTournamentMissions.missionA,
  );
  const { control, setValue } = useForm<TLeviathanMissionChoise>();
  const changeMissionHandler = (value: LeviathanMissions) => {
    setValue('choise', value);
    setChosenMission(leviathanTournamentMissions[value]);
  };
  const getRandomMissionHandler = () => {
    const randomMission = getRandomMission();
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
      <div className="page__form-wrapper">
        <Button onClick={getRandomMissionHandler}>Получить случайную миссию</Button>
      </div>
    </main>
  );
};
