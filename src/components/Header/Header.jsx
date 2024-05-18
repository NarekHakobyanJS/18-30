import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
   <header>
    <div>
        <h5>logo</h5>
    </div>
    <nav>
        <NavLink to='/'>home</NavLink>
        <NavLink to='/products'>products</NavLink>
    </nav>
   </header>
  )
}

export default Header