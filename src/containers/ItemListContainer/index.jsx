import React, {useState} from "react";
import { useEffect } from "react";


const ItemListContainer = ({greeting, children}) => {
    const [data, setData] = useState([]); // todos los Estados se declaran de la misma manera
    /*const productos = [                     // const [variable, setVariable] = useState('valor inicial de la variable')
        {id:'1', title: 'prod 1', precio: 3000},
        {id:'2', title: 'prod 2', precio: 2000},
        {id:'3', title: 'prod 3', precio: 1000}
    ]
    const task = new Promise (
        (res, rej)=>{
            setTimeout(()=>{
                res(productos)
            },2000)
        }
    )*/

    // useEffect( ()=>{
    //    const getProducts = async () => {
    //         try {
    //             const response = await fetch('\DDBB\DDBB.json')
    //         }
    //    },
    // },[])

    console.log(data);
    
    return (
        <div>
            <p>{greeting}</p>
            {children}
            <img scr='/assets/griferias.jpg' alt='griferias img' />
            {/* <button className="btn btn-primary">Preione aquí</button> */}
        </div>
    )
}

export default ItemListContainer