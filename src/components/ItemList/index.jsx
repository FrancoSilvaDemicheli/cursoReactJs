import React from 'react'
import Item from '../Item/idex.jsx';


const ItemList = ({products}) => {
    console.log(products);
    return(
        <div className='product-list-container'>
        
            
            { products.length > 0 && products?.map((producto)=>{
                return (
                    <div key={producto.id}>
                        <Item 
                        name = {producto.nombre}
                        thumbnail = {producto.img}
                        price = {producto.precio}
                        stock = {producto.cantidad}
                        id = {producto.id}
                        />
                    </div>
                );
            })}
            
        </div>
    );
};

export default ItemList;