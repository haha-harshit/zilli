import React from "react";
import ReactDOM from "react-dom/client";

// components import
import HeaderSection from "./src/components/HeaderSection";
import Body from "./src/components/Body";
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

const App = () => {
  return (
    <div className="appContainer">
      {/* HEADER SECTION */}
      <HeaderSection />

      {/* OFFERINGS CARD SECTION */}
      <Body />

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
