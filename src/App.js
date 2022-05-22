import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MovieDetails from './components/MovieDetails';
import MoviesContainer from './components/MoviesContainer';
import './App.css';
import { Route } from 'react-router-dom';
import { apiCalls } from './classes/apiCalls';
import { Switch } from 'react-router-dom';

class App extends Component{
  constructor() {
    super();
    this.state = {
      movies: [],
      movieDetailsData: [],
      query: '',
      errorMessage: ''
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
    this.setState(prevState =>  ({movieDetailsData: [...prevState.movieDetailsData, movie]} ))
  }

  handleChange = (query) => {
    this.setState({query: query})
  }

  render = () => {
    return (
      <main className="App">
        <Navbar handleChange={this.handleChange} query={this.state.query}/>
        { this.state.query && <h2 className="resultsFeedback">Search results for '{this.state.query}'</h2> }
       { (this.state.movies.length === this.state.movieDetailsData.length) && <Switch>
          <Route exact path="/" render={() => <MoviesContainer errorMessage={this.state.errorMessage} movies={this.state.movies} query={this.state.query}/>} />
          <Route exact path="/:id" render={({ match }) => {
            return <MovieDetails id={match.params.id} movieDetails={this.state.movieDetailsData.find(movie => movie.id == match.params.id)}/>
          }} />
          <Route exact path="/search/:query" render={({ match }) => <MoviesContainer movies={this.state.movieDetailsData} query={match.params.query}/>} />
        </Switch>}
      </main>
    )
  }
}

export default App;
