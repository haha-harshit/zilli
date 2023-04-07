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

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

// Logo Component
const Logo = () => {
  return (
    <>
      <img
        className="logo"
        src="https://cdn-icons-png.flaticon.com/512/649/649438.png"
        alt="-logo"
        id="logo"
        width={"50px"}
        height={"50px"}
      />
    </>
  );
};

// Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="nav-container">
        <NavBar />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div class="appContainer">
      <div className="headerContainer">
        <Header />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
