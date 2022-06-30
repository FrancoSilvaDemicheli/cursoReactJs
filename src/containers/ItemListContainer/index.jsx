import React, {useState} from "react";
import { useEffect } from "react";
import ItemList from "../../components/ItemList";


const ItemListContainer = ({greeting, children}) => {
    
    //Hook de estado
    const [productos, setProductos] = useState([]); // todos los Estados se declaran de la misma manera const [variable, setVariable] = useState('valor inicial de la variable')
    

    useEffect( ()=>{
       const getProducts = async () => {
            try {
                const response = await fetch('/DDBB/DDBB.json');
                const data = await response.json();                
                setProductos(data);
            } catch (error) {
                console.log('Hubo un error');
                console.log(error);                
            }
        }
        getProducts();
    },[])

    
    return (
        <div style={{margin: '15px'}}>
            <p>{greeting}</p>            
            <ItemList products={productos}/>          
            
        </div>
    )
}

export default ItemListContainer