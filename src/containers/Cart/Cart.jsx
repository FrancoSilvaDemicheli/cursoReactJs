import React, { useContext } from 'react'
import { Table } from 'react-bootstrap';
import { Shop } from '../../context/ShopContext';

const Cart = () => {
  const { cart } = useContext(Shop);
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
          return 
          <tr>
              <td key={producto.id}> {cart.index} </td>
              <td>{producto.nombre}</td>
              <td>{producto.marca}</td>
              <td>{producto.precio}</td>
              <td><img src={producto.img} width='50px' /></td>              
          </tr>
        })}
        

      </tbody>

    </Table>
  )

}

export default Cart