import React, { createContext, useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({ children}) => {

    const [estadoA, setEstadoA] = useState("default")
    
    const [cart, setCart] = useState([]);

    const addItem = (producto, cantidad) => {
        
        const productoRepetido = isInCart(producto);
        console.log(productoRepetido);
        if (productoRepetido){
            productoRepetido.quantity += cantidad;
            setCart([...cart]);

        }else{
            setCart([...cart, {...producto, quantity: cantidad}]);
        }

    }

    const isInCart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id);
    }

    return (
        <Shop.Provider value = {{estadoA, setEstadoA, addItem, cart}}>
            {children}
        </Shop.Provider>
  )
}

export default ShopProvider