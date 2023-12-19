import { useContext } from 'react';

import { Button } from '@//shared/ui';
import { GameContext } from '@//app/context';
import { localStorageService } from '@//app/localStorage';

export const CurrentGameControlPanel = () => {
  const context = useContext(GameContext);
  const endGameHandler = () => {
    localStorageService.endCurrentGame();
    context?.setIsCurrentGame(false);
  };
  return (
    <div className="page__control-panel">
      <Button onClick={endGameHandler}>Завершить игру</Button>
    </div>
  );
};
