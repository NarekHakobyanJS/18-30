import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import './Products.css'
const Products = ({products, addToCart}) => {
   
  return (
    <div className='products'>
        {
            products.map((product) => {
                return <ProductCard key={product.id}  addToCart={addToCart} product={product}/>
            })
        }
    </div>
  )
}

export default Products