import React from 'react';



import carretaic from './carreta.svg';

export const CartWidget = () => {
    return (

        <div className='cartwidget'>
            <li >              <h4 className="numcarrit">2</h4> </li>
            <li >                <img src={carretaic} className="carreta" ></img> </li>

        </div>)
}