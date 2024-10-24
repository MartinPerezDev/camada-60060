import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

  return (
    <div>
      <h2>Productos en el carrito</h2>
      {
        cart.map((productCart)=> (
          <div key={productCart.id} style={{ display: "flex", justifyContent: "space-around" }}>
            <img src={productCart.image} width={100} alt="" />
            <p>{productCart.name}</p>
            <p>Cantidad: {productCart.quantity}</p>
            <p>Precio c/u: {productCart.price}</p>
            <p>Precio parcial: {productCart.quantity * productCart.price}</p>

            <button onClick={ () => deleteProductById(productCart.id) } >borrar producto</button>
          </div>
        ))
      }

      <p>Precio total: {totalPrice()}</p>
      <button onClick={deleteCart} >Borrar carrito</button>
    </div>
  )
}
export default Cart