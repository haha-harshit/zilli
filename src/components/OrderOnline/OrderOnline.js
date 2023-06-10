import { useState } from "react";
import { NonVeg, PureVeg, RatingAbove4 } from "../Filters/OnlineOrderFilters";
import OfferingTab from "../OfferingTab/OfferingTab";
import ResCard from "../Cards/ResCards/ResCard";
import OfferCard from "../Cards/OfferingCards/OfferCard";
import offerCardDetails from "../../utils/mockData";

// style imports
import filterStyle from "../../utils/css/Filters.css";
import { tabListStyle } from "../../utils/css/OfferingTab.css";
import { OrderOnlineStyle } from "../../utils/css/OrderOnline.css";
import { resStyle } from "../../utils/css/resCard.css";
import restaurantList from "../../utils/resList";

const OrderOnline = () => {
  const [resList, setResList] = useState(restaurantList);
  const [isAbove4FilterOn, setIsAbove4FilterOn] = useState(false);
  return (
    <>
      <div className="section">
        <div style={tabListStyle} className="offering-tab-list">
          <OfferingTab />
        </div>

        <div className="filter-section">
          <RatingAbove4
            setResList={setResList}
            setIsAbove4FilterOn={setIsAbove4FilterOn}
            isAbove4FilterOn={isAbove4FilterOn}
          />
          <PureVeg />
          <NonVeg />
        </div>

        <div style={OrderOnlineStyle} className="order-in-location-layout">
          <h1>Order food online in NIT - 3, Faridabad, India</h1>
        </div>

        <div style={resStyle} className="res-container">
          {resList.map((restaurant) => (
            <ResCard resData={restaurant} key={restaurant.data.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderOnline;
