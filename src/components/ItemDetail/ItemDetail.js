import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import {Mayusculas} from "../Mayusculas/Mayusculas"
import React , {useContext} from 'react';
import { CartContext } from '../../context/CartContext';



const ItemDetail = ({item}) => {

const { carrito, setCarrito } = useContext(CartContext);
  return (
    <section className='ventanilla'>
    <div className="cuadroventa">
      <div className="fotoproducto">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner carrus">
            <div className="carousel-item active">
              <img
                src={item.carru1}
                className="d-block w-100"
                data-bs-interval="11400"
                alt="Bondiola"
              />
            </div>
            <div className="carousel-item">
              <img
                src={item.carru2}
                className="d-block w-100"
                data-bs-interval="11400"
                alt="Bondiola"
              />
            </div>
            <div className="carousel-item">
              <img
                src={item.carru3}
                className="d-block w-100"
                data-bs-interval="11400"
                alt="Bondiola"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className='cuentame'><ItemCount productoSeleccionado={item} carrito={carrito} setCarrito={setCarrito} /></div>


      <div className="descproducto">
        <h2>{Mayusculas(item.nombre)}</h2>
        <Link to={`/tienda/${(item.categoria)}`} >
          <h4>{Mayusculas(item.categoria)}</h4>
        </Link>
        <hr />
        <p>
          En rebanadas, por trozo o la pieza entera de <strong>{item.nombre}</strong>.
          <br />
          <br />
          El jamón curado es una excelente entrada, puede ser servido como tapa en una tabla
          acompañado con pan tostado logrando una increíble mezcla de sabores.
          <br />
          <br />
        </p>
        <p className="indicacion">
          REFRIGERAR UNA VEZ ABIERTO EL EMPAQUE.
          <br />
          VENTA MINIMA {item.minimo}gr x ${item.precio}.
        </p>

        <hr />
      </div>
    </div>
    </section>
  )
}

export default ItemDetail