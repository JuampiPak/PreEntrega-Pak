import './App.css'
import Brand from "./components/Brand";
import CategoriaItem from './components/CategoriaItem';
import MenuButton from "./components/MenuButton";
import CartContainer from './components/CartCointainer';


function App() {

  return <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Brand />
  <MenuButton />
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        </li>
        <CategoriaItem isActive={true} name="Contacto" />
        <li className="nav-item">
        <CategoriaItem isActive={true} name="Sobre Nosotros" />
        </li>
      </ul>
    </div>
    <CartContainer color="yellowm"/>
  </div>
</nav>

  </div>
}

export default App
