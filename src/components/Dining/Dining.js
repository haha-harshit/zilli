import { OutdoorSeating, ServesAlcohol } from "../Filters/DiningOutFilters";
import { RatingAbove4 } from "../Filters/OnlineOrderFilters";
import offeringTitleStyle from "../../utils/css/OfferingTitle.css";
const Dining = () => {
  return (
    <>
      <div className="section">
        <h1 style={offeringTitleStyle} className="offering-title">
          Dining
        </h1>
        <div className="filter-section">
          <RatingAbove4 />
          <OutdoorSeating />
          <ServesAlcohol />
        </div>
      </div>
    </>
  );
};

export default Dining;
