import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Categoriabar from '../Categoriabar/Categoriabar';
import { PestañaDelgada } from '../PestañaDelgada/PestañaDelgada';





export const Tienda = () => {
    return (
        <>
         <PestañaDelgada/>
         <Categoriabar/>
         <ItemListContainer/>
         
        </>
    )
}