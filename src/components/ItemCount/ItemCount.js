import React, { useState, useEffect , useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';


import './ItemCount.css';

const ItemCount = ({ productoSeleccionado}) => {

  const [cantidadGramos, setCantidadGramos] = useState(0);
  const { carrito, setCarrito } = useContext(CartContext);


  useEffect(() => {
    setCantidadGramos(0); 
  }, [productoSeleccionado]);

  const handleIncrementar = () => {
    cantidadGramos < productoSeleccionado.stock && setCantidadGramos((prevCantidad) => prevCantidad + productoSeleccionado.minimo);
  };

  const handleDecrementar = () => {
    setCantidadGramos((prevCantidad) => Math.max(0, prevCantidad - productoSeleccionado.minimo));
  };



  const calcularPrecioFinal = () => {
    const calculofinal = cantidadGramos * (productoSeleccionado.precio / productoSeleccionado.minimo);
    return calculofinal;
  };

  const handleAgregar = () => {
    
    const productoAgregado = {
      ...productoSeleccionado,
      cantidadGramos,
      precioFinal: calcularPrecioFinal(),
      
    };
    
    const siEstaenelCarrito = carrito.find((producto) => producto.id === productoAgregado.id);

    if (siEstaenelCarrito) {
      const nuevoCarrito = carrito.map((producto) =>
        producto.id === productoAgregado.id
          ? {
              ...producto,
              cantidadGramos: producto.cantidadGramos + cantidadGramos,
              precioFinal: producto.precioFinal + calcularPrecioFinal(),
            }
          : producto
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, productoAgregado]);
    }

    toast('Agregado al Carrito',{style:{background: '#323232', color: '#ffffff'}, position:'bottom-right'} );
  };



  return (
    <div>
      
      <div className="cuadroContador">

        <h2 className="precioContador">${calcularPrecioFinal().toFixed(0)}</h2>
        <h4 className="gramosContador">{cantidadGramos} gramos</h4>
        <div className="botonesContador">
          <button className="botonMenos" onClick={handleDecrementar} disabled={cantidadGramos === 0}>-</button>
          <button className="botonMas" onClick={handleIncrementar}>+</button>
        </div>
      </div>
      <button className="botonAgregar" onClick={handleAgregar}>AGREGAR AL CARRO
      </button>
      
    </div>
  );
};

export default ItemCount;