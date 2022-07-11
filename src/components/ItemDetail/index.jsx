import React, { useState } from 'react'
import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount';

const ItemDetail = ({product}) => {
  const [show, setShow] = useState (false); // Estado para mostrar los botones de compra

  const onAdd = (qty) => {
    setShow(true)
    console.log(qty);
  };

  const navigate = useNavigate();

  const navigateCart = () =>{
    navigate('/cart');
  }
  const navigateHome = () => {
    navigate('/');
  }

  console.log(product);

  const {nombre, marca, precio, img, cantidad } = product;
  const estilo = { width: '18rem', margin: 15 }; 
    return (
        <div>
        <Card style={estilo}>
         <Card.Img variant="top" src={img} style={{ maxHeight: '280px' }}/>
         <Card.Body>
         <Card.Title>{nombre}</Card.Title>
         <Card.Text>
           {marca}
           <br />
           ${precio}
         </Card.Text>         
       </Card.Body>
       {!show ? <ItemCount onAdd ={onAdd} maxQty= {cantidad} /> : 
        <>
          <Button variant='primary' onClick={navigateCart}>Ir al carrito</Button> 
          <Button variant='primary' onClick={navigateHome}>Seguir comprando</Button>
         </>
        }
     </Card>
     </div>
  )
}

export default ItemDetail