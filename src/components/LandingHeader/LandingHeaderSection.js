import HeaderTop from "./HeaderTop";
import AppName from "./AppName";
import Tagline from "./Tagline";
import Search from "../Search/Search";

const LandingHeaderSection = () => {
  return (
    <div className="landingHeaderSection flex justify-center bg-landingHeaderSection bg-cover h-[40vh] text-f8f8f8 sm:h-landingHeaderSection-height">
      <div className="landingHeaderContainer-main flex justify-evenly flex-col w-landingHeaderContainer-main">
        <div className="hidden sm:inline-block">
          <HeaderTop />
        </div>
        <div className="">
          <AppName />
        </div>
        <Tagline />
        <Search />
      </div>
    </div>
  );
};

export default LandingHeaderSection;
