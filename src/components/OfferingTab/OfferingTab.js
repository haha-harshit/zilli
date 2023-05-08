import { Link, NavLink } from "react-router-dom";
import { tabLinkStyle } from "../../utils/css/OfferingTab.css";
import tabLinkDeliveryImgBw from "../../utils/images/delivery-man-bw.png";
import tabLinkDeliveryImgColor from "../../utils/images/delivery-man-color.png";
import tabLinkDiningImgBw from "../../utils/images/dine-out-bw.png";
import tabLinkDiningImgColor from "../../utils/images/dine-out-color.png";
import tabLinkNightlifeImgBw from "../../utils/images/beer-bw.png";
import tabLinkNightlifeImgColor from "../../utils/images/beer-color.png";

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
          <h2 className="tab-link-title">
            <div className="tab-link-delivery-img">
              <img src={tabLinkDeliveryImgBw} />
            </div>
            <div className="link-title">Delivery</div>
          </h2>
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
