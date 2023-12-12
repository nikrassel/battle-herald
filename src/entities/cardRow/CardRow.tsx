import { InfoCard, InfoCardProps } from '@//shared/ui';

export interface CardRowProps {
  cards: InfoCardProps[];
}

export const CardRow = ({ cards }: CardRowProps) => {
  return (
    <div className="card-row">
      {cards.map((elem) => (
        <InfoCard {...elem} />
      ))}
    </div>
  );
};
