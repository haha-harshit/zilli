import OfferCard from "../Cards/OfferingCards/OfferCard";
import {offerCardDetails} from "../../utils/mockData";
import Collections from "../Collection/Collections";
import OrderOnline from "../OrderOnline/OrderOnline";
import Dining from "../Dining/Dining";
import NightlifeAndClubs from "../NightlifeAndClubs/NightlifeAndClubs";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";

const Body = () => {
  return (
    <>
      {/* order-dining-nightlife cards */}

      <div className="offeringSection section flex flex-col sm:w-my-width p-8 m-auto justify-center z-2 relative mt-6">
        <div className="offeringSection-main flex justify-center flex-wrap w-w-inherit lg:justify-start">
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

export default Body;
