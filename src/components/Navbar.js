import React from 'react';
import '../styles/Navbar.css';

const Navbar = (props) => {
  const movieSelected = props.movieSelected;
  const handleClick = props.handleClick;

  return (
    <nav className='Navbar'>
      <h1 className='siteHeader'onClick={() => handleClick(0)}>
      <span className="rancid">Rancid</span>
      <span className="tomatillos"> Tomatillos</span>
      </h1>
    </nav>
  )
}


export default Navbar;
