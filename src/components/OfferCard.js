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
          <div className="offer-card-head">{heading}</div>
          <div className="offer-card-sub-info">{info}</div>
        </div>
      </div>
    </>
  );
};

export default OfferCard;
