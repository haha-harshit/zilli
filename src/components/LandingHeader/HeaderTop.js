import NavBar from "./Navbar";
import Cart from "../Cart";

const HeaderTop = () => {
  return (
    <header className="landingHeader flex justify-between">
      <div className="nav-container flex">
        <NavBar />
      </div>
      <div className="cart-container flex">
        <Cart />
      </div>
    </header>
  );
};

export default HeaderTop;
