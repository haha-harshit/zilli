import Search from "../Search/Search";
import LogIn from "../LogIn/LogIn";
import style from "../../utils/css/CommonHeader.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LogOut from "../LogOut/LogOut";

import "../../utils/css/Search.css"
import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";

const CommonHeader = (props) => {

  const [isLogin, setIsLogin] = useState(false);
  const [isNetworkStatus, setIsNetworkStatus] = useState("🟢")
  let networkStatusDisplay;

  

  useEffect(()=>{
    const interval = setInterval(async () => {
      console.log("checking network...")
      const result = await useOnlineStatus();
      console.log(result)
      setIsNetworkStatus(result ? "🟢" : "🔴");
    }, 3000)

    return() => {
      clearInterval(interval)
      console.log("clearing interval");
    }
  },[])

  return (
    <>
      <div className="common-header" style={{boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"}}>
        <header style={style}>
          <Link to="/">
            <i><h2>Zilli</h2></i>
          </Link>
          <Search searchText={props.searchText} setSearchText={props.setSearchText} searchList={props.searchList} setSearchList={props.setSearchList}/>
          {isLogin ? <LogOut setIsLogin={setIsLogin}/> : <LogIn setIsLogin={setIsLogin}/>}
          network status: {isNetworkStatus}
          
        </header>
      </div>
    </>
  );
};

export default CommonHeader;
