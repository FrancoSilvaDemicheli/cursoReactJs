import React, {useState} from "react";
import { useEffect } from "react";

const ItemListContainer = ({greeting, children}) => {
    const [color, setColor] = useState('blue');

    const cambiarCoolor = () => {
        setColor('red');
    }

    useEffect(()=>{
        console.log('se monto el componente');
    }, []/*array vacio es lo primero que se ejecuta cuando se monta el componente. Se usa en caso de fetch*/ )
    

    return (
        <div style = {{backgroundColor: color}}>
            <p>{greeting}</p>
            <p>{color}</p>
            <button onClick ={cambiarColor}>
                cambiar color a red
            </button>
        </div>
    )
}

export default ItemListContainer