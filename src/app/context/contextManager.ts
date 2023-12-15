import { createContext } from 'react';

export interface IGameContext {
  isCurrentGame: boolean;
  setIsCurrentGame: (status: boolean) => void;
}

export const GameContext = createContext<IGameContext | null>(null);
