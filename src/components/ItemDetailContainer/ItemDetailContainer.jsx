import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { idProduct } = useParams()

  useEffect( ()=> {
    getProducts()
      .then( (data)=> {
        const findProduct = data.find( (product)=> product.id === idProduct )
        setProduct(findProduct)
      })
  }, [idProduct] )

  return (
    <ItemDetail product={product} />
  )
}
export default ItemDetailContainer