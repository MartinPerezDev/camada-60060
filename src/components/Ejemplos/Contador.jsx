import { useState, useEffect } from "react"
import ContadorView from "./ContadorView"
import Titulo from "./Titulo"

const Contador = () => {
  const [contador, setContador] = useState(0)
  const [toggle, setToggle] = useState(true)

  const aumentarContador = () => {
    if (contador < 10) {
      setContador(contador + 1)
    }
  }

  const alternarToggle = () => {
    setToggle( !toggle )
  }

  //se ejecuta solo al montar el componente
  //ej: llamadas a api, suscripciones a eventListener
  useEffect( ()=> {
    console.log("1er useEffect")
  }, [] )
 
  //se ejecuta en el montaje y cada vez que "contador" cambie
  //ej: para realizar acciones especificas cuando una variable dependiente cambie
  useEffect( () => {
    console.log("2do useEffect")
  }, [contador] )

  //se ejecuta en el montaje y cada vez que se actualice cualquier estado del componente
  //ej: operaciones globales de monitoreo o registra, actualizaciones generales del componente
  useEffect( () => {
    console.log("3er useEffect")
  } )


  return (
    <>
      <ContadorView contador={contador} aumentarContador={aumentarContador} />
      <div>
        <p>Valor toggle: { toggle.toString() }</p>
        <button onClick={ alternarToggle } >Alternar valor del toggle</button>
        {
          toggle === true && <Titulo />
        }
      </div>
    </>
  )
}
export default Contador