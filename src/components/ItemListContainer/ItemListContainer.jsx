import ItemList from "./ItemList"
import useProducts from "../../hooks/useProducts"
import Loading from "../Loading/Loading"
import "./itemlistcontainer.css"

const ItemListContainer = ({ saludo }) => {
  const { products, loading } = useProducts()

  return (
    <div className="itemlistcontainer">
      <h1>{saludo}</h1>
      {
        loading === true ? <Loading /> : <ItemList products={products} />
      }
    </div>
  )
}
export default ItemListContainer