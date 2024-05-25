import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

import './Header.css'

const Header = ({ carts }) => {
  
  const user = "Ashot"
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
          <NavLink to={'/carts'}>
            <FaCartShopping />
          </NavLink>
        }
        <NavLink to={user === "Ahot" ? '/profile' : '/login'}>
          <FaUserAlt />
        </NavLink>
      </div>
    </header>
  )
}

export default Header