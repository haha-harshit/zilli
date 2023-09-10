import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// custom hook imports
import useOnlineStatus from "./src/utils/customHooks/useOnlineStatus";
import LandingHeaderSection from "./src/components/LandingHeader/LandingHeaderSection"
// import Body from "./src/components/LandingBody/Body";
import Footer from "./src/components/Footer/Footer";
// dynamic components import
const CommonHeader = lazy(()=>import("./src/components/CommonHeader/CommonHeader"))
const About = lazy(()=>import("./src/components/About/About"))
const GroceryStore = lazy(()=>import("./src/components/GroceryStore/GroceryStore"))
const OrderOnline = lazy(()=>import("./src/components/OrderOnline/OrderOnline"))
const Dining = lazy(()=>import("./src/components/Dining/Dining"))
const NightlifeAndClubs = lazy(()=>import("./src/components/NightlifeAndClubs/NightlifeAndClubs"))
const ResMainEntry = lazy(()=>import("./src/components/ResMainEntry/ResMainEntry"))
const PageNotFound = lazy(()=>import("./src/components/PageNotFound/PageNotFound"))
// const Footer = lazy(()=>import("./src/components/Footer/Footer"))
// const LandingHeaderSection = lazy(()=>import("./src/components/LandingHeader/LandingHeaderSection"))
// const LandingBody = lazy(()=>import("./src/components/LandingBody/Body"))
const Body = lazy(()=>import("./src/components/LandingBody/Body"))


const App = () => {
  const [searchText, setSearchText] = useState("")
  const [searchList, setSearchList] = useState([])
  const [isConnectionResult, setIsConnectionResult] = useState(true)
  
  const checkConnection = setInterval(async ()=> {
    const connectionResult = await useOnlineStatus();
    if(!connectionResult){
      console.log("network not ok")
      console.log(connectionResult, "in app.js f wala ")
      // return(
        //   <>
        //     <h1>Looks like you're offline! Check your internet connection</h1>
        //   </>
        //   )
      }else{
        console.log("ok")
        console.log(connectionResult, "in app.js")
      }
      setIsConnectionResult(connectionResult);
    }, 10000)
    console.log(isConnectionResult, "updated")
    
  useEffect(()=>{
    return()=>{
      clearInterval(checkConnection);
    }
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
                  <Body isConnectionResult={isConnectionResult}/>
                </>
              }
            />

            <Route
              path="/about"
              element={
                <>
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <CommonHeader
                      searchText={searchText} 
                      setSearchText={setSearchText}
                      searchList={searchList}
                      setSearchList={setSearchList}
                      isConnectionResult={isConnectionResult}
                    />
                    <About/>
                  </Suspense>
                </>
              }
            
            />    

            <Route
              path="/grocery-store"
              element={
                <>
                  <Suspense fallback={<h2>Loading...</h2>}>
                    <CommonHeader
                      searchText={searchText} 
                      setSearchText={setSearchText}
                      searchList={searchList}
                      setSearchList={setSearchList}
                      isConnectionResult={isConnectionResult}
                    />
                    <GroceryStore/>
                  </Suspense>
                </>
              }
            
            />

            <Route
              path="/online-order"
              element={
                <>
                  <Suspense fallback={<h1>Loading...</h1>}>
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
                  </Suspense>
                </>
              }
            />

            <Route
              path="/dining"
              element={
                <>
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <CommonHeader
                      searchText={searchText}
                      setSearchText={setSearchText}
                      isConnectionResult={isConnectionResult}
                    />
                    <Dining
                      searchText={searchText}
                      isConnectionResult={isConnectionResult}
                    />
                  </Suspense>
                </>
              }
            />
            <Route
              path="/night-life-and-clubs"
              element={
                <>
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <CommonHeader
                      searchText={searchText}
                      setSearchText={setSearchText}
                      isConnectionResult={isConnectionResult} 
                    />
                    <NightlifeAndClubs
                      searchText={searchText}
                      isConnectionResult={isConnectionResult}  
                    />
                  </Suspense>
                </>
              }
            />
            <Route
              path="/restaurant/:resId"
              element={
                <>
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <CommonHeader
                      searchText={searchText}
                      setSearchText={setSearchText}
                      isConnectionResult={isConnectionResult}
                    />
                    <ResMainEntry isConnectionResult={isConnectionResult}/>
                  </Suspense>
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <CommonHeader />
                    <PageNotFound isConnectionResult={isConnectionResult}/>
                  </Suspense>
                </>
              }
            />
          </Routes>

          <Suspense>
            <Footer isConnectionResult={isConnectionResult}/>
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
