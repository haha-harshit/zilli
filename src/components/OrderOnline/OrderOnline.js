import { NonVeg, PureVeg, RatingAbove4 } from "../Filters/OnlineOrderFilters";
import { tabListStyle } from "../../utils/css/OfferingTab.css";
import OfferingTab from "../OfferingTab/OfferingTab";
import OfferCard from "../OfferingCards/OfferCard";
import offerCardDetails from "../../utils/mockData";

const OrderOnline = () => {
  return (
    <>
      <div className="section">
        <div style={tabListStyle} className="offering-tab-list">
          <OfferingTab />
        </div>

        <div className="filter-section">
          <RatingAbove4 />
          <PureVeg />
          <NonVeg />
        </div>

        <div className="offeringSection section">
          <div className="offeringSection-main">
            {offerCardDetails.map((offerCardItem) => (
              <OfferCard key={offerCardItem.id} details={offerCardItem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderOnline;
