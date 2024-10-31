import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import "./itemlistcontainer.css"

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([])
  const { idCategory } = useParams()

  const getProducts = () => {
    const productsRef = collection( db, "products" )
    getDocs(productsRef)
      .then((dataDb)=> {
        //formateamos correctamente nuestros productos
        const productsDb = dataDb.docs.map((productDb)=> {
          return { id: productDb.id , ...productDb.data() }
        })

        setProducts(productsDb)
      })
  }

  const getProductsByCategory = () => {
    const productsRef = collection(db, "products")
    const queryCategories = query( productsRef, where("category", "==", idCategory) )
    getDocs(queryCategories)
      .then((dataDb)=> {
        const productsDb = dataDb.docs.map((productDb)=>{
          return { id: productDb.id, ...productDb.data() }
        })

        setProducts(productsDb)
      })
  }

  useEffect(() => {
    if(idCategory){
      getProductsByCategory()
    }else{
      getProducts()
    }
  }, [idCategory])


  return (
    <div className="itemlistcontainer">
      <h1>{saludo}</h1>
      <ItemList products={products} />
    </div>
  )
}
export default ItemListContainer