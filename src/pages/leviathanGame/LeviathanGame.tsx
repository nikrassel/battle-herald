import { CardRow } from '@//entities/cardRow/CardRow';
import { primaryMissions } from './lib/constants/primaryMissions';

export const LeviathanGame = () => {
  return (
    <main className="page">
      <h3>Leviathan Game settings</h3>
      <div className="page__cards-layout">{/* <CardRow cards={primaryMissions} /> */}</div>
      {/* <InfoCard {...someCard} /> */}
    </main>
  );
};
