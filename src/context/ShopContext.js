import React, { createContext, useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({ children}) => {

    const [estadoA, setEstadoA] = useState("default")
    
    const [cart, setCart] = useState([]);

    const addItem = (producto, cantidad) => {
        console.log(producto, cantidad);
    }

    return (
        <Shop.Provider value = {{estadoA, setEstadoA, addItem}}>
            {children}
        </Shop.Provider>
  )
}

export default ShopProvider