import React from "react"; // Siempre! Hay que importar react para utilizar el return
import { Link } from "react-router-dom";
import CarWidget from "./../cartWidget/index";
import './NavBar.css';

const NavBar = () => {
    return (
        <ul style={{width: '100%'}}>
            <li><Link to='/'>Home</Link></li>
            {/* <li><Link to= '/category/'>Electronics</Link></li>
            <li><Link >Contacto</Link></li>
            <li><Link >Catálogo</Link></li>   */}
            <CarWidget />
        </ul>
        
    )
}

export default NavBar; //Hay que exportarlo para poder importarlo dentro de app.jsx