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
      movieSelected: true,
      movieDetails: movieDetails,
      movies: []
    }
  }

  componentDidMount = () => {
    //console.log(movies)
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
        <Navbar />

        {this.state.movieSelected ? <MovieDetails movie={this.state.movieDetails}/> : <MoviesContainer movies={this.state.movies}/>}
      </main>
    )
  }

}




export default App;
