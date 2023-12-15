import { InfoCard, InfoCardProps } from '@//shared/ui';

export interface CardRowProps {
  cards: InfoCardProps[];
}

export const CardRow = ({ cards }: CardRowProps) => {
  return (
    <div className="card-row">
      {cards.map((elem, index) => (
        <InfoCard {...elem} key={index} />
      ))}
    </div>
  );
};
