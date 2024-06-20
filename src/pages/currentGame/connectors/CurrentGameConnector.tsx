import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { GameContext } from '@//app/context';
import { localStorageService } from '@//app/localStorage';
import { APP_PATHS } from '@//app/lib/constants/APP_PATHS';

import { CurrentCustomGame, CurrentGameControlPanel, CurrentLeviathanGame } from '..';

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
  const context = useContext(GameContext);
  const navigate = useNavigate();
  let currentGame = localStorageService.checkCurrentGame();
  if (!context?.isCurrentGame || !currentGame) {
    navigate(APP_PATHS.main);
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
