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

        <div className="something">
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
        </div>
      </div>
    </>
  );
};

export default OrderOnline;
