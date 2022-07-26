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
        const docRef = doc(db, "products", productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log(docSnap.id);
          console.log("Document data:", docSnap.data());
          const productDetail = {id: docSnap, ...docSnap.data()};
          setProductDetail(productDetail);

        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        // const response = await fetch('/DDBB/DDBB.json');
        // const data = await response.json();
        // setProductDetail(data.find(item => item.id == productId));        
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