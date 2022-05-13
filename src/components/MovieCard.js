import React, { Component } from 'react';
import '../styles/MovieCard.css';

const MovieCard = (props) => {
  const {id, poster_path, title} = props.movie;
  //console.log(id, poster_path, title);
    return(
      <div className='Card' key={id}>
        <img src={poster_path}/>
        <p>{title}</p>
      </div>
    )
}


export default MovieCard;
