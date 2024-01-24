import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@//shared/ui';
import { GameContext } from '@//app/context';
import { localStorageService } from '@//app/localStorage';
import { APP_PATHS } from '@//app/lib/constants/APP_PATHS';

export const CurrentGameControlPanel = () => {
  const navigate = useNavigate();
  const context = useContext(GameContext);
  const endGameHandler = () => {
    localStorageService.endCurrentGame();
    context?.setIsCurrentGame(false);
    navigate(APP_PATHS.main);
  };
  return (
    <div className="page__control-panel">
      <Button onClick={endGameHandler}>Завершить игру</Button>
    </div>
  );
};
