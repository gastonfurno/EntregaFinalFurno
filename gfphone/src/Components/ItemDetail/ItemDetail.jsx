
const ItemDetail =( {item}) =>{
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
        </div>
        </div>
    )


}

export default ItemDetail