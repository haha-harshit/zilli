import Search from "../Search";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
import style from "../../utils/css/CommonHeader.css";
import { Link } from "react-router-dom";

const CommonHeader = () => {
  return (
    <>
      <div className="common-header">
        <header style={style}>
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Search />
          <LogIn />
          <SignUp />
        </header>
      </div>
    </>
  );
};

export default CommonHeader;
