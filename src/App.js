import React, { Component } from 'react';
import Navbar from './components/Navbar'
import MoviesContainer from './components/MoviesContainer'
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {}
  }



  // componentDidMount = () => {
  // }
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
        <MoviesContainer />
      </main>
    )
  }

}




export default App;
