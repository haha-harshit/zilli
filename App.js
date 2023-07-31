import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
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
  const [searchText, setSearchText] = useState("")
  const [searchList, setSearchList] = useState([])

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
                  <CommonHeader searchText={searchText} setSearchText={setSearchText} searchList={searchList} setSearchList={setSearchList}/>
                  <OrderOnline searchText={searchText}/>
                </>
              }
            />

            <Route
              path="/dining"
              element={
                <>
                  <CommonHeader searchText={searchText} setSearchText={setSearchText}/>
                  <Dining searchText={searchText}/>
                </>
              }
            />
            <Route
              path="/night-life-and-clubs"
              element={
                <>
                  <CommonHeader searchText={searchText} setSearchText={setSearchText}/>
                  <NightlifeAndClubs searchText={searchText}/>
                </>
              }
            />
            <Route
              path="/restaurant/:resId"
              element={
                <>
                  <CommonHeader searchText={searchText} setSearchText={setSearchText}/>
                  <NightlifeAndClubs searchText={searchText}/>
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                {/* PAGE NOT FOUND HEADER TO BE ADDED */}
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
