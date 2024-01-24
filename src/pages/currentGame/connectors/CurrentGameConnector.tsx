import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { GameContext } from '@//app/context';
import { localStorageService } from '@//app/localStorage';
import { APP_PATHS } from '@//app/lib/constants/APP_PATHS';

import { mapLeviathanGameFromSearchParams } from '../lib/models/mapLeviathanGameFromSearchParams';
import { CurrentCustomGame, CurrentGameControlPanel, CurrentLeviathanGame } from '..';
import { mapCustomGameFromSearchParams } from '../lib';

const mainInfo = (currentGame: string | null) => {
  if (currentGame && currentGame.includes('leviathan')) {
    return <CurrentLeviathanGame missionId={currentGame} />;
  }
  if (currentGame && currentGame.includes('custom')) {
    return <CurrentCustomGame missionInfo={currentGame} />;
  }
  return null;
};

export const CurrentGameConnector = () => {
  const [searchParams] = useSearchParams();
  const context = useContext(GameContext);
  const navigate = useNavigate();
  let currentGame = localStorageService.checkCurrentGame();
  if (!context?.isCurrentGame || !currentGame) {
    if (searchParams.size > 0) {
      if (searchParams.get('type') === 'leviathan') {
        const gameSettings = mapLeviathanGameFromSearchParams(
          searchParams.get('objective'),
          searchParams.get('rule'),
          searchParams.get('deployment'),
          searchParams.get('layout'),
        );
        localStorageService.setCurrentLeviathanGame(gameSettings);
      }
      if (searchParams.get('type') === 'custom') {
        const gameSettings = mapCustomGameFromSearchParams(
          searchParams.get('objective'),
          searchParams.get('deployment'),
          searchParams.getAll('rule'),
        );
        localStorageService.setCurrentCustomGame(gameSettings);
      }
      currentGame = localStorageService.checkCurrentGame();
    } else {
      navigate(APP_PATHS.main);
    }
  }
  return (
    <main className="page">
      <h3 className="page__title">Current Game settings</h3>
      {mainInfo(currentGame)}
      <div className="page__control-panel">
        <CurrentGameControlPanel />
      </div>
    </main>
  );
};
