import { useEffect, useState } from 'react';
import { pedirDetalle } from '../ItemListContainer/pedirProductos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'



const ItemDetailContainer = () => {
  
  const [item, setItem] = useState(null);
  const id = useParams().id

  useEffect(() => {
    pedirDetalle(Number(id))
    .then((res) => {
      setItem(res)
    })
  },[id])
  
  return (
    <div>
    {item && <ItemDetail item={item}/>}
    </div>
  );
};

export default ItemDetailContainer;
