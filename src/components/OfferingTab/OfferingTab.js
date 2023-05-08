import { Link, NavLink } from "react-router-dom";
import { tabLinkStyle } from "../../utils/css/OfferingTab.css";
const OfferingTab = () => {
  return (
    <>
      <NavLink
        to="/online-order"
        replace
        className="tab-link"
        activeClassName="active"
      >
        <div style={tabLinkStyle} className="tab-link-delivery ">
          <h2 className="tab-link-title">Delivery</h2>
          <hr className="hr-below-tablink" />
        </div>
      </NavLink>

      <NavLink
        to="/dining"
        replace
        className="tab-link"
        activeClassName="active"
      >
        <div style={tabLinkStyle} className="tab-link-dining-out">
          <h2 className="tab-link-title">Dining Out</h2>
          <hr className="hr-below-tablink" />
        </div>
      </NavLink>

      <NavLink
        to="/night-life-and-clubs"
        replace
        className="tab-link"
        activeClassName="active"
      >
        <div style={tabLinkStyle} className="tab-link-nightlife">
          <h2 className="tab-link-title">Nightlife</h2>
          <hr className="hr-below-tablink" />
        </div>
      </NavLink>
    </>
  );
};

export default OfferingTab;
