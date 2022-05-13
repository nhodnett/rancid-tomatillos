import React, { Component } from 'react';
import MovieCard from './MovieCard';
import '../styles/MoviesContainer.css';

const MoviesContainer = (props) => {
  const {movies} = props;
  //console.log(movies)
  return (
    <div className='MoviesContainer'>
      <MovieCard movie={movies[0]}/>
    </div>
  )
}

export default MoviesContainer;
