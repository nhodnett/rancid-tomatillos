import React, { Component } from 'react';
import '../styles/MovieCard.css';

const MovieCard = (props) => {
  const {
    id, 
    poster_path, 
    title, 
  } = props.movie;



    return(
      <div 
        key={id}
        role="button" 
        className='Card'
      >
        <img className='poster' src={poster_path}/>
        <p className='movieTitle'>{title}</p>
      </div>
    )
}


export default MovieCard;
