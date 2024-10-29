import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

  //Early return
  if(cart.length === 0){
    return(
      <div>
        <h2>No hay productos en el carrito 😥</h2>
        <Link to="/" >Volver al inicio</Link>
      </div>
    )
  }

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