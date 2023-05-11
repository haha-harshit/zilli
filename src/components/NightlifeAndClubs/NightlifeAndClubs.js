import { Distance, PubsAndBars } from "../Filters/NightLifeFilters";
import { RatingAbove4 } from "../Filters/OnlineOrderFilters";
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
          <RatingAbove4 />
          <Distance />
          <PubsAndBars />
        </div>
      </div>
    </>
  );
};

export default NightlifeAndClubs;
