import React, { useState, createContext } from "react";
export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const addToCart = (item, qty) =>{
        if(cart.some(product => product.id == item.id)){
            

        }else{ //cuando elcarrito no tiene el producto, entra aca
            const newItem = {... item , qty};
            setCart([... item, qty])

        }
    }

    return(
        <CartContext.Provider
        
        value = {{
            // Todo lo que queremos que este disponible en el context para toda la app

        }}>

        </CartContext.Provider>
    )
}

export default CartProvider;
