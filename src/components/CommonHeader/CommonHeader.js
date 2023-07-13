import Search from "../Search/Search";
import LogIn from "../LogIn/LogIn";
import style from "../../utils/css/CommonHeader.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import LogOut from "../LogOut/LogOut";

import "../../utils/css/Search.css"

const CommonHeader = (props) => {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="common-header">
        <header style={style}>
          <Link to="/">
            <i><h2>Zilli</h2></i>
          </Link>
          <Search searchText={props.searchText} setSearchText={props.setSearchText}/>
          {isLogin ? <LogOut setIsLogin={setIsLogin}/> : <LogIn setIsLogin={setIsLogin}/>}
        </header>
      </div>
    </>
  );
};

export default CommonHeader;
