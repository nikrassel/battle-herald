import { CardRow } from '@//entities/cardRow/CardRow';
import { mapCurrentCustomGame } from '../lib';

export type TCurrentCustomGame = {
  missionInfo: string;
};

export const CurrentCustomGame = ({ missionInfo }: TCurrentCustomGame) => {
  const currentMission = mapCurrentCustomGame(missionInfo);
  return (
    <div className="page__cards-layout">
      <CardRow cards={currentMission} />
    </div>
  );
};
