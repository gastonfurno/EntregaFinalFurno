import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav className="navbar">
            <Link  to= "/" className="logo"><img src="../../public/logo.png"></img></Link >
            <ul className="menu">
                <li><Link className="menu-link" to="/" >PRODUCTOS </Link ></li>
                <li><Link className="menu-link" to="/celulares/iPhone" >IPHONE</Link ></li>
                <li><Link className="menu-link" to="/celulares/Samsung" >SAMSUNG</Link ></li>
                <li><Link className="menu-link" to="/celulares/Motorola" >MOTOROLA</Link ></li>
                <li><Link className="menu-link" to="/Contacto" >CONTACTO</Link ></li>
                <li><CartWidget/> </li>
            </ul>
        </nav>
    )
}

export default NavBar