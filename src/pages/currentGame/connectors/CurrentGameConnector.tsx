import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { GameContext } from '@//app/context';
import { localStorageService } from '@//app/localStorage';

import { CurrentCustomGame, CurrentGameControlPanel, CurrentLeviathanGame } from '..';
import { isStringArray } from '../lib';

const mainInfo = (currentGame: string | string[] | null) => {
  if (currentGame && typeof currentGame === 'string') {
    return <CurrentLeviathanGame missionId={currentGame} />;
  }
  if (currentGame && isStringArray(currentGame)) {
    return <CurrentCustomGame missionInfo={currentGame} />;
  }
  return null;
};

export const CurrentGameConnector = () => {
  const context = useContext(GameContext);
  const navigate = useNavigate();
  const currentGame = localStorageService.checkCurrentGame();
  if (!context?.isCurrentGame || !currentGame) {
    navigate('/');
  }
  return (
    <main className="page">
      <h3>Current Game settings</h3>
      {mainInfo(currentGame)}
      <div className="page__control-panel">
        <CurrentGameControlPanel />
      </div>
    </main>
  );
};
