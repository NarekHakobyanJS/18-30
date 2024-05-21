import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Loyout = ({carts}) => {
  return (
    <div>
        <Header carts={carts}/>
        <Outlet />
    </div>
  )
}

export default Loyout