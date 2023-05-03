import React from "react";
import ReactDOM from "react-dom/client";

// components import
import LandingHeaderSection from "./src/components/LandingHeader/LandingHeaderSection";
import LandingBody from "./src/components/LandingBody/Body";
import OrderOnline from "./src/components/OrderOnline/OrderOnline";
import Dining from "./src/components/Dining/Dining";
import NightlifeAndClubs from "./src/components/NightlifeAndClubs/NightlifeAndClubs";
import PageNotFound from "./src/components/PageNotFound/PageNotFound";
import Footer from "./src/components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommonHeader from "./src/components/CommonHeader/CommonHeader";

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
    <>
      <BrowserRouter>
        <div className="appContainer">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LandingHeaderSection />
                  <LandingBody />
                </>
              }
            />
            <Route
              path="/online-order"
              element={
                <>
                  <CommonHeader />
                  <OrderOnline />
                </>
              }
            />
            <Route
              path="/dining"
              element={
                <>
                  <CommonHeader />
                  <Dining />
                </>
              }
            />
            <Route
              path="/night-life-and-clubs"
              element={
                <>
                  <CommonHeader />
                  <NightlifeAndClubs />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <CommonHeader />
                  <PageNotFound />
                </>
              }
            />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
