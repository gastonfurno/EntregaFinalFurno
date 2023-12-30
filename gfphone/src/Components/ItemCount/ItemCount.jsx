import React from "react";


const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {

    

    return (<div>

        <button onClick={handleRestar}>-</button>
        <h4>{cantidad}</h4>
        <button onClick={handleSumar}>+</button>
        <button onClick={handleAgregar}>Agregar</button>
    </div>
   
    )

}

export default ItemCount