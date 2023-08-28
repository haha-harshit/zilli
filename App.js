import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

// components import
import LandingHeaderSection from "./src/components/LandingHeader/LandingHeaderSection";
import LandingBody from "./src/components/LandingBody/Body"
import OrderOnline from "./src/components/OrderOnline/OrderOnline";
import Dining from "./src/components/Dining/Dining";
import NightlifeAndClubs from "./src/components/NightlifeAndClubs/NightlifeAndClubs";
import PageNotFound from "./src/components/PageNotFound/PageNotFound";
import Footer from "./src/components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommonHeader from "./src/components/CommonHeader/CommonHeader";
// import ResMenu from "./src/components/ResMainEntry/ResMainEntry";
import ResMainEntry from "./src/components/ResMainEntry/ResMainEntry";
import useOnlineStatus from "./src/utils/customHooks/useOnlineStatus";

const App = () => {
  const [searchText, setSearchText] = useState("")
  const [searchList, setSearchList] = useState([])
  const[isConnectionResult, setIsConnectionResult] = useState(true)
  let connectionResult

  const checkConnection = setInterval(async ()=> {
    connectionResult = await useOnlineStatus();
    setIsConnectionResult(connectionResult);
    if(!isConnectionResult){
      console.log("network not ok")
      // return(
      //   <>
      //     <h1>Looks like you're offline! Check your internet connection</h1>
      //   </>
      //   )
    }else{
      console.log("ok")
      console.log(isConnectionResult, "in app.js")
    }
  }, 10000)

  useEffect(()=>{
    // return()=>{
    //   clearInterval(checkConnection);
    // }
  }, [])

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
                  <LandingBody isConnectionResult={isConnectionResult}/>
                </>
              }
            />

            <Route
              path="/online-order"
              element={
                <>
                  <CommonHeader
                    searchText={searchText} 
                    setSearchText={setSearchText}
                    searchList={searchList}
                    setSearchList={setSearchList}
                    isConnectionResult={isConnectionResult}
                  />
                  <OrderOnline
                    searchText={searchText}
                    isConnectionResult={isConnectionResult}
                  />
                </>
              }
            />

            <Route
              path="/dining"
              element={
                <>
                  <CommonHeader
                    searchText={searchText}
                    setSearchText={setSearchText}
                    isConnectionResult={isConnectionResult}
                  />
                  <Dining
                    searchText={searchText}
                    isConnectionResult={isConnectionResult}
                  />
                </>
              }
            />
            <Route
              path="/night-life-and-clubs"
              element={
                <>
                  <CommonHeader
                    searchText={searchText}
                    setSearchText={setSearchText}
                    isConnectionResult={isConnectionResult} 
                  />
                  <NightlifeAndClubs
                    searchText={searchText}
                    isConnectionResult={isConnectionResult}  
                  />
                </>
              }
            />
            <Route
              path="/restaurant/:resId"
              element={
                <>
                  <CommonHeader
                    searchText={searchText}
                    setSearchText={setSearchText}
                    isConnectionResult={isConnectionResult}
                  />
                  <ResMainEntry isConnectionResult={isConnectionResult}/>
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                {/* PAGE NOT FOUND HEADER TO BE ADDED */}
                  <CommonHeader />
                  <PageNotFound isConnectionResult={isConnectionResult}/>
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
