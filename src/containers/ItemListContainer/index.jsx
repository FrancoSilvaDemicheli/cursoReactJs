import React, {useState} from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import { db } from "../../firebase/config";
import { collection, query, getDocs } from "firebase/firestore";


const ItemListContainer = ({greeting, children}) => {
    
    const {categoryId} = useParams();    

    //Hook de estado
    const [productos, setProductos] = useState([]); // todos los Estados se declaran de la misma manera const [variable, setVariable] = useState('valor inicial de la variable')
    

    useEffect( ()=>{
        const getProducts = async () => {
            try {
                const q = query(collection(db, "products"));
                const querySnapshot = await getDocs(q);
                const productos = [];
                querySnapshot.forEach((doc) => {            
                productos.push({id: doc.id, ...doc.data});
                });

                // const response = await fetch('/DDBB/DDBB.json');
                // const data = await response.json();

                if (categoryId){
                    setProductos( productos.filter (item => item.category === categoryId) )
                }     
                else {setProductos(productos);}           
                
            } catch (error) {
                console.log('Hubo un error');
                console.log(error);                
            }
        }
        getProducts();
    },[categoryId])

    
    return (
        <div style={{margin: '15px'}}>
            <p>{greeting}</p>            
            <ItemList products={productos} style={{margin: 15}}/>          
            
        </div>
    )
}

export default ItemListContainer