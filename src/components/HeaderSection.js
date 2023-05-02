import HeaderTop from "./BaseHeader/HeaderTop";
import AppName from "./BaseHeader/AppName";
import Tagline from "./BaseHeader/Tagline";
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
