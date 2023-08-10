import React, { useContext } from 'react';
import "./CartWidget.css"



import carretaic from './carreta.svg';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';


export const CartWidget = () => {

    const { cantidadEncarrito , mismoProducto } = useContext(CartContext)

    return (

        <Link to="/cart" className='cartwidget'>
            
            
                <li className="numprod"> {mismoProducto()} Productos </li>
                <li className="numcarrit"> {cantidadEncarrito()}gr </li>
                <img src={carretaic} className="carreta" alt="carro de compra" ></img>

        </Link>)
}