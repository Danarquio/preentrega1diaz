import React from 'react';
import { PestañaIndex } from '../PestañaIndex/PestañaIndex';
import { CategoIndex } from '../CategoIndex/CategoIndex';
import { Carrusel } from '../Carrusel/Carrusel';




export const Inicio = () => {
    return (
        <>
         <CategoIndex/>
         <Carrusel/>
         <PestañaIndex/>
        </>
    )
}