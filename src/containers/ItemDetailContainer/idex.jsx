import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

  const [productDetail, setProductDetail] = useState({});

    useEffect(() =>{
        const getPrpductos = async() =>{

            try {
                const response = await fetch('/DDBB/DDBB.json');
                const data = await response.json();           
                setProductDetail(data);
                
            } catch (error) {
                
            }
        }
        
        getPrpductos();
    }, [])

  return (
    <ItemDetail product={productDetail}/>
  )
}

export default ItemDetailContainer