import React, { useState } from 'react'
import './Cart.css'

const Cart = ({ cart, changeCount }) => {


    /// asxhatuma bayc etqane law chi asxhatum 
    
    const [count, setCount] = useState(cart.count)

    const minus = () => {
        if (count > 1) {
            setCount(count - 1)
            changeCount(cart, count)
        }
    }


    const plus = () => {
        setCount(count + 1)
        changeCount(cart, count)
    }
    return (
        <div className='cartItem'>
            <div>
                <h4>{cart.title}</h4>
                <img width={110} src={cart.image} />
            </div>
            <div className='cartBTNs'>
                <button onClick={minus}>-</button>
                <span>{cart.initprice}</span>
                <button onClick={plus}>+</button>
            </div>
        </div>
    )
}

export default Cart