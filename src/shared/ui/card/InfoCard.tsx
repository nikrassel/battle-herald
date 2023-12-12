export type TCardParagraph = {
  paragraphTitle: string;
  paragraphBody: string[];
};

export interface InfoCardProps {
  cardType: string;
  cardTitle: string;
  cardContent: TCardParagraph[];
}

export const InfoCard = ({ cardType, cardTitle, cardContent }: InfoCardProps) => {
  return (
    <div className="info-card">
      <div className="info-card__head">
        <span className="info-card__type">{cardType}</span>
        <h4 className="info-card__title">{cardTitle}</h4>
      </div>
      <div className="info-card__body">
        {cardContent.map((elem) => (
          <div className="info-card-paragraph">
            <h5 className="info-card-paragraph__title">{elem.paragraphTitle}</h5>
            {elem.paragraphBody.map((paragraph) => (
              <p className="info-card-paragraph__body">{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
