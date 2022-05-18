import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MovieDetails from './components/MovieDetails';
import MoviesContainer from './components/MoviesContainer';
import './App.css';
import movieDetails from './data/movieDetails';
import ErrorMessage from './components/ErrorMessage';
import { Route, NavLink } from 'react-router-dom';

class App extends Component{
  constructor() {
    super();
    this.state = {
      movieSelected: 0,
      movieDetails: movieDetails,
      movies: [],
      errorMessage: ''
    }
  }

  render() {
    return (
      <main className="App">
        <Navbar />
        <Route exact path="/" component={ MoviesContainer } />
        <Route exact path="/:id" render={({ match }) => {
          return <MovieDetails id={match.params.id}/>
        }
        } />
      </main>
    )
  }

}

export default App;
