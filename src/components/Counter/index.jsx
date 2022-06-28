import React, {useState} from "react"
import swal from "sweetalert";

import './style.css'; // PREGUNTAR COMO HACER EL IMPORT!

//funcion para Contador
const ItemCount = ({onAdd}) => {
    const initial = 1 ;//El numero inicial de una compra deberá ser igual o mayor 1
    const stock = 10 ; //Stock del producto, no se va a poder agregar mas de esa cantidad en la compra

    //Hook de estado
    const [qty, setQty] = useState (initial);

    //Funcion para sumar un numero al inicial
    const addProduct = (num) => {
        setQty(qty + num)
    };

    return (
        <div className="count-container">
            <div className="countContainetContador">

                
                <button 
                className="countContainerButton"
                onClick={() => addProduct(-1)}
                disabled = {qty === initial ? true : null }>
                    -
                </button>

                <span className="countContainerQty">{qty}</span>

                <button 
                className="countContainerButton"
                onClick={() => addProduct(+1)}
                disabled = {qty === stock ? true : null }>
                    +
                </button>


            </div>

            <button className="button-primary"
            onClick={() => {onAdd (qty);
                swal(`Añadido al carrito ${qty} productos`); 
            }}
            disabled={stock === 0 ? true : null}>
                Añadir al carrito
            </button>
        </div>
    );
};

export default ItemCount;