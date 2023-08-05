import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import React , {useContext} from "react"
import { CartContext } from "../../context/CartContext"
import './Item.css'

const Item = ({producto}) => {

    const {carrito , setCarrito} = useContext (CartContext)
return (

    <div className="productos" >  
                
    <img className="vuelta" src={producto.carru1} alt={producto.nombre}/>
    <div className="infoCard">
        
        <div className="textosprod">

        <h2 className="productos__nombre">{producto.nombre}</h2> 
        <div >
        <h2 className="productos__precio">${producto.precio}</h2>
        <h4 className="productos__gramo">x {producto.minimo}gramos</h4>
        </div>

        </div>        
        <ItemCount productoSeleccionado={producto} carrito={carrito} setCarrito={setCarrito} />
    </div>
    <Link to={`/item/${producto.id}`} className="detalle">ver detalle</Link>
    </div>


)

}
export default Item