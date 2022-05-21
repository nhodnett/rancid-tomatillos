import React, { Component } from 'react';
import MovieCard from './MovieCard';
import '../styles/MoviesContainer.css';
import ErrorMessage from './ErrorMessage';
import { apiCalls } from '../classes/apiCalls';

class MoviesContainer extends Component{
  constructor() {
    super();
    this.state = {
      movies: [],
      errorMessage: ''
    }
  }

  handleState = (state) => {
    this.setState(state)
  }

  componentDidMount = () => {
    apiCalls(this.handleState)
}

render() {
  if (this.state.errorMessage) return (<ErrorMessage message={this.state.errorMessage}/>)
  const movieCards = this.state.movies.map(movie => {
    return <MovieCard
      key={movie.id}
      movie={movie}
    />
  })
  return (
    <div className='MoviesContainer'>
      {movieCards}
    </div>
  )
}
}

export default MoviesContainer;
