import HeaderTop from "./HeaderTop";
import AppName from "./AppName";
import Tagline from "./Tagline";
import Search from "./Search";

const HeaderSection = () => {
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

export default HeaderSection;
