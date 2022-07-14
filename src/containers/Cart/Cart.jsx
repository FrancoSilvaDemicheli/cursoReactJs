import React, { useContext } from 'react'
import { Shop } from '../../context/ShopContext';

const Cart = () => {
    const {cart} = useContext(Shop);
    console.log(cart);
  return (
    <ul>
        {cart.map (producto =>{
            return <li key={producto.id}><img src={producto.img} width='50px' /> {producto.nombre} </li>
        })}
    </ul>
  )
}

export default Cart