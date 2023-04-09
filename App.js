import React from "react";
import ReactDOM from "react-dom/client";

// layout
/*
App
- Header Component
  - Logo
  - Navbar

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
      <img
        src="https://cdn-icons-png.flaticon.com/512/649/649438.png"
        alt="-logo"
        id="logo"
      />
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
      <img
        src="https://cdn-icons-png.flaticon.com/512/1250/1250712.png?w=740&t=st=1681030436~exp=1681031036~hmac=ac0bd375fd16ddd11e7d769aed3c5529d684eaa6d5edffcf2a15c250105e38d8"
        alt="cart-logo"
        id="cart-logo"
      />
    </>
  );
};

// Header Component
const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="nav-container">
        <NavBar />
      </div>
      <div className="cart-container">
        <Cart />
      </div>
    </header>
  );
};

const App = () => {
  return (
    <div class="appContainer">
      <div className="headerContainer-main">
        <Header />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
