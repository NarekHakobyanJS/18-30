import React from 'react'
import './Carts.css'
import Cart from '../../components/Cart/Cart'
import OrderForm from '../../components/OrderForm/OrderForm'

const Carts = ({carts, changeCount, allPrice, ModalOpen, orderFormApp}) => {
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
        <OrderForm allPrice={allPrice} ModalOpen={ModalOpen} orderFormApp={orderFormApp}/>
       

      </div>
    </div>
  )
}

export default Carts