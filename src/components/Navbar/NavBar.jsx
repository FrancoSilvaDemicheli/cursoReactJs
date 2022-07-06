import React from "react"; // Siempre! Hay que importar react para utilizar el return
import { Link } from "react-router-dom";
import CarWidget from "./../cartWidget/index";
import './NavBar.css';

const NavBar = () => {
    return (
        <ul style={{width: '100%'}}>
            <li><Link to= '/'>Home</Link></li>
            <li><Link to= '/category/inodoros'>Inodoros</Link></li>
            <li><Link to= '/category/bides'>Bidets</Link></li>
            <li><Link to= '/category/depositos'>Depositos</Link></li>
            <li><Link to= '/category/lavatorios'>Lavatorios</Link></li>
            <CarWidget />
        </ul>
        
    )
}

export default NavBar; //Hay que exportarlo para poder importarlo dentro de app.jsx