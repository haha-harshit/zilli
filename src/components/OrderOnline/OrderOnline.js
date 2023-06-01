import { NonVeg, PureVeg, RatingAbove4 } from "../Filters/OnlineOrderFilters";
import OfferingTab from "../OfferingTab/OfferingTab";
import ResCard from "../Cards/ResCards/ResCard";
import OfferCard from "../Cards/OfferingCards/OfferCard";
import offerCardDetails from "../../utils/mockData";

// style imports
import { tabListStyle } from "../../utils/css/OfferingTab.css";
import { OrderOnlineStyle } from "../../utils/css/OrderOnline.css";
import { resStyle } from "../../utils/css/resCard.css";
import resList from "../../utils/resList";

const OrderOnline = () => {
  return (
    <>
      {/* {console.log(resList)} */}
      <div className="section">
        <div style={tabListStyle} className="offering-tab-list">
          <OfferingTab />
        </div>

        <div className="filter-section">
          <RatingAbove4 />
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
