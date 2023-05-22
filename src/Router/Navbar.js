import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const Navbar = () => {




  return (
    <nav className="menu navbar">

        <NavLink className="nav-link" to="/inst" >Inst</NavLink>
        <NavLink className="nav-link"  to="/school">School</NavLink>
        <NavLink className="nav-link" to="/college" >College</NavLink>
        <NavLink className="nav-link"  to='/university'>University</NavLink>
       
    </nav>
  )
}
export default Navbar
