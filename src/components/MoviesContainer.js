import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MoviesContainer.css';

const MoviesContainer = (props) => {
  const {
    movies,
    handleClick
  } = props;

  const movieCards = movies.map(movie => {
    return <MovieCard
    key={movie.id}
    movie={movie}
    handleClick={handleClick}
    />
  })
  return (
    <div className='MoviesContainer'>
      {movieCards}
    </div>
  )
}

export default MoviesContainer;
