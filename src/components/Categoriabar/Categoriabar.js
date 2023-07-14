import { Link } from "react-router-dom"
import './Categoriabar.css';


const Categoriabar = () => {

return (

<div>
    <div class="barra">

        <li class="nav-item dropdown desplegable">
            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                CATEGORIAS
            </a>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item" to="/productos">Tienda</Link></li>
              <hr class="dropdown-divider" />
              <li><Link class="dropdown-item" to="/productos/Curados">Curados</Link></li>
              <li><Link class="dropdown-item" to="/productos/Embutidos">Embutidos</Link></li>
              <li><Link class="dropdown-item" to="/productos/Cocidos">Cocidos</Link></li>
              <li><Link class="dropdown-item" to="/productos/Ahumados">Ahumados</Link></li>
              <li><Link class="dropdown-item" to="/productos/Deshidratados">Deshidratados</Link></li>
            </ul>
          </li>

        <ul class="categorias">
            <li><Link to="/productos/Curados">CURADOS</Link></li>
            <li>•</li>
            <li><Link to="/productos/Embutidos">EMBUTIDOS</Link></li>
            <li>•</li>
            <li><Link to="/productos/Cocidos">COCIDOS</Link></li>
            <li>•</li>
            <li><Link to="/productos/Ahumados">AHUMADOS</Link></li>
            <li>•</li>
            <li><Link to="/productos/Deshidratados">DESHIDRATADOS</Link></li>
            <li>•</li>
            <li><Link to="/productos/Merch">MERCH</Link></li>
        </ul>
    </div>
    <hr class="hrbarra" />
    </div>
)

}
export default Categoriabar