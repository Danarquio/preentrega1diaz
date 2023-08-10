import './Alquimia.css';
import { PestañaDelgada } from '../PestañaDelgada/PestañaDelgada';
import alquimica from "../../Imagenes/Alquimia1.webp"
import salmueras from "../../Imagenes/salmuera.jpg"






export const Alquimia = () => {
    return (
    <>
        <PestañaDelgada/>
        
        <section className="blog">

        <div className="cuadroblog">
            <img className="blog__image" src={alquimica} alt="La Alquimia" />
            <h2 className="blog__titulo">Alquimica</h2>
            <h5 className="blog__subtitulo">La magia y la cocina como actividad originaria</h5>
            <p className="blog__resumen">La alquimia ha sido un factor importante en la cocina a lo largo de la historia,
                especialmente en la Edad Media. Los alquimistas buscaban transformar los ingredientes en algo más
                valioso y saludable, y esto llevó al desarrollo de muchas técnicas culinarias, como la fermentación y la
                destilación. También se cree que los alquimistas fueron los primeros en utilizar ácidos y alcalinos en
                la cocina para equilibrar los sabores. Además, los alquimistas creían que la cocina era un acto sagrado
                y una forma de unir lo material y lo espiritual.</p>
            <p >seguir leyendo</p>
        </div>

        <div className="cuadroblog">
            <img className="blog__image" src={salmueras} alt="Salmuera" />
            <h2 className="blog__titulo">Salmueras</h2>
            <h5 className="blog__subtitulo">Historia y descubrimiento</h5>
            <p className="blog__resumen">La salmuera es una solución de agua y sal utilizada para preservar alimentos desde
                la antigüedad. Los egipcios y los romanos ya utilizaban la salmuera para conservar alimentos como
                pescados y carnes. Durante la Edad Media, la salmuera fue uno de los principales métodos de conservación
                de los alimentos. En la actualidad, la salmuera sigue siendo utilizada como técnica de conservación y
                también se utiliza en la cocina para añadir sabor y humedad a las carnes y otros alimentos. Además, la
                salmuera también se utiliza en la producción de algunos quesos y encurtidos.</p>
            <p >seguir leyendo</p>
        </div>

        </section>
    </>
    )
}