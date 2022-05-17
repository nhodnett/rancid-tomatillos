import React from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <NavLink to="/">
      <h1 className='siteHeader'>
      <span className="rancid">Rancid</span>
      <span className="tomatillos"> Tomatillos</span>
      </h1>
      </NavLink>
    </nav>
  )
}


export default Navbar;
