import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { getProducts, getProductById, addProduct, modProduct, deleteProductById } from "../../utils/fetchApi.js"
import "./itemlistcontainer.css"

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([])

  const newProduct = {
    nombre: "Pantalon Dorian",
    descripcion: "",
    precio: 720,
    stock: 5,
    imagen: "/img/pantalon-h.jpg",
    categoria: "pantalones"
  }

  const mod = {
    precio: 15000
  }

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))

    getProductById(1)
      .then((data) => console.log(data))
  }, [])


  const clickEvento = () => {
    deleteProductById(1)
      .then((data)=> setProducts(data))
    /*
    modProduct(2, mod)
      .then((data)=> setProducts(data) )
    addProduct(newProduct)
      .then((data)=> setProducts(data) )
      */
  }

  return (
    <div className="itemlistcontainer">
      <h1>{saludo}</h1>
      <button onClick={clickEvento} >Eliminar</button>
      <ItemList products={products} />
    </div>
  )
}
export default ItemListContainer