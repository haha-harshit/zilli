import { Link } from "react-router-dom";
import { tabLinkStyle } from "../../utils/css/OfferingTab.css";
const OfferingTab = () => {
  return (
    <>
      <Link to="/online-order">
        <div style={tabLinkStyle} className="tab-link-delivery tab-link">
          <h2>Delivery</h2>
        </div>
      </Link>

      <Link to="/dining">
        <div style={tabLinkStyle} className="tab-link-dining-out tab-link">
          <h2>Dining Out</h2>
        </div>
      </Link>
      <Link to="/night-life-and-clubs">
        <div style={tabLinkStyle} className="tab-link-nightlife tab-link">
          <h2>Nightlife</h2>
        </div>
      </Link>
    </>
  );
};

export default OfferingTab;
