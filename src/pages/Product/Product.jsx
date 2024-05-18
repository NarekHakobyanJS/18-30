import React from 'react'
import { useParams } from 'react-router-dom'

const Product = ({products}) => {
    const {id} = useParams();

   let product = products.filter((el) => el.id === +id)
  

  return (
    <div>
        {
            product.map((p) => {
                return (
                    <div key={p.id}>
                        <h1>{p.title}</h1>
                        <img src={p.image} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Product