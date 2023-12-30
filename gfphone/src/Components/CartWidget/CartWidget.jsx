import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


const CartWidget = () =>{

    const {cantidadCarrito} = useContext(CartContext);

    return(
        <div>
            <Link className="menu-link" to="/carrito" >Carrito
            <span>{cantidadCarrito()}</span>
            </Link >
        </div>
    )
}
export default CartWidget