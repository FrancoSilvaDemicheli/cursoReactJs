import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";

import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {

  const [productDetail, setProductDetail] = useState({});
  const { productId } = useParams();



  useEffect(() => {
    const getProductos = async () => {

      try {
        const response = await fetch('/DDBB/DDBB.json');
        const data = await response.json();
        setProductDetail(data.find(item => item.id == productId));        
      }catch (error) {
      console.log('Hubo un error');
      console.log(error);
    }
  }

    getProductos();
}, [productId]);

return (
  <ItemDetail product={productDetail} />
)
}

export default ItemDetailContainer