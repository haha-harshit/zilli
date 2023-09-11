import HeaderTop from "./HeaderTop";
import AppName from "./AppName";
import Tagline from "./Tagline";
import Search from "../Search/Search";

const LandingHeaderSection = () => {
  return (
    <div className="landingHeaderSection flex justify-center bg-landingHeaderSection bg-cover h-landingHeaderSection-height text-f8f8f8">
      <div className="landingHeaderContainer-main flex flex-col w-landingHeaderContainer-main">
        <HeaderTop />
        <AppName />
        <Tagline />
        <Search />
      </div>
    </div>
  );
};

export default LandingHeaderSection;
