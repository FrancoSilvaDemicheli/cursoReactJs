import React from 'react'
import { Button, Card } from 'react-bootstrap';

const ItemDetail = ({product}) => {

  console.log(product);

  const {nombre, marca, precio, img } = product;
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
           {precio}
         </Card.Text>
         <Button variant="primary">Ver más</Button>
       </Card.Body>
     </Card>
     </div>
  )
}

export default ItemDetail