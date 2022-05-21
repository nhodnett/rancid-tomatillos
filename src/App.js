import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MovieDetails from './components/MovieDetails';
import MoviesContainer from './components/MoviesContainer';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component{
  constructor() {
    super();
    this.state = {
      movies: [],
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
