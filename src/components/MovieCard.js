import React, { Component } from 'react';
import '../styles/MovieCard.css';

const MovieCard = (props) => {
  const {
    id, 
    poster_path, 
    title, 
  } = props.movie;

  const handleClick = props.handleClick

    return(
      <div 
        key={id}
        role="button" 
        className='Card'
        onClick={() => {handleClick(id)}}
      >
        <img className='poster' src={poster_path}/>
        <p className='movieTitle'>{title}</p>
      </div>
    )
}


export default MovieCard;
