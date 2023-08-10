import { useEffect, useState } from 'react';

import ItemDetail from '../ItemDetail/ItemDetail';
import { Link, useParams } from 'react-router-dom';
import './ItemDetailContainer.css'
import Categoriabar from '../Categoriabar/Categoriabar';
import { doc, getDoc} from "firebase/firestore"
import { db } from '../../firebase/config';
import { toast } from 'react-toastify';




const ItemDetailContainer = () => {
  
  const [item, setItem] = useState(null);
  const [itemExists, setItemExists] = useState(true);
  const id = useParams().id

  useEffect(() => {

const docRef = doc(db , "productos" , id);
getDoc(docRef)
.then((resp) => {
  if (resp.exists()) {
    setItem({ ...resp.data(), id: resp.id });
  } else {
    setItemExists(false);
    toast.error('El producto no existe.', {
      position: 'bottom-right',
      autoClose: 5000, 
    });
  }
})
.catch(() => {
  toast.error('Error al buscar el producto.', {
    position: 'bottom-right',
    autoClose: 5000,
  });
})

  },[id])
  
  return (
    <div>
      <Categoriabar/>
      {itemExists ? (
        item && <ItemDetail item={item} />
      ) : (
        <div className="ventanilla">
          <div className='cuadroventa'>
            <h1>El producto no existe.</h1>
          <Link to="/tienda">Volver a la tienda</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
