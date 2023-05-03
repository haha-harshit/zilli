import { Distance, PubsAndBars } from "../Filters/NightLifeFilters";
import { RatingAbove4 } from "../Filters/OnlineOrderFilters";
import offeringTitleStyle from "../../utils/css/OfferingTitle.css";

const NightlifeAndClubs = () => {
  return (
    <>
      <div className="section">
        <h1 style={offeringTitleStyle} className="offering-title">
          NightLife and Clubs
        </h1>
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
