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

const App = () => (
  <div id="appContainer">
    <h1>Hello World</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
