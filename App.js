import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/images/app-logo.png";
import cartLogo from "./assets/images/food-cart.png";
// import ZilliLogo from "./assets/images/";

// layout
/*
App
- Header Component
  - Logo
  - Navbar
  - Cart

- Body Component
  - SECTION 1
    -> Name(Zilli)
    -> Tagline
    -> Search

  - SECTION 2
    -> Offering cards(order online, Dine-in, NightLife and Clubs)

  - SECTION 3
    -> Collections(Curated list of restaurants, cafeteria, clubs and bars)

  - SECTION 4
    -> Poplular locations around Delhi NCR

  - SECTION 5
    -> Get Zilli app link to download

  - SECTION 6
    -> Accordion for 'Explore near options' or FAQs

- Footer Component
  - Copyright
  - About
  - Privacy Policy
  - Contact Information
  - Social Media Links

*/

// Logo Component
const Logo = () => {
  return (
    <>
      <img src={logo} alt="-logo" id="logo" />
    </>
  );
};

// Navbar Component
const NavBar = () => {
  return (
    <nav className="header-nav">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

// Cart Component
const Cart = () => {
  return (
    <>
      <img src={cartLogo} alt="cart-logo" id="cart-logo" />
    </>
  );
};

// Header Component
const Header = () => {
  return (
    <header className="header">
      {/* <div className="logo-container">
        <Logo />
      </div> */}
      <div className="nav-container">
        <NavBar />
      </div>
      <div className="cart-container">
        <Cart />
      </div>
    </header>
  );
};

const AppName = () => {
  return (
    <div className="app-name">
      zilli
      {/* <img src={ZilliLogo} alt="app-name" /> */}
    </div>
  );
};

const Tagline = () => {
  return <div className="tagline">Discover the best food & drinks</div>;
};

const Search = () => {
  return (
    <div className="search-box">
      <h3>Search</h3>
    </div>
  );
};

const Card = () => {
  return (
    <>
      <div className="card-layout"></div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          {" "}
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            {" "}
            Freepik{" "}
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com'
          </a>
        </div>
      </footer>
    </>
  );
};

const App = () => {
  return (
    <div className="appContainer">
      {/* HEADER SECTION */}
      <div className="headerSection section">
        <div className="headerContainer-main">
          <Header />
          <AppName />
          <Tagline />
          <Search />
        </div>
      </div>

      {/* OFFERINGS CARD SECTION */}
      <div className="offeringSection section">
        <div className="offeringSection-main">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div className="footerSection section">
        <div className="footerSection-main">
          <Footer />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
