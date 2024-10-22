import { useState, useEffect } from "react"

const EjemploContadorEventListener = () => {
  const [count, setCount] = useState(1)

  const handleClickButton = () => {
    setCount( (prevCount) => prevCount + 1 )
  }

  useEffect(()=>{
    const buttonAdd = document.getElementById("buttonAdd")

    buttonAdd.addEventListener("click", handleClickButton)

    //esta funcion se ejecuta cuando nuestro componente se desmonta
    return () => {
      buttonAdd.removeEventListener("click", handleClickButton)
    }
  }, [])

  return (
    <div>
      <p>{count}</p>
      <button id="buttonAdd">+</button>
    </div>
  )
}
export default EjemploContadorEventListener