import HeaderTop from "./HeaderTop";
import AppName from "./AppName";
import Tagline from "./Tagline";
import Search from "../Search";

const LandingHeaderSection = () => {
  return (
    <div className="landingHeaderSection">
      <div className="landingHeaderContainer-main">
        <HeaderTop />
        <AppName />
        <Tagline />
        <Search />
      </div>
    </div>
  );
};

export default LandingHeaderSection;
