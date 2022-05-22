import React from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className='Navbar'>
      <NavLink to="/">
      <h1 className='siteHeader'>
        <span className="rancid">Rancid</span>
        <span className="tomatillos"> Tomatillos</span>
      </h1>
      </NavLink>
      <div className="searchContainer">
        <label htmlFor="movie-search">
        <span className="visually-hidden">Search by title or genre</span>
        </label>
        <input className="searchBar"
        type="text"
        id="movie-search"
        value={props.query}
        placeholder=" 🔍 Title... Genre..."
        onChange={event => props.handleChange(event.target.value)}/>
      </div>
    </nav>
  )
}


export default Navbar;
