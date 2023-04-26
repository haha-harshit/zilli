import React from "react";
import ReactDOM from "react-dom/client";

// components import
import Header from "./src/components/Header";
import AppName from "./src/components/AppName";
import Tagline from "./src/components/Tagline";
import Search from "./src/components/Search";
import OfferCard from "./src/components/OfferCard";
import Footer from "./src/components/Footer";

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

const offerCardDetails = [
  {
    id: "001",
    url: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg",
    heading: "Online Order",
    info: "Stay home and order online",
  },
  {
    id: "002",
    url: "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg",
    heading: "Dining",
    info: "View the city's favorite dining views",
  },
  {
    id: "003",
    url: "https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg",
    heading: "Nightlife and Clubs",
    info: "Explore the city's top nightlife outlets",
  },
];

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
          {offerCardDetails.map((offerCard) => (
            <OfferCard key={offerCard.id} details={offerCard} />
          ))}
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
