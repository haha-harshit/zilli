import NavBar from "./Navbar";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <NavBar />
      </div>
      <div className="cart-container">
        <Cart />
      </div>
    </header>
  );
};

export default Header;
