import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

  const [productDetail, setProductDetail] = useState({});
  const {productId} = useParams();
  


    useEffect(() =>{
        const getProductos = async() =>{

          try {
            const response = await fetch('/DDBB/DDBB.json');
            const data = await response.json();                
            setProductDetail(data.find(item => item.id == productId));
        } catch (error) {
            console.log('Hubo un error');
            console.log(error);                
        }
        }
        
        getProductos();
    }, [productId])

    console.log(productDetail);

  return (
    <ItemDetail product={productDetail}/>
  )
}

export default ItemDetailContainer