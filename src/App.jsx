import NavBar from './components/NavBar/NavBar'
import ItemListContainerWithHoc from "./components/ItemListContainer/ItemListContainer"
import './App.css'

function App() {

  return (
    <div className='container-app'>
      <NavBar />
      <ItemListContainerWithHoc />
    </div>
  )
}

export default App
