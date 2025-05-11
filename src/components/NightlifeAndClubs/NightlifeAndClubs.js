import { Distance, PubsAndBars } from "../Filters/NightLifeFilters";
import { RatingAbove4o5 } from "../Filters/OnlineOrderFilters";
import { tabListStyle } from "../../utils/css/OfferingTab.css";
import OfferingTab from "../OfferingTab/OfferingTab";

const NightlifeAndClubs = () => {
  return (
    <>
      <div className="section">
        <div style={tabListStyle} className="offering-tab-list">
          <OfferingTab />
        </div>

        <div className="filter-section">
          <RatingAbove4o5 />
          <Distance />
          <PubsAndBars />
        </div>
        <div className="something"></div>
      </div>
    </>
  );
};

export default NightlifeAndClubs;
