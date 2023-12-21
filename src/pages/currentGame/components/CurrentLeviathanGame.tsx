import { CardRow } from '@//entities/cardRow/CardRow';

import { mapCurrentLeviathanGame } from '../lib';

export type TCurrentLeviathanGameProps = {
  missionId: string;
};

export const CurrentLeviathanGame = ({ missionId }: TCurrentLeviathanGameProps) => {
  const missionInfo = mapCurrentLeviathanGame(missionId);
  return (
    <div className="page__cards-layout">
      <CardRow cards={missionInfo} />
    </div>
  );
};
