import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NavBar} from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {Footer} from './components/Footer/Footer'
import { Inicio } from './components/Inicio/Inicio';
import { Tienda } from './components/Tienda/Tienda';
import { Alquimia } from "./components/Alquimia/Alquimia";
import { Cursos } from "./components/Cursos/Cursos";
import { Servicios } from './components/Servicios/Servicios';
import { Contactanos } from './components/Contactanos/Contactanos';
import {CartProvider} from "./context/CartContext"
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

import { Flip, ToastContainer} from 'react-toastify';


function App() {

 

  return (

    <CartProvider>
    <BrowserRouter >
    <NavBar/>

    <Routes>
        <Route path='/' element={<Inicio/>} />

        <Route path='/item/:id' element={<ItemDetailContainer/>}  />
        <Route path='/tienda' element={<Tienda/>} />
        <Route path='/tienda/:categoria' element={<Tienda/>} />
        <Route path='/alquimia' element={<Alquimia/>} />
        <Route path='/cursos' element={<Cursos/>} />
        <Route path='/servicios' element={<Servicios/>} />
        <Route path='/contactanos' element={<Contactanos/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>} />
    </Routes>

    <Footer />


    </BrowserRouter>
    <ToastContainer
          pauseOnHover= {true}
          transition={Flip}
          hideProgressBar={true}
          limit={3}/>
    </CartProvider>
    
  );
}

export default App;


