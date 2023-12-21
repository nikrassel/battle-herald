import { InfoCard, InfoCardProps } from '@//shared/ui';

export interface CardRowProps {
  cards: InfoCardProps[];
}

export const CardRow = ({ cards }: CardRowProps) => {
  return (
    <ul className="card-list">
      {cards.map((elem, index) => (
        <li key={index} className="card-list__item">
          <InfoCard {...elem} />
        </li>
      ))}
    </ul>
  );
};
