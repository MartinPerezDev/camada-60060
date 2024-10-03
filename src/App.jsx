import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contador from './components/Ejemplos/Contador'
import './App.css'

function App() {

  return (
    <div className='container-app'>
      <NavBar />
      <ItemListContainer saludo={"Hola Mundo!!"} />

      <Contador />     
    </div>
  )
}

export default App
