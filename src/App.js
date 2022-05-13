import React, { Component } from 'react';
import Navbar from './components/Navbar'
import MoviesContainer from './components/MoviesContainer'
import './App.css';
import moviesData from './data/movieData';

class App extends Component{
  constructor() {
    super();
    this.state = {
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
        <MoviesContainer movies={this.state.movies}/>
      </main>
    )
  }

}




export default App;
