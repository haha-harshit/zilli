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
          <span className="offer-card-head">{heading}</span>
          <br />
          <span className="offer-card-sub-info">{info}</span>
        </div>
      </div>
    </>
  );
};

export default OfferCard;
