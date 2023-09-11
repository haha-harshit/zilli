import NavBar from "./Navbar";
import Cart from "../Cart";

const HeaderTop = () => {
  return (
    <header className="landingHeader flex flex-grow-0.5 justify-between h-0">
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
