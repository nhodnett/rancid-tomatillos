import React, { Component } from "react";
import Navbar from "./Navbar";
import MovieDetails from "./MovieDetails";
import MoviesContainer from "./MoviesContainer";
import "../styles/App.css";
import { Route } from "react-router-dom";
import { apiCalls } from "../classes/apiCalls";
import { Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieDetailsData: [],
      query: "",
      errorMessage: "",
    };
  }

  componentDidMount = () => {
    apiCalls(this.handleState);
  };

  handleState = (state) => {
    this.setState(state, () => {
      this.getDetails();
    });
  };

  getDetails = () => {
    this.state.movies.forEach((movie) => {
      apiCalls(this.handleStateDetails, movie.id);
    });
  };

  handleStateDetails = (movie) => {
    this.setState((prevState) => ({
      movieDetailsData: [...prevState.movieDetailsData, movie],
    }));
  };

  handleChange = (query) => {
    this.setState({ query: query });
  };

  render = () => {
    return (
      <main className="App">
        {this.state.movies.length === this.state.movieDetailsData.length && (
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <div>
                    <Navbar
                      handleChange={this.handleChange}
                      query={this.state.query}
                      searchBar={true}
                    />
                    {this.state.query && (
                      <h2 className="resultsFeedback">
                        Search results for '{this.state.query}'
                      </h2>
                    )}
                    <MoviesContainer
                      errorMessage={this.state.errorMessage}
                      movies={this.state.movieDetailsData}
                      query={this.state.query}
                    />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/:id"
              render={({ match }) => {
                return (
                  <div>
                    <Navbar
                      handleChange={this.handleChange}
                      query=""
                      searchBar={false}
                    />
                    <MovieDetails
                      id={match.params.id}
                      movieDetails={this.state.movieDetailsData.find(
                        (movie) => movie.id == match.params.id
                      )}
                    />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/search/:query"
              render={({ match }) => (
                <MoviesContainer
                  movies={this.state.movieDetailsData}
                  query={match.params.query}
                />
              )}
            />
          </Switch>
        )}
      </main>
    );
  };
}

export default App;
