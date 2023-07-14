import { useState , useEffect } from "react"
import {pedirProductos} from "./pedirProductos"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [titulo, setTitulo] = useState ("Productos")
    const categoria = useParams().categoria

    useEffect(() => {
        pedirProductos()
        .then(res => {
            if (categoria){
              setProductos (res.filter((prod) => prod.categoria === categoria))  
              setTitulo(categoria);
            } else {
                setProductos (res)
                setTitulo("Productos")
            }
            
        })
        }, [categoria])

    return (
        <div>

            <section className="ventanilla">

                <div id="cuadroventa" className="cuadroventa">
                
                <ItemList productos={productos} titulo={titulo} />
                <hr/>

                <div className="totales">
                <h1 className="total" >TOTAL:</h1>
                <h3 id="totalprecio" className="totalprecio">$0.00 </h3>
                </div>

                <button id="botoncarrito" className="botoncompra">COMPRAR</button>
                </div>




                </section>
        </div>
    )
}

export default ItemListContainer