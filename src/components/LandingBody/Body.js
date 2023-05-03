import OfferCard from "../OfferingCards/OfferCard";
import offerCardDetails from "../../utils/mockData";
import Collections from "../Collection/Collections";
import OrderOnline from "../OrderOnline/OrderOnline";
import Dining from "../Dining/Dining";
import NightlifeAndClubs from "../NightlifeAndClubs/NightlifeAndClubs";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const LandingBody = () => {
  return (
    <>
      {/* order-dining-nightlife cards */}

      <div className="offeringSection section">
        <div className="offeringSection-main">
          {offerCardDetails.map((offerCardItem) => (
            <OfferCard key={offerCardItem.id} details={offerCardItem} />
          ))}
        </div>
      </div>

      {/* Collections */}
      <Collections />
    </>
  );
};

export default LandingBody;
