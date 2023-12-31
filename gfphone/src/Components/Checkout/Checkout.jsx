import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/config";

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const {carrito, totalApagar, limpiarCarrito} = useContext(CartContext);

    const {register, handleSubmit} = useForm();

    const comprar = (data) =>{
        const pedido= {
            cliente: data,
            productos: carrito,
            total: totalApagar()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
        .then ((doc) => {
            setPedidoId(doc.id)
            limpiarCarrito();
        })
    }

        if (pedidoId){
            return(
                <div>
               <h1 className="finalCompra">Gracias por su compra!!!</h1>
               <p className="ordenCompra"> Orden de compra: {pedidoId}</p> 
               </div>
            )
        }
     
return (
    <div>
    <h2 className="contactoForm">Finalzar Compra</h2>

    <form className="datosFormulario" onSubmit={handleSubmit(comprar)}>

    <input className="datos" type="text" placeholder="Ingresá tu nombre" {...register("nombre")}/>
    <input className="datos" type="email"  placeholder="Ingresa tu email"{...register("email")}/>
    <input className="datos" type="phone"  placeholder="Ingresa tu telefono"{...register("telefono")}/>
    

    <button className="buttonFormulario" type="submit">Comprar</button>
</form>
</div>
)

}
export default Checkout