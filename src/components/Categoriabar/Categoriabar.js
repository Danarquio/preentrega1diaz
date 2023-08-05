import { Link } from "react-router-dom"
import './Categoriabar.css';


const Categoriabar = () => {

return (

<div>
    <div className="barra">

        <li className="nav-item dropdown desplegable">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                CATEGORIAS
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/tienda">Tienda</Link></li>
              <hr className="dropdown-divider" />
              <li><Link className="dropdown-item" to="/tienda/Curados">Curados</Link></li>
              <li><Link className="dropdown-item" to="/tienda/Embutidos">Embutidos</Link></li>
              <li><Link className="dropdown-item" to="/tienda/Cocidos">Cocidos</Link></li>
              <li><Link className="dropdown-item" to="/tienda/Ahumados">Ahumados</Link></li>
              <li><Link className="dropdown-item" to="/tienda/Deshidratados">Deshidratados</Link></li>
            </ul>
          </li>

        <ul className="categorias">
            <li><Link to="/tienda/Curados">CURADOS</Link></li>
            <li>•</li>
            <li><Link to="/tienda/Embutidos">EMBUTIDOS</Link></li>
            <li>•</li>
            <li><Link to="/tienda/Cocidos">COCIDOS</Link></li>
            <li>•</li>
            <li><Link to="/tienda/Ahumados">AHUMADOS</Link></li>
            <li>•</li>
            <li><Link to="/tienda/Deshidratados">DESHIDRATADOS</Link></li>
            <li>•</li>
            <li><Link to="/tienda/Merch">MERCH</Link></li>
        </ul>
    </div>
    <hr className="hrbarra" />
    </div>
)

}
export default Categoriabar