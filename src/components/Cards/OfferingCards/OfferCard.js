import { Link } from "react-router-dom";

const OfferCard = (props) => {
  const { details } = props;
  const { url, heading, info, type } = details;
  return (
    <>
      <div className="offer-card-layout h-[15rem] w-[21rem] border-[0.01rem] border-solid border-[#E3E3E3] rounded-[0.7rem] m-[2%]">
        <Link to={type} className="no-underline">
          <div className="offer-card-img-main h-[65%]">
            <img className="offer-card-img h-full w-full object-cover rounded-t-xl rounded-tr-xl" src={url} alt="offer-card-image" />
          </div>
          <div className="offer-card-info p-[0.7rem]">
            <p className="offer-card-title text-xl font-medium text-[#363636] sm:text-[1.5rem] lg:text-[1.3rem]">{heading}</p>
            <p className="offer-card-sub-title font-normal decoration-[none] text-[#4F4F4F] sm:text-[1.2rem] lg:text-[1rem]">{info}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default OfferCard;
