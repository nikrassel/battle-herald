import { CardRow } from '@//entities/cardRow/CardRow';

import { leviathanTournamentMissions } from '../../leviathanGame/lib';

export type TCurrentLeviathanGameProps = {
  missionId: string;
};

export const CurrentLeviathanGame = ({ missionId }: TCurrentLeviathanGameProps) => {
  const missionInfo = leviathanTournamentMissions[missionId];
  return (
    <div className="page__cards-layout">
      <CardRow cards={missionInfo} />
    </div>
  );
};
