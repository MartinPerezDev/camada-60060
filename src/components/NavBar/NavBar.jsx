import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {



  return (
    <nav className="navbar">
      <div className="brand" >
        <h2>Ecommerce</h2>
      </div>

      <ul>
        <li>Remeras</li>
        <li>Gorras</li>
      </ul>

      <CartWidget />
    </nav>
  )
}
export default NavBar