import React from 'react'
import { NavLink } from "react-router-dom";

function Navigation() {

  return (
    <div className='header'>

      <a href='#' className='logo'>Portfolio</a>

      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skill">Skill</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

    </div>
  )
}

export default Navigation