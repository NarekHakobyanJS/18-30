import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { insatace } from '../../api/api';


// 
const Product = () => {
    const [product, setPorduct] = useState(null)
    const { id } = useParams();
    useEffect(() => {
        insatace.get(`/products/${id}`)
            .then((res) => setPorduct({
                ...res.data,
                initprice: res.data.price,
                count: 1
            }))
    }, [])


    return (
        <div>
            <h1>{product?.title}</h1>
            <img src={product?.image} />
        </div>
    )
}

export default Product