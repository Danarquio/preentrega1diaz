import { createContext, useEffect, useState } from "react";


export const CartContext = createContext ();

const carritoInicial = JSON.parse (localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(carritoInicial);


    const agregarAlCarrito = (item, cantidad) => {
        const productoAgregado ={...item, cantidad};

        const nuevoCarrito = [...carrito]
        const siEstaenelCarrito = nuevoCarrito.find((producto)=> producto.id === productoAgregado.id)
    
        if (siEstaenelCarrito){
          siEstaenelCarrito.cantidad += cantidad ;
          
          
        } else {
          nuevoCarrito.push(productoAgregado)
          
        
        }
        setCarrito(nuevoCarrito)
       
      };


      const cantidadEncarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidadGramos, 0)
    }

    const mismoProducto = () => {
        return carrito.length 
      }

      const calcularPrecioFinal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precioFinal, 0)
    }

    const eliminarProducto = (productoId) => {
      const nuevoCarrito = carrito.filter((producto) => producto.id !== productoId);
      setCarrito(nuevoCarrito);
    };
    
    const vaciarCarrito = () => {
        setCarrito ([])
    }

    useEffect (() => {
        localStorage.setItem("carrito" , JSON.stringify(carrito))
    }, [carrito])
    
    return (

    <CartContext.Provider value= {{carrito, agregarAlCarrito ,cantidadEncarrito, calcularPrecioFinal, vaciarCarrito, setCarrito, mismoProducto, eliminarProducto}} >
        {children}
    </CartContext.Provider>

    )
 }

