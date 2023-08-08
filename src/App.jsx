import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NavBar} from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {Footer} from './components/Footer/Footer'
import { Inicio } from './components/Inicio/Inicio';
import { Tienda } from './components/Tienda/Tienda';
import { Contactanos } from './components/Contactanos/Contactanos';
import {CartProvider} from "./context/CartContext"
import Carrito from './components/Carrito/Carrito';

function App() {

 

  return (
    <div >
    
    <CartProvider>
    <BrowserRouter >
    <NavBar/>

    <Routes>
        <Route path='/' element={<Inicio/>} />

        <Route path='/item/:id' element={<ItemDetailContainer/>}  />
        <Route path='/tienda' element={<Tienda/>} />
        <Route path='/tienda/:categoria' element={<Tienda/>} />
        <Route path='/contactanos' element={<Contactanos/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
    </Routes>

    <Footer />


    </BrowserRouter>

    </CartProvider>
    </div>
  );
}

export default App;


