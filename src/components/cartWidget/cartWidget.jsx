import React from "react";
import './style.css';
import { TbShoppingCart } from 'react-icons/tb';
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";
const CarWidget = () => {

    const {cart} = useContext(Shop);

    const navigate = useNavigate();

    const cartNavigate= ()=>{
        navigate('/cart')
        console.log(cart);
    }


    return(
        <div onClick={cartNavigate}>
            <TbShoppingCart className="cart" size={32} />
            {cart.length && <span style={{position: 'absolute', right: "7.5%"}}> ({cart.length}) </span> }
        </div>
    )
}

export default CarWidget;