import React, { Component } from 'react';
import "../styles/MovieDetails.css"
import Trailer from './Trailer';
import ErrorMessage from './ErrorMessage';


class MovieDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.id,
      errorMessage: '',
      movieDetails: {}
    }
}

componentDidMount = () => {
  {this.state.id ? fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
  .then(response => {
    if(response.status === 200) {
      return response.json()
    }
    throw new Error(this.getErrorMessage(response.status))})
  .then(data => {
    this.setState({movieDetails: data.movie})})
  .catch(error => {
    this.setState({errorMessage: error.message})
  })
  :
    this.setState({errorMessage: ''})
  }
}

getErrorMessage = (status) => {
  switch(true) {
    case (status >= 300 && status <= 399):
    return `${status}: Redirection message`
    break;
    case (status >= 400 && status <= 499):
    return `${status}: Client error`
    break;
    case (status >= 500):
    return `${status}: Server error`
    break;
    default:
    return 'I have no idea what this error message is for...';
  }
}

  render() {
    const {
        id,
        title,
        poster_path,
        backdrop_path,
        release_date,
        overview,
        average_rating,
        genres,
        budget,
        revenue,
        runtime,
        tagline
     } = this.state.movieDetails;

     const splitgenres = genres.join(" | ")
     const splitdate = release_date.split("-").shift()

    return (
        <div className="MovieDetails">
        <img className="detailsBackdrop"src={backdrop_path}></img>
        <Trailer id={id}/>
        <div className="overlay">
          <img className="detailsPoster"src={poster_path}></img>
          <div className="info">
            <p className="title">{title}</p>
            <p className="releaseDate">{splitdate}</p>
            <p className="overview">{overview}</p>
            <p className="averageRating">{average_rating}</p>
            <p className="genres">{splitgenres}</p>
            <p className="runtime">{runtime}</p>
          </div>
        </div>
        </div>
    )
  }
}

export default MovieDetails;
