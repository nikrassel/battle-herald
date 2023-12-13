export type TCardParagraph = {
  paragraphTitle?: string;
  paragraphBody: string[];
};

export interface InfoCardProps {
  cardType: string;
  cardTitle: string;
  cardContent: TCardParagraph[];
  cardImage?: string;
}

export const InfoCard = ({ cardType, cardTitle, cardContent, cardImage }: InfoCardProps) => {
  return (
    <div className="info-card">
      <div className="info-card__head">
        <span className="info-card__type">{cardType}</span>
        <h4 className="info-card__title">{cardTitle}</h4>
      </div>
      <div className="info-card__body">
        {cardImage ? (
          <img src={cardImage} />
        ) : (
          cardContent.map((elem, index) => (
            <div className="info-card-paragraph" key={index}>
              {!elem.paragraphTitle ? null : (
                <div className="info-card-paragraph__title-background">
                  <h5 className="info-card-paragraph__title">{elem.paragraphTitle}</h5>
                </div>
              )}
              {elem.paragraphBody.map((paragraph, index) => (
                <p className="info-card-paragraph__body" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
