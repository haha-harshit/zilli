import NavBar from "./Navbar";
import Cart from "./Cart";

const HeaderTop = () => {
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

export default HeaderTop;
