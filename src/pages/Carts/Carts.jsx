import React from 'react'
import './Carts.css'
import Cart from '../../components/Cart/Cart'
import OrderForm from '../../components/OrderForm/OrderForm'

const Carts = ({carts, changeCount, allPrice}) => {
  return (
    <div>
      <div>
        {
          carts.map((cart) => {
            return <Cart cart={cart} key={cart.id} changeCount={changeCount}/>
          })
        }
      </div>
      <div>
        <OrderForm />
        <h2>totalPrice : {allPrice}</h2>

      </div>
    </div>
  )
}

export default Carts