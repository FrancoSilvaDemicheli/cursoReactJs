import Item from '../Item/idex.jsx';


const ItemList = ({products}) => {
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
            
        </div>
    );
};

export default ItemList;