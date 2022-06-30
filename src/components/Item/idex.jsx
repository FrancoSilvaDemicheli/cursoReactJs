import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Item = ({ producto }) => {

  const { nombre, marca, precio, img } = producto;
  const estilo = { width: '18rem', margin: 15 }
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
export default Item