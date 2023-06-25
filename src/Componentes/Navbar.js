import React from 'react';

import './Navbar.css';
import hamburgIc from './icons/hamburger.svg'
import dragonIc from './icons/Dragon.svg';
import tiendaic from './icons/tienda.svg';
import alquimiaic from './icons/alquimia.svg';
import contactanosIc from './icons/contactanos.svg';
import cursosic from './icons/cursos.svg';
import dracarnisic from './icons/Dracarnis.svg';
import serviciosic from './icons/servicios.svg';


export const Navbar = () => {
    return (
        <nav className="navegador">
            
            <ul className="inicio">

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                    <img src={hamburgIc} alt="menu hamburguesa"></img>
                    </a>

                    <ul className='dropdown-menu'>
                        <li><a className="dropdown-item" href="#">Inicio</a></li>
                        <hr className="dropdown-divider"></hr>

                        <li><a className="dropdown-item" href="#">Tienda</a></li>
                        <li><a className="dropdown-item" href="#">Alquimia</a></li>
                        <li><a className="dropdown-item" href="#">Cursos</a></li>
                        <li><a className="dropdown-item" href="#">Servicios</a></li>
                        <hr className="dropdown-divider"></hr>

                        <li><a className="dropdown-item" href="#">Contactanos</a></li>
                    </ul>


                </li>


                <li className="logo1"><a href="./index.html"><img src={dracarnisic} ></img> </a></li>

                <li className="tienda , entrada">       <img src={tiendaic} ></img>  <a href="./Pages/tienda.html"> </a></li>
                <li className="alquimia , entrada">     <img src={alquimiaic} ></img>  <a href="./Pages/alquimia.html"> </a></li>
                <li className="cursos , entrada">       <img src={cursosic} ></img>  <a href="./Pages/cursos.html"> </a></li>
                <li className="servicios , entrada">    <img src={serviciosic} ></img> <a href="./Pages/servicios.html"> </a></li>
                <li className="contactanos , entrada">  <img src={contactanosIc} ></img> <a href="./Pages/contactanos.html"> </a></li>

                <li className="drabar">                 <img src={dragonIc} ></img> </li>
            </ul>
        </nav>
    )
}