import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({productos, titulo}) => {
    return (
        <div>
            <h1 className="nombreproducto">{titulo}</h1>
            <div>
            {productos.map((prod) => <Item producto={prod} key={prod.id} /> )} 
            </div>
        </div>
    )
};

export default ItemList