import { useEffect } from "react"

const Titulo = () => {

  useEffect(()=> {

    const mostrarAnchoVentana = () => {
      console.log("Ancho de la ventana: ", window.innerWidth)
    }

    window.addEventListener("resize", mostrarAnchoVentana)

    //cleanup effect
    return () => {
      window.removeEventListener("resize", mostrarAnchoVentana)
    }
  }, [])

  return (
    <div>Titulo</div>
  )
}
export default Titulo