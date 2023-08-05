import React from 'react';

import './Carrusel.css';

import LogoDra from './Dragon.svg'
import Dravideo1 from './Draca1.mp4'
import Dravideo2 from './Draca2.mp4'
import Dravideo3 from './Draca3.mp4'


export const Carrusel = () => {
    return (
        <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <video className="videochar d-block w-100" src={Dravideo1} autoPlay loop title="escenas de cortes de fiambres"></video>
      </div>
      <div className="carousel-item">
        <video className="videochar d-block w-100" src={Dravideo2} autoPlay loop
          title="escenas de condimentado de carne"></video>
      </div>
      <div className="carousel-item">
        <video className="videochar d-block w-100" src={Dravideo3} autoPlay loop
        title="escenas de brasas y chorizos a la parrilla"></video>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>

    <div className="logodra">
      <img src={LogoDra} alt="Logo Dracarnis" />
    </div>
  </div>
    )
}