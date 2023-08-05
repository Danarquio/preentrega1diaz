import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import tiendaic from '../NavBar/icons/tienda.svg';
import alquimiaic from '../NavBar/icons/alquimia.svg';
import cursosic from '../NavBar/icons/cursos.svg';
import serviciosic from '../NavBar/icons/servicios.svg';
import contactoic from '../NavBar/icons/contactanos.svg';

import './PestañaDelgada.css';

export const PestañaDelgada = () => {
    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(location.pathname);
  
    const handleTabChange = (path) => {
      setSelectedTab(path);
    };
  
  return (
    
    <section className="pestañas">
    {/* Sección para /tienda */}
    {selectedTab === '/tienda' && (
      <>
        <div className="cardtienda">
          <img className="cardtienda_image2" src={tiendaic} alt="icono TIENDA" />
          <Link to="/tienda" onClick={() => handleTabChange('/tienda')} >
            <h3 className="card_text">TIENDA</h3>
          </Link>
        </div>

        <Link className="card2" to="/alquimia" onClick={() => handleTabChange('/alquimia')} >
          <img className="cardtienda_image3" src={alquimiaic} alt="icono ALQUIMIA" />
          <h3 className="card_text">ALQUIMIA</h3>
        </Link>

        <Link className="card2" to="/cursos" onClick={() => handleTabChange('/cursos')} >
          <img className="cardtienda_image3" src={cursosic} alt="icono CURSOS" />
          <h3 className="card_text">CURSOS</h3>
        </Link>

        <Link className="card2" to="/servicios" onClick={() => handleTabChange('/servicios')}>
          <img className="cardtienda_image3" src={serviciosic} alt="icono SERVICIOS" />
          <h3 className="card_text">SERVICIOS</h3>
        </Link>
      </>
    )}

    {/* Sección para /alquimia */}
    {selectedTab === '/alquimia' && (
      <>
        <Link className="card2" to="/tienda" onClick={() => handleTabChange('/tienda')}>
          <img className="cardtienda_image3" src={tiendaic} alt="icono TIENDA" />
          <h3 className="card_text">TIENDA</h3>
        </Link>

        <div className="cardtiendadoble">
          <img className="cardtienda_image2" src={alquimiaic} alt="icono ALQUIMIA" />
          <Link to="/alquimia" onClick={() => handleTabChange('/alquimia')}>
            <h3 className="card_text">ALQUIMIA</h3>
          </Link>
        </div>

        <Link className="card2" to="/cursos" onClick={() => handleTabChange('/cursos')}>
          <img className="cardtienda_image3" src={cursosic} alt="icono CURSOS" />
          <h3 className="card_text">CURSOS</h3>
        </Link>

        <Link className="card2" to="/servicios" onClick={() => handleTabChange('/servicios')}>
          <img className="cardtienda_image3" src={serviciosic} alt="icono SERVICIOS" />
          <h3 className="card_text">SERVICIOS</h3>
        </Link>
      </>
    )}

    {/* Sección para /cursos */}
    {selectedTab === '/cursos' && (
      <>
        <Link className="card2" to="/tienda" onClick={() => handleTabChange('/tienda')}>
          <img className="cardtienda_image3" src={tiendaic} alt="icono TIENDA" />
          <h3 className="card_text">TIENDA</h3>
        </Link>

        <Link className="card2" to="/alquimia" onClick={() => handleTabChange('/alquimia')}>
          <img className="cardtienda_image3" src={alquimiaic} alt="icono ALQUIMIA" />
          <h3 className="card_text">ALQUIMIA</h3>
        </Link>

        <div className="cardtiendadoble" >
          <img className="cardtienda_image2" src={cursosic} alt="icono CURSOS" />
          <Link to="/cursos" onClick={() => handleTabChange('/cursos')}>
            <h3 className="card_text">CURSOS</h3>
          </Link>
        </div>

        <Link className="card2" to="/servicios" onClick={() => handleTabChange('/servicios')}>
          <img className="cardtienda_image3" src={serviciosic} alt="icono SERVICIOS" />
          <h3 className="card_text">SERVICIOS</h3>
        </Link>
      </>
    )}

    {/* Sección para /servicios */}
    {selectedTab === '/servicios' && (
      <>
        <Link className="card2" to="/tienda" onClick={() => handleTabChange('/tienda')}>
          <img className="cardtienda_image3" src={tiendaic} alt="icono TIENDA" />
          <h3 className="card_text">TIENDA</h3>
        </Link>

        <Link className="card2" to="/alquimia" onClick={() => handleTabChange('/alquimia')}>
          <img className="cardtienda_image3" src={alquimiaic} alt="icono ALQUIMIA" />
          <h3 className="card_text">ALQUIMIA</h3>
        </Link>

        <Link className="card2" to="/cursos" onClick={() => handleTabChange('/cursos')}>
          <img className="cardtienda_image3" src={cursosic} alt="icono CURSOS" />
          <h3 className="card_text">CURSOS</h3>
        </Link>

        <div className="cardtiendafin">
          <img className="cardtienda_image2" src={serviciosic} alt="icono SERVICIOS" />
          <Link to="/servicios" onClick={() => handleTabChange('/servicios')}>
            <h3 className="card_text">SERVICIOS</h3>
          </Link>
        </div>
      </>
    )}

        {/* Sección para /contactanos */}
        {selectedTab === '/contactanos' && (
      <>
        <Link className="card2" to="/tienda" onClick={() => handleTabChange('/tienda')}>
          <img className="cardtienda_image3" src={tiendaic} alt="icono TIENDA" />
          <h3 className="card_text">TIENDA</h3>
        </Link>

        <Link className="card2" to="/alquimia" onClick={() => handleTabChange('/alquimia')}>
          <img className="cardtienda_image3" src={alquimiaic} alt="icono ALQUIMIA" />
          <h3 className="card_text">ALQUIMIA</h3>
        </Link>

        <div className="cardtiendadoble">
          <img className="cardtienda_image2" src={contactoic} alt="icono CONTACTO" />
          <Link to="/contactanos" onClick={() => handleTabChange('/contactanos')}>
            <h3 className="card_text">CONTACTANOS</h3>
          </Link>
        </div>

        <Link className="card2" to="/cursos" onClick={() => handleTabChange('/cursos')}>
          <img className="cardtienda_image3" src={cursosic} alt="icono CURSOS" />
          <h3 className="card_text">CURSOS</h3>
        </Link>


      </>
    )}
  </section>
  );
};

