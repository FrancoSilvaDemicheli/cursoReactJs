import React, { useContext, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopContext';
import ItemCount from '../ItemCount';

const ItemDetail = ({product}) => {  
  const {addItem} = useContext(Shop)
  const navigate = useNavigate();

  const [qtyAdded, setQtyAdded] = useState(0);

  
  const onAdd = (qty) => {
    console.log(qty);
    addItem(product, qtyAdded)
    console.log(qtyAdded);
    setQtyAdded(2);    
  };
  
  
  const navigateCart = () =>{
    
    // addItem(product, qtyAdded)

    navigate('/cart');
  }

  const navigateHome = () => {
    navigate('/');
  }

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
       {!qtyAdded ? <ItemCount onAdd ={onAdd} maxQty= {cantidad} /> : 
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