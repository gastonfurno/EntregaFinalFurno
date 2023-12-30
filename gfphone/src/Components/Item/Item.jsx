import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return (
        <div>
            <img src={producto.imagen} alt={producto.nombre}/>
            <h3>{producto.nombre}</h3>
            <p> Precio: ${producto.precio}</p>
            <p> Stock:{producto.stock}</p>
            <Link className="detalle" to= {`/item/${producto.id}`}> Detalle del producto</Link>
        </div>
    )
}
export default Item
