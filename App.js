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
