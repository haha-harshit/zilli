import OfferCard from "./OfferCard";

const offerCardDetails = [
  {
    id: "001",
    url: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg",
    heading: "Online Order",
    info: "Stay home and order online",
  },
  {
    id: "002",
    url: "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg",
    heading: "Dining",
    info: "View the city's favorite dining views",
  },
  {
    id: "003",
    url: "https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg",
    heading: "Nightlife and Clubs",
    info: "Explore the city's top nightlife outlets",
  },
];

const CardSection = () => {
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

export default CardSection;
