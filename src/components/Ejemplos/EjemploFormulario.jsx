import { useState } from "react"

const EjemploFormulario = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangeAddress = (event) => {
    setAddress(event.target.value)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    const user = { name, email, address }

    console.log(user)
  }

  return (
    <form onSubmit={handleSubmitForm} >
      
      <label>Nombre</label>
      <input type="text" value={name} onChange={handleChangeName} />

      <label>Email</label>
      <input type="email" value={email} onChange={handleChangeEmail} />

      <label>Direccion</label>
      <input type="text" value={address} onChange={handleChangeAddress} />

      <button type="submit">Enviar</button>

    </form>
  )
}
export default EjemploFormulario