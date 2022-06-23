import React from "react"; // Siempre! Hay que importar react para utilizar el return
import CarWidget from "./cartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
        <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#news">Nosotros</a></li>
            <li><a href="#contact">Contacto</a></li>
            <li><a href="#about">Catálogo</a></li>  
            <CarWidget />
        </ul>
        
    )
}

export default NavBar; //Hay que exportarlo para poder importarlo dentro de app.jsx