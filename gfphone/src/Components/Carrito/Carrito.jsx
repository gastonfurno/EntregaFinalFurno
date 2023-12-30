import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Carrito = () =>{

    const {carrito, totalApagar, limpiarCarrito} = useContext(CartContext);
    const handleLimpiar = () =>{
        limpiarCarrito();
    }

    return(
        <div>
            <h1>Carrito</h1>

            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                    <h2>{prod.marca}</h2>
                    <p>Precio por unidad: $.{prod.precio}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                    <p>Total: $.{prod.precio * prod.cantidad}</p>
                    </div>
                )
                )
            }
            <h2>Total a Pagar: ${totalApagar()}</h2>
            <button onClick={handleLimpiar}>Limpiar Carrito</button>
        </div>
    )
}

export default Carrito 