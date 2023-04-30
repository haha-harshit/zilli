import OfferCard from "./OfferCard";
import offerCardDetails from "../utils/mockData";
import Collections from "./Collection/Collections";

const Body = () => {
  return (
    <>
      {/* order-dining-nightlife cards */}
      <div className="offeringSection section">
        <div className="offeringSection-main">
          {offerCardDetails.map((offerCard) => (
            <OfferCard key={offerCard.id} details={offerCard} />
          ))}
        </div>
      </div>

      {/* Collections */}
      <Collections />
    </>
  );
};

export default Body;
