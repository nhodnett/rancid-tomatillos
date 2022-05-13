import React, { Component } from 'react';
import Navbar from './components/Navbar'
import MovieDetails from './components/MovieDetails'
import MoviesContainer from './components/MoviesContainer'
import './App.css';
import movieDetails from './data/movieDetails';
import moviesData from './data/movieData';

class App extends Component{
  constructor() {
    super();
    this.state = {
      movieSelected: 0,
      movieDetails: movieDetails,
      movies: []
    }
  }

  handleClick = (id) => {
    // console.log(id)
    this.setState({
      movieSelected: id
    })
    // console.log(this.state)
  }

  componentDidMount = () => {
    this.setState({ movies: moviesData.movies })
  }
  //
  // componentDidUpdate = () => {
  // }
  //
  // componentWillUnmount = () => {
  // }

  render() {
    return (
      <main>
        <Navbar 
            movieSelected={!!this.state.movieSelected}
            handleClick={this.handleClick}
        />

        {this.state.movieSelected ? 
          <MovieDetails 
            movie={this.state.movieDetails}
          /> 
        : 
          <MoviesContainer 
            handleClick={this.handleClick}
            movies={this.state.movies}
          />
        }
      </main>
    )
  }

}

export default App;
