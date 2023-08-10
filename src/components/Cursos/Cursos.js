import './Cursos.css';
import { PestañaDelgada } from '../PestañaDelgada/PestañaDelgada';
import charcutero from "../../Imagenes/charcuteria.jpg"
import parrillero from "../../Imagenes/parrillero.webp"






export const Cursos = () => {
    return (
    <>
        <PestañaDelgada/>
        
        <section className="curso">

        <div className="cuadrocurso">
            <img className="curso__image" src={charcutero} alt="Charcuteria" />
            <h2 className="curso__titulo">Charcuteria</h2>
            <h5 className="productos__cantidad">40hr</h5>
            <h5 className="curso__subtitulo">Como hacer embutidos y curados</h5>
            <h2 className="productos__precio">$155.000</h2>
            <p className="curso__resumen">Arte de preparar y conservación de carnes, embutidos y otros productos derivados
                del cerdo. Selección de materias primas, técnicas de procesamiento, uso de herramientas y equipos,
                almacenamiento de los productos, seguridad alimentaria y normativa sanitaria aplicable. Elaboración de
                productos gourmet y especialidades regionales. Degustación comparativa final entre distintos tipos de
                productos para desarrollar y entrenar un paladar crítico.</p>
            <p>mas detalles</p>
        </div>

        <div className="cuadrocurso">
            <img className="curso__image" src={parrillero} alt="Parrillero" />
            <h2 className="curso__titulo">Parrillero</h2>
            <h5 className="productos__cantidad">16hr</h5>
            <h5 className="curso__subtitulo">Como asar carne, al carbon y otras parrillas</h5>
            <h2 className="productos__precio">$85.990</h2>
            <p className="curso__resumen">Selección y preparación de diferentes cortes de carne, creación de marinadas y
                adobos, elección y preparación de leña o carbón para la parrilla, el control de la temperatura y el
                tiempo de cocción, y la creación de salsas y aderezos para complementar los platos. Técnicas avanzadas
                de cocción indirecta, inversión de la carne y ahumado. Seguridad e higiene en la manipulación de
                alimentos y en la preparación de la parrilla.</p>
            <p>mas detalles</p>
        </div>

    </section>
    </>
    )
}