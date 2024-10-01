const ContadorView = ( { contador, aumentarContador } ) => {
  return (
    <div>
      <p>Contador: {contador} </p>
      <button onClick={ aumentarContador } >+</button>
    </div>
  )
}
export default ContadorView