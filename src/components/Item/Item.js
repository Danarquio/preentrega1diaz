import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import React from "react"

const Item = ({producto}) => {

return (
    <article className="elementodecompra">
    <img className="imagencompra" src={producto.imagen} alt={producto.nombre}/>
    <div>
    <h2 className="nombreproducto">{producto.nombre}</h2>
    <Link to={`/item/${producto.id}`} >ver detalle</Link>
    </div>
    <h3 className="precioproducto">${producto.precio}</h3>
    <div className="cantidad">
        <ItemCount nombre={producto.nombre} minimo={producto.minimo} stock={producto.stock} />
        <h4>gramos</h4>
    </div>
    <button id="botonagregar" className="botoncompra">AGREGAR AL CARRO</button>
    <h3 id="totalproducto" className="totalproducto">0$</h3>
    <button className="eliminar" > <i className="bi bi-trash-fill"></i> </button>
    </article>
)

}
export default Item