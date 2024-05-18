import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <div>
        <NavLink to={`/products/${product.id}`}>
            <img width={180} src={product.image} />
        </NavLink>
        <h4>{product.title}</h4>
        <button>add To Card</button>
    </div>
  )
}

export default ProductCard