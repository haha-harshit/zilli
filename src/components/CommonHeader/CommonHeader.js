import Search from "../Search";
import LogIn from "../LogIn/LogIn";
import style from "../../utils/css/CommonHeader.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import LogOut from "../LogOut/LogOut";

const CommonHeader = () => {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="common-header">
        <header style={style}>
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Search />
          {isLogin ? <LogOut setIsLogin={setIsLogin}/> : <LogIn setIsLogin={setIsLogin}/>}
        </header>
      </div>
    </>
  );
};

export default CommonHeader;
