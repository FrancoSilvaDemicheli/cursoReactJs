import React, { useContext } from 'react'
import { Shop } from '../../context/ShopContext.js';
import Item from '../Item/idex.jsx';


const ItemList = ({products}) => {

    const {setEstadoA} = useContext(Shop);

    const handleChangeState = () => {
        setEstadoA('otro valor')
    }

    return(
        <div className='product-list-container' style={{display:'flex', flexWrap:'wrap'}}>
        
            
            { products.length > 0 && products?.map((producto) => {
                return(
                    <Item
                        key={producto.id}
                        producto={producto}
                    />
                );
            })}
            <button onClick={handleChangeState}>Cambio de estado </button>
            
        </div>
    );
};

export default ItemList;