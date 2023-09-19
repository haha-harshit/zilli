import Search from "../Search/Search";
import LogIn from "../LogIn/LogIn";
// import style from "../../utils/css/CommonHeader.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LogOut from "../LogOut/LogOut";

// import "../../utils/css/Search.css"
import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";

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
      <div className="shadow-commonHeaderBoxShadow">
        <header className="flex justify-around p-8 h-8">
          <Link to="/" className="text-inherit no-underline hover:underline">
            <i><h2>Zilli</h2></i>
          </Link>
          <Search searchText={props.searchText} setSearchText={props.setSearchText} searchList={props.searchList} setSearchList={props.setSearchList}/>
          {isLogin ? <LogOut setIsLogin={setIsLogin}/> : <LogIn setIsLogin={setIsLogin}/>}
        </header>
      </div>
    </>
  );
};

export default CommonHeader;
