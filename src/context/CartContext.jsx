import { createContext, useState } from "react";

//creamos un contexto llamado CartContext
const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  

  return(
    <CartContext.Provider value={ { cart } } >
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }

