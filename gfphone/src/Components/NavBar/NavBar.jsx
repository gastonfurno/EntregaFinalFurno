import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="navbar">
            <Link  to= "/" className="logo"><h1>GfPhone</h1></Link >
            <ul className="menu">
                <li><Link className="menu-link" to="/" >HOME </Link ></li>
                <li><Link className="menu-link" to="/celulares" >SMARTPHONES </Link ></li>
                <li><Link className="menu-link" to="/celulares/iPhone" >IPHONE</Link ></li>
                <li><Link className="menu-link" to="/celulares/Samsung" >SAMSUNG</Link ></li>
                <li><Link className="menu-link" to="/celulares/Motorola" >MOTOROLA</Link ></li>
            </ul>
        </nav>
    )
}

export default NavBar