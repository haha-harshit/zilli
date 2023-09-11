import { Link } from "react-router-dom";

const OfferCard = (props) => {
  const { details } = props;
  const { url, heading, info, type } = details;
  return (
    <>
      <div className="offer-card-layout h-[15rem] w-[21rem] border-[0.01rem] border-solid border-[rgb(227, 227, 227)] rounded-[0.7rem] m-[2%]">
        <Link to={type} className="decoration-[none]">
          <div className="offer-card-img-main h-[65%]">
            <img className="offer-card-img h-full w-full object-cover rounded-t-xl rounded-tr-xl" src={url} alt="offer-card-image" />
          </div>
          <div className="offer-card-info p-[0.7rem]">
            <p className="offer-card-title text-xl font-medium text-[rgb(54, 54, 54)]">{heading}</p>
            <p className="offer-card-sub-title font-normal text-[rgb(79, 79, 79)]">{info}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default OfferCard;
