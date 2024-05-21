import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({product, addToCart}) => {
  const [textLength, setTextLength] = useState(20);

  
  const addItem = (item) => {
    addToCart(item)
  }
  return (
    <div className='productCard'>
        <NavLink to={`/products/${product.id}`}>
            <img  src={product.image} />
        </NavLink>
        <h4>{product.title.length <= textLength ? product.title : `${product.title.slice(0, textLength)}...`}</h4>
        <button onClick={() => addItem(product)}>add To Card</button>
    </div>
  )
}

export default ProductCard