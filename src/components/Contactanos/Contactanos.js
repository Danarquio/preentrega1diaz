import './Contactanos.css';
import { PestañaDelgada } from '../PestañaDelgada/PestañaDelgada';

import { useForm } from 'react-hook-form';



export const Contactanos = () => {

    const { register, handleSubmit} = useForm();

    const enviar = (data) =>{
         console.log(data);
    }


    return (
        <>
        <PestañaDelgada/>
        <section className="curso">


        <div className="cuadrocurso">

        <form onSubmit={handleSubmit(enviar)}>

            <h3>Nombre</h3>
            <input 
                type="text" 
                placeholder="Ingresa tu nombre"
                {...register("nombre")}  
            />

            <h3>Correo electrónico</h3>
            <input 
                type="email" 
                placeholder="Ingresa tu e-mail"
                {...register("email")}    
            />

            <h3>Teléfono</h3>
            <input 
                type="phone" 
                placeholder="Ingresa tu teléfono"
                {...register("telefono")}    
            />

          
            <h3>¿Es usted cliente regular?</h3>
            <input type="radio" value="Si" {...register("cliente")} />
            <label>Si</label>

            <input type="radio" value="No" {...register("cliente")} />
            <label>No</label>
          

            <h3> ¿Cuáles son sus productos favoritos?</h3>
            <input type="checkbox" name="producto" value="jamon" {...register("jamon",{value:true})} />
            <label>Jamon</label>

            <input type="checkbox" name="producto" value="charqui" {...register("charqui", {value:true})} />
            <label>Charqui</label>

            <input type="checkbox" name="producto" value="chorizos" {...register("chorizo" , {value:true})} />
            <label>Chorizo</label>


            <div>
                <textarea 
                placeholder="Déjanos un mensaje" 
                {...register("mensaje")}
                name="mensaje" 
                id="" 
                cols="30" 
                rows="10">
                
                </textarea>
            </div>

            <button type="submit">Enviar</button>

        </form>

      </div>


      <div className="cuadroblog">
        <iframe
          className="mapgoog"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.1419698545214!2d-70.63677418495217!3d-33.44560758077538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5779c6f5a5d%3A0xcd7fa4cd54c9a3fb!2sMar%C3%ADn%20145%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1675910210230!5m2!1ses-419!2scl"
          width="600"
          height="550"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>

    </>
  );
};