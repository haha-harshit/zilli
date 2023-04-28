import OfferCard from "./OfferCard";
import offerCardDetails from "../utils/mockData";

const Body = () => {
  return (
    <>
      <div className="offeringSection section">
        <div className="offeringSection-main">
          {offerCardDetails.map((offerCard) => (
            <OfferCard key={offerCard.id} details={offerCard} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
