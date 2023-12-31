import React from "react";


const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {

    

    return (
    <div className="itemProducto">

        <h4>Cantidad Seleccionada: {cantidad}</h4>
        <button className="botonItem" onClick={handleRestar}>-</button>
        <button className="botonItem" onClick={handleSumar}>+</button>
        <button className="botonAgregar" onClick={handleAgregar}>Agregar</button>
    </div>
   
    )

}

export default ItemCount