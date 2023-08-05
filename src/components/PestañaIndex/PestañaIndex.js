import React from 'react';

import './PestañaIndex.css';


import { Link } from 'react-router-dom';
import TiendaSVG from './TiendaSVG';
import AlquimiaSVG from './AlquimiaSVG';
import LibracoSVG from './LibracoSVG';
import LlamaSVG from './LlamaSVG';

export const PestañaIndex = () => {
    return (

        <main className="main" >
    <section className="secciones">

      <Link className="card1" to="/tienda">

        <div className="tiendabre">

          <TiendaSVG/>

        </div>
        <h3 className="card_text">TIENDA</h3>
      </Link>

      <Link className="card1" to="">
        <div className="calderomove">
          <AlquimiaSVG/>
        </div>
        <h3 className="card_text">ALQUIMIA</h3>
      </Link>

      <Link className="card1" to="">
        <div className="libraco">
          <LibracoSVG />
        </div>
        <h3 className="card_text">CURSOS</h3>
      </Link>

      <Link className="card1" to="">
        <div className="llamas">

          <LlamaSVG />
          
        </div>
        <h3 className="card_text">SERVICIOS</h3>
      </Link>

    </section>
  </main>

    )
}