import { PestañaDelgada } from '../PestañaDelgada/PestañaDelgada';
import jamonero from "../../Imagenes/maestro jamonero.jpg"
import mparrillero from "../../Imagenes/maestro parrillero.jpg"






export const Servicios = () => {
    return (
    <>
        <PestañaDelgada/>
        
        <section class="curso">

<div className="cuadrocurso">
    <img className="curso__image" src={jamonero} alt="Maestro Jamonero" />
    <h2 className="curso__titulo">Maestro Jamonero</h2>
    <h5 className="curso__subtitulo">Experto en el arte de cortar lonchas</h5>
    <h2 className="productos__precio">$195.000</h2>
    <p className="curso__resumen">Especialista en cortar el jamón o la paleta, utilizando una técnicas para lograr
        las lonchas perfectas. Experiencia, conocimiento y amor por el jamón, así como seriedad y elegancia en
        su ejecución, por lo que un buen corte no solo nos permitirá obtener el máximo rendimiento de la pieza
        de jamón, sino que también nos hará disfrutar de su textura y aromas al máximo..</p>
    <p>Cotizar</p>
</div>

<div className="cuadrocurso">
    <img className="curso__image" src={mparrillero} alt="Maestro Parrillero" />
    <h2 className="curso__titulo">Maestro Parrillero</h2>
    <h5 className="curso__subtitulo">Servicio de Maestro Parrillero</h5>
    <h2 className="productos__precio">$59.990</h2>
    <p className="curso__resumen">La selección de la carne, el control de la temperatura y el tiempo de cocción,
        elección de la leña o carbón que se utiliza como combustible, preparacion de la salsa o aderezo perfecto
        para complementar la carne. Combina habilidades culinarias con una pasión por la comida y una
        comprensión profunda de los ingredientes que se colocan sobre las brasas.</p>
    <p>Cotizar</p>
</div>

</section>
    </>
    )
}