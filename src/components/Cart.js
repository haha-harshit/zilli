import cartLogo from "../utils/images/food-cart.png";

const Cart = () => {
  return (
    <>
      <img src={cartLogo} alt="cart-logo" id="cart-logo" className="w-12 h-10 self-center" />
    </>
  );
};

export default Cart;
