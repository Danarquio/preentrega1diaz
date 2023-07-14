import './App.css';

import { NavBar} from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import React from 'react';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categoriabar from './components/Categoriabar/Categoriabar';

function App() {


  return (
    <div >
    <BrowserRouter >
    <NavBar/>
    <Categoriabar/>

    <Routes>
        <Route path='/'element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>}  />
        <Route path='/productos' element={<ItemListContainer/>} />
        <Route path='/productos/:categoria' element={<ItemListContainer/>} />

    </Routes>


    </BrowserRouter>
    </div>
  );
}

export default App;
