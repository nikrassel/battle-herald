import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { CardRow } from '@//entities/cardRow/CardRow';
import { InfoCardProps, OptionsField } from '@//shared/ui';

import { LeviathanMissions, TLeviathanMissionChoise, leviathanTournamentMissions } from './lib';

export const LeviathanGame = () => {
  const [chosenMission, setChosenMission] = useState<InfoCardProps[]>(
    leviathanTournamentMissions.missionA,
  );
  const { control, setValue } = useForm<TLeviathanMissionChoise>();
  const changeMissionHandler = (value: LeviathanMissions) => {
    setValue('choise', value);
    setChosenMission(leviathanTournamentMissions[value]);
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
    </main>
  );
};
