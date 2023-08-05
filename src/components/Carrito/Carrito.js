import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './Carrito.css'
import { Link } from "react-router-dom";


const Carrito = ()=> {

    const { carrito , calcularPrecioFinal , vaciarCarrito, cantidadEncarrito} = useContext (CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <section className="ventanilla">
            
            <div className="cuadroventaCarrito">
            <h2 className="tituloCarrito" >Carrito de compras</h2>
                {carrito.map((producto) => (
                <div key={producto.id} className="elementodecompra">
                    <img className="imagencompra" src={producto.imagen} alt={producto.nombre} />
                    <Link to={`/item/${producto.id}`} className="nombreenCarrito">{producto.nombre}</Link>
                    
                    <div className="totalproducto">
                    <h3 className="precioenCarrito">${producto.precioFinal}</h3>
                    <h4 className="cantidad" >{producto.cantidadGramos} gramos</h4>
                    </div>
                    
                    <button className="eliminar" >
                    <i className="bi bi-trash-fill"></i>
                    </button>
                </div>
                ))}

                {carrito.length > 0 ?
                <>
                <button onClick={handleVaciar} >VACIAR PRODUCTOS</button>
                <h2 className="precioFinal" >Precio total : ${(calcularPrecioFinal())}</h2>
                <h2 className="precioFinal">Peso Total: {cantidadEncarrito()}gr</h2>
                </> 
                :
                <>
                <h2 className="precioFinal">Su carrito esta vacio</h2>
                <Link to={`/tienda`} className="nombreenCarrito">Ir a tienda</Link>
                </>
                }
                

            </div>
      </section>
    );
  };

export default Carrito