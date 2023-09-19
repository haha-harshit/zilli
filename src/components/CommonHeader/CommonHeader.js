import Search from "../Search/Search";
import LogIn from "../LogIn/LogIn";
// import style from "../../utils/css/CommonHeader.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LogOut from "../LogOut/LogOut";

// import "../../utils/css/Search.css"
import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";
import MobileHeader from "./MobileHeader/MobileHeader";

const CommonHeader = (props) => {

  const [isLogin, setIsLogin] = useState(false);
  const [isNetworkStatus, setIsNetworkStatus] = useState("🟢")
  let networkStatusDisplay;
  // console.log(props.connectionResult)

  useEffect(()=>{
    // const interval = setInterval(async () => {
    //   const result = await useOnlineStatus();
    //   setIsNetworkStatus(result ? "🟢" : "🔴");
    // }, 3000)

    // return() => {
    //   clearInterval(interval)
    //   console.log("clearing interval");
    // }
    console.log(props.isConnectionResult)
  },[])

  return (
    <>
      <div className="shadow-commonHeaderBoxShadow pl-8 pt-4">
        <header className="large_screen_header hidden md:flex justify-around p-8 h-8">
          <Link to="/" className="text-inherit no-underline hover:underline">
            <i><h2>Zilli</h2></i>
          </Link>
          <Search searchText={props.searchText} setSearchText={props.setSearchText} searchList={props.searchList} setSearchList={props.setSearchList}/>
          {isLogin ? <LogOut setIsLogin={setIsLogin}/> : <LogIn setIsLogin={setIsLogin}/>}
        </header>
        <MobileHeader/>
      </div>
    </>
  );
};

export default CommonHeader;
