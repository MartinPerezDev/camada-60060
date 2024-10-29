import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PiShoppingCartBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  const quantity = totalQuantity()

  return (
    <Link to="/cart" className="cartwidget" >
      <PiShoppingCartBold className={ quantity === 0 ? "empty-cart" : "icon-cart" } />
      <p className="number-cartwidget">{ quantity >= 1 && quantity }</p>
    </Link>
  )
}
export default CartWidget