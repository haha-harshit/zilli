const OfferCard = (props) => {
  const { details } = props;
  const { url, heading, info } = details;
  return (
    <>
      <div className="offer-card-layout">
        <div className="offer-card-img-main">
          <img className="offer-card-img" src={url} alt="offer-card-image" />
        </div>
        <div className="offer-card-info">
          <p className="offer-card-title">{heading}</p>
          <p className="offer-card-sub-title">{info}</p>
        </div>
      </div>
    </>
  );
};

export default OfferCard;
