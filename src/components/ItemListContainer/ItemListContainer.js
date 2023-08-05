import { useState , useEffect } from "react"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import { collection, getDocs, query ,where } from "firebase/firestore";
import { db } from "../../firebase/config";
import './ItemListContainer.css'

import { SetTitulo } from "./SetTitulo";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [titulo, setTitulo] = useState ("Productos")
    const categoria = useParams().categoria

    useEffect(() => {
        
        const productosRef = collection(db , "productos")

        const q= categoria ? query(productosRef, where ("categoria" , "==" , categoria)) : productosRef;

        getDocs(q)
        .then ((resp) =>{
            setProductos(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setTitulo(SetTitulo(categoria)); 
    });
  }, [categoria]);

    return (

                <ItemList productos={productos} titulo={titulo} />

    )
}

export default ItemListContainer