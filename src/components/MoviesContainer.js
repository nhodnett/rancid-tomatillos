import React, { Component } from 'react';
import MovieCard from './MovieCard';
import '../styles/MoviesContainer.css';

class MoviesContainer extends Component{
  constructor() {
    super();
    this.state = {
      movies: [],
      errorMessage: ''
    }
}

componentDidMount = () => {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => {
    if(response.status === 200) {
      return response.json()
    }
    throw new Error(this.getErrorMessage(response.status))})
  .then(data => this.setState({movies: data.movies}))
  .catch(error => {
    this.setState({errorMessage: error.message})
  })
}

getErrorMessage = (status) => {
  switch(true) {
    case (status >= 300 && status <= 399):
    return `${status}: Redirection message`
    break;
    case (status >= 400 && status <= 499):
    return `${status}: Client error`
    break;
    case (status >= 500):
    return `${status}: Server error`
    break;
    default:
    return 'I have no idea what this error message is for...';
  }
}

render() {
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
