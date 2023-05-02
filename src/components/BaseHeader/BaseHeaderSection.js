import HeaderTop from "./HeaderTop";
import AppName from "./AppName";
import Tagline from "./Tagline";
import Search from "../Search";

const BaseHeaderSection = () => {
  return (
    <div className="headerSection">
      <div className="headerContainer-main">
        <HeaderTop />
        <AppName />
        <Tagline />
        <Search />
      </div>
    </div>
  );
};

export default BaseHeaderSection;
