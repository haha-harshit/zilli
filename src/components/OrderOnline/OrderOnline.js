import { NonVeg, PureVeg, RatingAbove4 } from "../Filters/OnlineOrderFilters";
import offeringTitleStyle from "../../utils/css/OfferingTitle.css";

const OrderOnline = () => {
  return (
    <>
      <div className="section">
        <h1 style={offeringTitleStyle} className="offering-title">
          Order Online
        </h1>
        <div className="filter-section">
          <RatingAbove4 />
          <PureVeg />
          <NonVeg />
        </div>
      </div>
    </>
  );
};

export default OrderOnline;
