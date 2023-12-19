import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { GameContext } from '@//app/context';
import { localStorageService } from '@//app/localStorage';

import { CurrentGameControlPanel, CurrentLeviathanGame } from '..';

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
      {currentGame && <CurrentLeviathanGame missionId={currentGame} />}
      <div className="page__control-panel">
        <CurrentGameControlPanel />
      </div>
    </main>
  );
};
