// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="header-nav">
      <ul>
        {/* <Link to="/"> */}
        {/* </Link> */}
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact-us">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/grocery-store">
            Our Grocery store
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
