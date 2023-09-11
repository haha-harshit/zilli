// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="header-nav self-center">
      <ul className="flex p-0">
        <li className="list-none p-header-nav-ul-li">
          <Link to="/about">
            About
          </Link>
        </li>
        <li className="list-none p-header-nav-ul-li">
          <Link to="/contact-us">
            Contact Us
          </Link>
        </li>
        <li className="list-none p-header-nav-ul-li">
          <Link to="/grocery-store">
            Our Grocery store
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
