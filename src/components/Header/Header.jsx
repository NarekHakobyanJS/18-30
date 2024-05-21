import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";

import './Header.css'

const Header = ({ carts }) => {
  return (
    <header>
      <div>
        <h5>logo</h5>
      </div>
      <nav>
        <NavLink to='/'>home</NavLink>
        <NavLink to='/products'>products</NavLink>
      </nav>
      <div>
        {
          carts.length ?
            <NavLink to='/carts'>
              <FaCartShopping />
            </NavLink>
            : <FaCartShopping />
        }
      </div>
    </header>
  )
}

export default Header