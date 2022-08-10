import React, { useContext } from 'react'
import { Button, Table } from 'react-bootstrap';
import { Shop } from '../../context/ShopContext';

const Cart = () => {
  const { cart, removeItem } = useContext(Shop);
  console.log(cart);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Marca</th>
          <th>precio</th>
          <th> </th>
        </tr>

      </thead>
      <tbody>        
        {cart.map(producto => {
          return(
          <tr>
              <td key={producto.id}> {producto.quantity} </td>
              <td>{producto.nombre}</td>
              <td>{producto.marca}</td>
              <td>{producto.precio}</td>
              <td><img src={producto.img} width='50px' alt='img'/></td>
              {/* <Button variant="danger" onClick={removeItem(producto.id)}>X</Button>            */}
          </tr>
          )
        })}
        

      </tbody>

    </Table>
  )

}

export default Cart