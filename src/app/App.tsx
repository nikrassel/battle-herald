import { useEffect, useState } from 'react';

import { Header } from '@widgets/header';

import { GameContext, IGameContext } from './context';
import { Router } from './Router';
import './index.css';
import { localStorageService } from './localStorage';

function App() {
  const [isCurrentGame, setIsCurrentGame] = useState<IGameContext['isCurrentGame']>(false);
  useEffect(() => {
    if (localStorageService.checkCurrentGame()) {
      setIsCurrentGame(true);
    }
  }, []);
  return (
    <GameContext.Provider value={{ isCurrentGame, setIsCurrentGame }}>
      <Header />
      <div className="container">
        <Router />
      </div>
    </GameContext.Provider>
  );
}

export default App;
