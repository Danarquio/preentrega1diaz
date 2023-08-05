import React from 'react';

import './Footer.css';

import fonoIc from './icons/phone.svg'
import whatIc from './icons/whatsapp.svg';
import instaIc from './icons/instagram.svg';
import faceIc from './icons/facebook.svg';
import twitIc from './icons/twitter.svg';
import { Link } from 'react-router-dom';




export const Footer = () => {
    return (
        <footer className="footer">

        <div className="socialmedia">
    
          <Link to="/contactanos">
            <img className="socialmedia__icon" src={fonoIc} alt="icono telefono" /></Link>
    
          <a href="https://wa.me/56981815758" target="_blank" rel="noopener noreferrer">
            <img className="socialmedia__icon" src={whatIc} alt="icono whatsapp" /></a>
    
          <a href="https://www.instagram.com/dracarnis/" target="_blank " rel="noopener noreferrer">
            <img className="socialmedia__icon" src={instaIc} alt="icono instagram" /></a>
    
          <a href="https://www.facebook.com/Danarquio/" target="_blank" rel="noopener noreferrer">
            <img className="socialmedia__icon" src={faceIc} alt="icono facebook" /></a>
    
          <a href="https://twitter.com/Danarquio" target="_blank" rel="noopener noreferrer">
            <img className="socialmedia__icon" src={twitIc} alt="icono twitter" /></a>
    
        </div>
    
        <div className="footext">
          <h5>DRACARNIS 2023 • TODOS LOS DERECHOS RESERVADOS by @danarquio</h5>
        </div>
    
      </footer>
    )
}