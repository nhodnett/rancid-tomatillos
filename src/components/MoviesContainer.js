import React, { Component } from 'react';
import MovieCard from './MovieCard';
import '../styles/MoviesContainer.css';

const MoviesContainer = (props) => {
  const {movies} = props;
  //console.log(movies)
  const movieCards = movies.map(movie => {
    return <MovieCard key={movie.id} movie={movie}/>
  })
  return (
    <div className='MoviesContainer'>
      {movieCards}
    </div>
  )
}

export default MoviesContainer;
