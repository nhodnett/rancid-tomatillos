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

  // componentDidMount = () => {
  //   fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  //   .then(response => {
  //     if(response.status === 200) {
  //       return response.json()
  //     }
  //     throw new Error(this.getErrorMessage(response.status))})
  //   .then(data => this.setState({movies: data.movies}))
  //   .catch(error => {
  //     this.setState({errorMessage: error.message})
  //   })
  // }

  // handleClick = (id) => {
  //   {!!id ? fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  //   .then(response => {
  //     if(response.status === 200) {
  //       return response.json()
  //     }
  //     throw new Error(this.getErrorMessage(response.status))})
  //   .then(data => {
  //     this.setState({movieSelected: true, movieDetails: data.movie})})
  //   .catch(error => {
  //     this.setState({errorMessage: error.message})
  //   })
  //   :
  //     this.setState({movieSelected: false, errorMessage: ''})
  //   }
  // }

  // getErrorMessage = (status) => {
  //   switch(true) {
  //     case (status >= 300 && status <= 399):
  //     return `${status}: Redirection message`
  //     break;
  //     case (status >= 400 && status <= 499):
  //     return `${status}: Client error`
  //     break;
  //     case (status >= 500):
  //     return `${status}: Server error`
  //     break;
  //     default:
  //     return 'I have no idea what this error message is for...';
  //   }
  // }

  render() {
    return (
      <main className="App">
        <Navbar />
        <Route exact path="/" component={ MoviesContainer } />
        <Route path="/:id" render={({ match }) => {
          return <MovieDetails id={match.props.id}/>
        }
        } />
      </main>
    )
  }

  // render() {
  //   return (
  //     <main>
  //       <Navbar />
  //       {this.state.errorMessage ?
  //       <ErrorMessage
  //           message={this.state.errorMessage}
  //       />
  //       :
  //       this.state.movieSelected ?
  //         <MovieDetails
  //           movie={this.state.movieDetails}
  //         />
  //       :
  //         <MoviesContainer
  //           handleClick={this.handleClick}
  //           movies={this.state.movies}
  //         />
  //       }
  //     </main>
  //   )
  // }

}

export default App;
