import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const ItemDetail = ({item}) => {
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

      <button className="botoncompra">AGREGAR AL CARRO</button>

      <div className="precioproducto">
        <h3>{item.precio}</h3>
        <div className="cantidad">
          <ItemCount nombre={item.nombre} minimo={item.minimo} stock={item.stock} />
        </div>
      </div>
      <div className="descproducto">
        <h2>{item.nombre}</h2>
        <Link to={`/productos/${item.categoria}`} >
          <h4>{item.categoria}</h4>
        </Link>
        <hr />
        <p>
          En rebanadas, por trozo o la pieza entera de <strong>Bondiola Curada</strong>.
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
          VENTA MINIMA {item.minimo}gr.
        </p>

        <hr />
      </div>
    </div>
    </section>
  )
}

export default ItemDetail