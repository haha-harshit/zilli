import { OutdoorSeating, ServesAlcohol } from "../Filters/DiningOutFilters";
import { RatingAbove4o5 } from "../Filters/OnlineOrderFilters";
import { tabListStyle } from "../../utils/css/OfferingTab.css";
import OfferingTab from "../OfferingTab/OfferingTab";
const Dining = (props) => {

  console.log(props.searchText, "dining")

  return (
    <>
      <div className="section">
        <div style={tabListStyle} className="offering-tab-list">
          <OfferingTab />
        </div>

        <div className="filter-section">
          <RatingAbove4o5 />
          <OutdoorSeating />
          <ServesAlcohol />
        </div>

        <div className="something">
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

export default Dining;
