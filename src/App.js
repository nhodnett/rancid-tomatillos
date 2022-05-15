import React, { Component } from 'react';
import Navbar from './components/Navbar'
import MovieDetails from './components/MovieDetails'
import MoviesContainer from './components/MoviesContainer'
import './App.css';
import movieDetails from './data/movieDetails';

class App extends Component{
  constructor() {
    super();
    this.state = {
      movieSelected: 0,
      movieDetails: movieDetails,
      movies: []
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      // this.getErrorMessage(response.status)
      if(response.status === 200) {
        return response.json()
      }
      throw new Error(this.getErrorMessage(response.status))})
    .then(data => this.setState({movies: data.movies}))
    .catch(err => alert(err))
    //this.setState({ movies: moviesData.movies })
  }

  handleClick = (id) => {
    {!!id ? fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      // this.getErrorMessage(response.status)
      if(response.status === 200) {
        return response.json()
      }
      throw new Error(this.getErrorMessage(response.status))})
    .then(data => {
      this.setState({movieSelected: true, movieDetails: data.movie})})
    .catch(err => alert(err))
    :
      this.setState({movieSelected: false})
    }
  }

  getErrorMessage = (status) => {
    switch(true) {
      case (status >= 300 && status <= 399):
      return 'Redirection message'
      break;
      case (status >= 400 && status <= 499):
      return 'Client error'
      break;
      case (status >= 500):
      return 'Server error'
      break;
      default:
      return 'I have no idea what this error message is for...';
    }
    //let message = `Something went wrong while obtaining data! Try again later...`;
  }

  //
  // componentDidUpdate = () => {
  // }

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
