import { Link } from "react-router-dom";
import { tabLinkStyle } from "../../utils/css/OfferingTab.css";
const OfferingTab = () => {
  return (
    <>
      <Link to="/online-order" className="tab-link">
        <div style={tabLinkStyle} className="tab-link-delivery ">
          <h2 className="tab-link-title">Delivery</h2>
          <hr className="hr-below-tablink" />
        </div>
      </Link>

      <Link to="/dining" className="tab-link">
        <div style={tabLinkStyle} className="tab-link-dining-out">
          <h2 className="tab-link-title">Dining Out</h2>
          <hr className="hr-below-tablink" />
        </div>
      </Link>
      <Link to="/night-life-and-clubs" className="tab-link">
        <div style={tabLinkStyle} className="tab-link-nightlife">
          <h2 className="tab-link-title">Nightlife</h2>
          <hr className="hr-below-tablink" />
        </div>
      </Link>
    </>
  );
};

export default OfferingTab;
