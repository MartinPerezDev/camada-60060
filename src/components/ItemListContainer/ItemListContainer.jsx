import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"
import "./itemlistcontainer.css"

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([])
  const { idCategory } = useParams()

  useEffect(() => {
    getProducts()
      .then((data) => {
        if(idCategory){
          //filtramos la data por esa categoria
          const filterProducts = data.filter( (product)=> product.category === idCategory )
          setProducts(filterProducts)
        }else{
          //guardamos todos los productos
          setProducts(data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        console.log("Finalizo la promesa")
      })
  }, [idCategory])


  return (
    <div className="itemlistcontainer">
      <h1>{saludo}</h1>
      <ItemList products={products} />
    </div>
  )
}
export default ItemListContainer