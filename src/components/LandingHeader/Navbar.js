// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="header-nav">
      <ul>
        {/* <Link to="/"> */}
        {/* </Link> */}
        <li>About</li>
        <li>Contact Us</li>
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
