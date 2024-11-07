import { useState } from "react"
import FormCheckout from "./FormCheckout"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import validateForm from "../../utils/validateForm.js"
import { toast } from "react-toastify"

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""
  })
  const [idOrder, setIdOrder] = useState(null)
  const { cart, totalPrice, deleteCart } = useContext(CartContext)

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = async(event) => {
    event.preventDefault()

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice()
    }

    try {
      const response = await validateForm(dataForm)
      console.log(response)
      if(response.status === "error") throw new Error(response.message)
      
      toast.success("Subiendo orden...")
      uploadOrder(order)

    } catch (error) {
      toast.error(error.message)
    }
  }

  const uploadOrder = (newOrder) => {
    const ordersRef = collection(db, "orders")
    addDoc(ordersRef, newOrder)
      .then((response) => setIdOrder(response.id))
      .catch((error) => console.log(error))
      .finally(() => {
        updateStock()
      })
  }

  const updateStock = () => {
    cart.map(({ id, quantity, ...dataProduct }) => {
      const productRef = doc(db, "products", id)
      setDoc(productRef, { ...dataProduct, stock: dataProduct.stock - quantity })
    })

    //una vez finalizada la actualizacion de stock, borramos el carrito
    deleteCart()
  }

  return (
    <div>
      {
        idOrder === null ? (
          <FormCheckout
            dataForm={dataForm}
            handleChangeInput={handleChangeInput}
            handleSubmitForm={handleSubmitForm} />
        ) : (
          <div>
            <h2>Su orden se subio correctamente!😁</h2>
            <p>Porfavor guarde su nro de seguimiento: {idOrder}</p>
            <Link to="/">Volver al inicio</Link>
          </div>
        )
      }
    </div>
  )
}
export default Checkout