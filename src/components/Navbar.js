import React from 'react'
import {Link} from "react-router-dom"
import logo from '../logo.svg'
import Star from './Star/Star'
function Navbar() {
  return (
    <Star>
      <nav className='navbar' style={{backgroundColor: 'rgba(99,51,104,.37)'}}>
     <div className="nav-center">
     <Link to= "/">
       <img src={logo} alt="cocktail db logo" className="logo"></img>
     </Link>

     <ul className='nav-links'>
     <li>
       <Link to="/">Home</Link>
     </li>
     <li>
      <Link to="about">About</Link>
     </li>
     </ul>

     </div>

    </nav>
    </Star>
    
  )
}

export default Navbar