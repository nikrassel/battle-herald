import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import { CardRow } from '@//entities/cardRow/CardRow';
import { Button, OptionsField } from '@//shared/ui';
import { localStorageService } from '@//app/localStorage';
import { GameContext } from '@//app/context';

import {
  LeviathanMissions,
  TLeviathanMission,
  TLeviathanMissionChoise,
  TerrainLayouts,
  getRandomMission,
  leviathanTournamentMissions,
  missionOptions,
} from './lib';
import { deployments, missionRules, primaryMissions, terrainLayouts } from '@//shared/tempDB';

export const LeviathanGame = () => {
  const navigate = useNavigate();
  const context = useContext(GameContext);

  const [chosenMission, setChosenMission] = useState<TLeviathanMission>(
    leviathanTournamentMissions.missionA,
  );
  const [chosenTerrainLayout, setChosenTerrainLayout] = useState<TerrainLayouts>(
    TerrainLayouts.layoutOne,
  );

  const { control, setValue } = useForm<TLeviathanMissionChoise>();

  const changeMissionHandler = (value: LeviathanMissions) => {
    setValue('choise', value);
    setChosenMission(leviathanTournamentMissions[value]);
    setChosenTerrainLayout(
      leviathanTournamentMissions[value].terrainLayout[0].value as TerrainLayouts,
    );
  };

  const changeTerrainLayoutHandler = (value: TerrainLayouts) => {
    setValue('terrain', value);
    setChosenTerrainLayout(value);
  };

  const beginNewMissionHandler = (random: boolean) => {
    if (random) {
      const randomMission = getRandomMission();
      localStorageService.setCurrentLeviathanGame([
        ...randomMission.missionName,
        randomMission.terrainLayout,
      ]);
    } else {
      localStorageService.setCurrentLeviathanGame([
        ...chosenMission.missionInfo,
        chosenTerrainLayout,
      ]);
    }
    context?.setIsCurrentGame(true);
    navigate('/currentGame');
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
              options={missionOptions}
              {...field}
              onChange={(event) => changeMissionHandler(event.target.value as LeviathanMissions)}
            />
          )}
        />
        <Controller
          control={control}
          name="terrain"
          defaultValue={TerrainLayouts.layoutOne}
          render={({ field }) => (
            <OptionsField
              label="Выберите раскладку ландшафта"
              id="02"
              options={chosenMission.terrainLayout}
              {...field}
              onChange={(event) => changeTerrainLayoutHandler(event.target.value as TerrainLayouts)}
            />
          )}
        />
      </div>
      <div className="page__cards-layout">
        <CardRow
          cards={[
            primaryMissions[chosenMission.missionInfo[0]],
            missionRules[chosenMission.missionInfo[1]],
            deployments[chosenMission.missionInfo[2]],
            terrainLayouts[chosenTerrainLayout],
          ]}
        />
      </div>
      <div className="page__control-panel">
        <Button onClick={() => beginNewMissionHandler(true)}>Получить случайную миссию</Button>
        <Button onClick={() => beginNewMissionHandler(false)}>Это мой выбор</Button>
      </div>
    </main>
  );
};
