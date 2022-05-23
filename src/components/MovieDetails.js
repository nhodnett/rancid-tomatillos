import React, { Component } from "react";
import "../styles/MovieDetails.css";
import Trailer from "./Trailer";

class MovieDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.id,
      errorMessage: "",
      movieDetails: [],
    };
  }

  handleState = (state) => {
    this.setState(state);
  };

  componentDidMount = () => {
    this.setState({ movieDetails: this.props.movieDetails });
  };

  render() {
    const {
      title,
      poster_path,
      backdrop_path,
      release_date,
      overview,
      average_rating,
      genres,
      runtime,
    } = this.state.movieDetails;

    const splitgenres = genres && genres.join(" | ");
    const splitdate = release_date && release_date.split("-").shift();
    const splitrating = parseFloat(average_rating).toFixed(1) * 10;
    const splitruntime = Math.floor(runtime / 60) + "h " + (runtime % 60) + "m";

    return (
      <div className="MovieDetails">
        <img className="detailsBackdrop" src={backdrop_path} alt={title}></img>
        <Trailer id={this.state.id} />
        <div className="overlay">
          <img className="detailsPoster" src={poster_path} alt={title}></img>
          <div className="info">
            <p className="quickFacts">
              <span className="splitrating">{splitrating}% |</span>
              <span className="releaseDate"> {splitdate} |</span>
              <span className="runtime"> {splitruntime}</span>
            </p>
            <p className="title">{title}</p>
            <p className="overview">{overview}</p>
            <p className="genres">{splitgenres}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
