import React, { createContext, useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({ children}) => {    
    
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

    const removeItem = (id) => {
        const productosFiltrados = cart.filter(producto => producto.id !== id);
        setCart(productosFiltrados);
    }

    return (
        <Shop.Provider value = {{addItem, cart, removeItem}}>
            {children}
        </Shop.Provider>
  )
}

export default ShopProvider