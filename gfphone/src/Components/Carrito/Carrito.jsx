import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";

const Carrito = () =>{

    const {carrito, totalApagar, limpiarCarrito} = useContext(CartContext);
    const handleLimpiar = () =>{
        limpiarCarrito();
    }

    return(
        <div className="contenedorCarrito">
            <h1>Carrito</h1>

            {
                carrito.map((prod) => (
                    <div className="productoEnCarrito" key={prod.id}>
                    <h2>{prod.nombre}</h2>
                    <p>Precio por unidad: ${prod.precio}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                    <p>Total: $.{prod.precio * prod.cantidad}</p>
                    </div>
                )
                )
            }
            { 
            carrito.length > 0 ?
            <>
            <h2 className="totalPagar">Total a Pagar: ${totalApagar()}</h2>
            <button className="limpiarCarrito" onClick={handleLimpiar}>Limpiar Carrito</button>
            <Link to="/Checkout"><button className="finalizarCompra">Finalizar Compra</button></Link>
            </>:
            <h2 className="totalPagar"> El carrito se encuentra vacio</h2>
            }
    </div>
    )
}

export default Carrito 