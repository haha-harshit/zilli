import NavBar from "./Navbar";
import Cart from "../Cart";

const HeaderTop = () => {
  return (
    <header className="landingHeader">
      <div className="nav-container">
        <NavBar />
      </div>
      <div className="cart-container">
        <Cart />
      </div>
    </header>
  );
};

export default HeaderTop;
