import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

const Item = ({ producto }) => {

  const { id, nombre, marca, precio, img } = producto;

  const estilo = { width: '18rem', margin: 15 }

  const navigate = useNavigate();

  const handleDetail = () => {

    console.log('Navegar al detail');
    navigate(`/detail/${id}`);
  }
  
  return (
    <div>
       <Card style={estilo} onClick={handleDetail}>
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