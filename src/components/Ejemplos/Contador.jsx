import { useState } from "react"
import ContadorView from "./ContadorView"

const Contador = () => {
  const [contador, setContador] = useState(0)
  //let contador = 0

  const aumentarContador = () => {
    if (contador < 10) {
      setContador(contador + 1)
    }
  }

  return (
    <ContadorView contador={contador} aumentarContador={aumentarContador} />
  )
}
export default Contador