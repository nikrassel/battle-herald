import { CardRow } from '@//entities/cardRow/CardRow';
import { primaryMissions } from './lib/constants/primaryMissions';

export const LeviathanGame = () => {
  return (
    <main className="page">
      <h3>Leviathan Game settings</h3>
      <CardRow cards={primaryMissions} />
      {/* <InfoCard {...someCard} /> */}
    </main>
  );
};
