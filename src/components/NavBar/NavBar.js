import React from 'react';

import './NavBar.css';

import hamburgIc from './icons/hamburger.svg'
import dragonIc from './icons/Dragon.svg';
import tiendaic from './icons/tienda.svg';
import alquimiaic from './icons/alquimia.svg';
import contactanosIc from './icons/contactanos.svg';
import cursosic from './icons/cursos.svg';
import dracarnisic from './icons/Dracarnis.svg';
import serviciosic from './icons/servicios.svg';

import { CartWidget } from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navegador">
            
            <ul className="inicio">

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                    <img src={hamburgIc} alt="menu hamburguesa"></img>
                    </a>

                    <ul className='dropdown-menu'>
                        <li><Link className="dropdown-item" to="/">Inicio</Link></li>
                        <hr className="dropdown-divider"></hr>

                        <li><Link className="dropdown-item" to="/tienda">Tienda</Link></li>
                        <li><Link className="dropdown-item" to="/alquimia">Alquimia</Link></li>
                        <li><Link className="dropdown-item" to="/cursos">Cursos</Link></li>
                        <li><Link className="dropdown-item" to="/servicios">Servicios</Link></li>
                        <hr className="dropdown-divider"></hr>

                        <li><Link className="dropdown-item" to="/contactanos">Contactanos</Link></li>
                    </ul>


                </li>


                <li className="logo1"><Link to="/"><img src={dracarnisic} alt='logo'></img> </Link></li>

                <li className="tienda , entrada">   <Link to="/tienda">    <img src={tiendaic} alt='tienda'></img>   </Link></li>
                <li className="alquimia , entrada">  <Link to="/alquimia">   <img src={alquimiaic} alt='alquimia'></img>   </Link></li>
                <li className="cursos , entrada">   <Link to="/cursos">    <img src={cursosic} alt='cursos'></img>   </Link></li>
                <li className="servicios , entrada">   <Link to="/servicios">  <img src={serviciosic} alt='servicios'></img> </Link></li>
                <li className="contactanos , entrada"> <Link to="/contactanos"> <img src={contactanosIc} alt='contactanos'></img>  </Link></li>

                <li className="drabar">  <img src={dragonIc} alt='logo' ></img> </li>

                <CartWidget/>
            </ul>
        </nav>
    )
}