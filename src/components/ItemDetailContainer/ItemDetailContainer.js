import { useEffect, useState } from 'react';

import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'
import Categoriabar from '../Categoriabar/Categoriabar';
import { doc, getDoc} from "firebase/firestore"
import { db } from '../../firebase/config';



const ItemDetailContainer = () => {
  
  const [item, setItem] = useState(null);
  const id = useParams().id

  useEffect(() => {

const docRef = doc(db , "productos" , id);
getDoc(docRef)
.then((resp) => {
  setItem(
    {...resp.data(),id: resp.id})
})

  },[id])
  
  return (
    <div>
      <Categoriabar/>
    {item && <ItemDetail item={item}/>}
    </div>
  );
};

export default ItemDetailContainer;