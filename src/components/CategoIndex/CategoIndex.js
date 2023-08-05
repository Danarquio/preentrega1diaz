import React from 'react';

import './CategoIndex.css';

import { Link } from 'react-router-dom';

export const CategoIndex = () => {
    return (
        <div>
        <ul className="titulos1">
          <Link className="titulos1_li" to="/tienda">
            <li>CECINAS</li>
            <li>•</li>
            <li>CHARCUTERIA</li>
            <li>•</li>
            <li>EMBUTIDOS</li>
            <li>•</li>
            <li>FIAMBRES</li>
          </Link>
        </ul>
      </div>
    )
}