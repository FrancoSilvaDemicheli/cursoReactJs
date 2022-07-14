import React from "react";
import './style.css';
import { TbShoppingCart } from 'react-icons/tb';
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";
const CarWidget = () => {

    const {cart} = useContext(Shop);

    return(
        <div>
            <TbShoppingCart className="cart" size={32} />
            {cart.lenght && <span> ({cart.lenght}) </span> }
        </div>
    )
}

export default CarWidget;