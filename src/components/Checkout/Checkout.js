import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { toast } from 'react-toastify';
import "./Checkout.css"
import { Link } from 'react-router-dom';

const Checkout = () => {

    const [ pedidoId, setPedidoId] = useState("")

    const { carrito , calcularPrecioFinal , vaciarCarrito} = useContext (CartContext);

    const { register, handleSubmit} = useForm();

    const comprar = (data) =>{
         const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularPrecioFinal()
         }
         
         const pedidosRef = collection(db, "pedidos");

         addDoc(pedidosRef, pedido)
            .then ((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
                toast.success(`¡Pedido completado! Número de orden: ${doc.id}`)
            })
    }

    if (pedidoId) {
        return (
            <div className="ventanilla">
                <div className="finalizarCompra">
                <h1>Muchas gracias por tu compra</h1>
                <h3>tu numero de pedido es: {pedidoId} </h3>
                <Link to="/tienda">Volver a la tienda</Link>
                </div>
            </div>
        )
    }

  return (

    <div className="ventanilla">
        
    <form className="finalizarCompra" onSubmit={handleSubmit(comprar)}>
        <h1>Finalizar compra</h1>
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


        <button type="submit">Comprar</button>

    </form>

  </div>
  );
};

export default Checkout;
