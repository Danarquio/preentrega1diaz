import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({productos, titulo}) => {
    return (
        <div className='tituloCateg'>
            <h1 className="nombreproducto">{titulo}</h1>
            <div className="shop">
            {productos.map((prod) => <Item producto={prod} key={prod.id} /> )} 
            </div>
        </div>
    )
};

export default ItemList