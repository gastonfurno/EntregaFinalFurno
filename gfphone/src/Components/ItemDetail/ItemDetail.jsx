import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext";

const ItemDetail =( {item}) =>{

    const {carrito, agregarAlCarrito} = useContext (CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () =>{
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () =>{
       cantidad < item.stock && setCantidad(cantidad + 1)
    }
    
   
    return (
        <div className="detailProducto">
        <div className="imagendetail">
         <img src={item.imagen} alt={item.marca}/>
         </div>  

        <div className="descripcionProd">
        <h3>{item.nombre}</h3>
        <p> {item.descripcion}</p> 
        <p> Precio: ${item.precio}</p> 
        <p> Stock Disponible: {item.stock}</p>
        <ItemCount
         cantidad = {cantidad} 
         handleSumar={handleSumar} 
         handleRestar={handleRestar}
         handleAgregar={() => {agregarAlCarrito(item, cantidad)}} />
        </div>
        </div>
    )

    }


export default ItemDetail