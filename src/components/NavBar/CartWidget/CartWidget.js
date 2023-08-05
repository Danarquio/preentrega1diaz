import React, { useContext } from 'react';



import carretaic from './carreta.svg';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';


export const CartWidget = () => {

    const { cantidadEncarrito , mismoProducto } = useContext(CartContext)

    return (

        <Link to="/carrito" className='cartwidget'>
            
            
                <li >              <h2 className="numcarrit">{mismoProducto()}</h2> </li>
                <li >              <h5 className="numcarrit">{cantidadEncarrito()}gr</h5> </li>
            
            <li >                <img src={carretaic} className="carreta" alt="carro de compra" ></img> </li>

        </Link>)
}