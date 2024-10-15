import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ComponentePadre from './components/Ejemplos/ComponentePadre'
import ComponenteHijo from './components/Ejemplos/ComponenteHijo'
import './App.css'

function App() {

  return (
    <div className='container-app'>
      <NavBar />
      <ItemListContainer saludo={"Hola Mundo!!"} />

      <ComponentePadre title="Mi caja">
        <p>Contenido personalizado</p>
        <button>Clickeame</button>
      </ComponentePadre>

      <ComponentePadre title="Mi caja 2">
        <button>Clickeame</button>
        <ComponenteHijo />
      </ComponentePadre>   
    </div>
  )
}

export default App
