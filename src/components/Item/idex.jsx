import React from 'react'

const Item = ({productos}) => {
  return (
    <div>
        {productos.map(producto =>{
            return <Item product = {producto.nombre} /*Lo que va dentro de las llaves es el contenido, lo tro es la prop*/  />
        })}
    </div>
  )
}

export default Item