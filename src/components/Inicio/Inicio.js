import React from 'react';
import { PestañaIndex } from '../PestañaIndex/PestañaIndex';
import { CategoIndex } from '../CategoIndex/CategoIndex';
import { Carrusel } from '../Carrusel/Carrusel';
import ItemListContainer from '../ItemListContainer/ItemListContainer';




export const Inicio = () => {
    return (
        <>
         <CategoIndex/>
         <Carrusel/>
         <PestañaIndex/>
         <ItemListContainer/>
        </>
    )
}