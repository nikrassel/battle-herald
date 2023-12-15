import { useContext } from 'react';

import { GameContext } from '@//app/context';
import { localStorageService } from '@//app/localStorage';
import { CurrentLeviathanGame } from '..';

export const CurrentGameConnector = () => {
  const context = useContext(GameContext);
  const currentGame = localStorageService.checkCurrentGame();
  return (
    <main className="page">
      <h3>Current Game settings</h3>
      {context?.isCurrentGame && currentGame ? (
        <CurrentLeviathanGame missionId={currentGame} />
      ) : (
        <h2>Вы еще не начали игру</h2>
      )}
    </main>
  );
};
