import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MovieDetails from './components/MovieDetails';
import MoviesContainer from './components/MoviesContainer';
import './App.css';
import { Route } from 'react-router-dom';
import { apiCalls } from './classes/apiCalls';

class App extends Component{
  constructor() {
    super();
    this.state = {
      movies: [],
      movieDetailsData: []
    }
  }

  componentDidMount = () => {
    apiCalls(this.handleState)
  }

  handleState = (state) => {
    this.setState(state, () => {
      this.getDetails()
    })
  }

  getDetails = () => {
    this.state.movies.forEach(movie => {
      apiCalls(this.handleStateDetails, movie.id)
    })
  }

  handleStateDetails = (movie) => {
    this.setState({ movieDetailsData: [...this.state.movieDetailsData, movie] })
  }

  render() {
    return (
      <main className="App">
        <Navbar />
        <Route exact path="/" render={() => {
          return this.state.movies && <MoviesContainer movies={this.state.movies}/>
        }} />
        <Route exact path="/:id" render={({ match }) => {
          return <MovieDetails id={match.params.id}/>
        }} />
      </main>
    )
  }
}

export default App;
