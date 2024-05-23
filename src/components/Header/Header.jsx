import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";

import './Header.css'

const Header = ({ carts }) => {
  const [locationData, setLocationData] = useState('');

  const location = useLocation();

  const navigate = useNavigate()

  // const goBack = () => {
  //   if(location.pathname === '/carts') {
  //     return true
  //   }else {
  //     return false
  //   }
  // }
  // console.log(navigate);
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
          <NavLink to={location.pathname !== '/carts' ? '/carts' : `/`}>
            <FaCartShopping />
          </NavLink>
        }
        
      </div>
    </header>
  )
}

export default Header