import React, { Component } from 'react';
import MovieCard from './MovieCard';
import '../styles/MoviesContainer.css';
import ErrorMessage from './ErrorMessage';

class MoviesContainer extends Component{
  constructor() {
    super();
    this.state = {
      movies: [],
      filteredMovies: [],
      query: '',
      errorMessage: ''
    }
  }

  componentDidMount = () => {
    this.setState({movies: this.props.movies, query: this.props.query})
  }

  render() {
    if (this.state.errorMessage) return (<ErrorMessage message={this.state.errorMessage}/>)

    const filteredMovies = this.filterMovies(this.state.movies)
    const movieCards = this.getMovieCards(filteredMovies)
    return (
      <div className='MoviesContainer'>
        {movieCards}
      </div>
    )
  }

  filterMovies = (movies) => {
    const { query } = this.state;
    return movies.filter(movie => {
      return query ? movie.title.toLowerCase().includes(query.toLowerCase()) : true
    }) 
  }

  getMovieCards = (movies) => movies.map(movie => <MovieCard key={movie.id} movie={movie} />)

}

export default MoviesContainer;
