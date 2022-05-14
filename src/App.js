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

  handleClick = (id) => {
    // console.log(id)
    {!!id ? fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      this.setState({movieSelected: true, movieDetails: data.movie})})
    :
      this.setState({movieSelected: false})
    // fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    // .then(response => response.json())
    // .then(data => this.setState({movieSelected: false, movies: data.movies}))
    }
  }
    // this.setState({
    //   movieSelected: id
    // console.log(this.state)
  //}

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => this.setState({movies: data.movies}))
    //this.setState({ movies: moviesData.movies })
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
