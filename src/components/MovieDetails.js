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
      movieDetails: {},
      trailerId: ''
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
    this.getTrailerId()
    this.setState({movieDetails: data.movie})})
  .catch(error => {
    this.setState({errorMessage: error.message})
  })
  :
    this.setState({errorMessage: ''})
  }

}

getTrailerId = () => {
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}/videos`)
  .then(response => response.json())
  .then(data => {
  if (data.videos.length) {
    return data.videos.find(video => video.type === 'Trailer')
  } 
  throw new Error("no trailer available")
  })
  .then(trailer => {
    if (trailer.key) {
        this.setState({trailerId: trailer.key})
    } 
    throw new Error("no trailer available")
  })
  .catch(error => console.log(error))
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
     
     const splitgenres = genres && genres.join(" | ")
     const splitdate = release_date && release_date.split("-").shift()

     if (this.state.errorMessage) {
       return (<ErrorMessage message={this.state.errorMessage}/>)
     } 
    return (
        <div className="MovieDetails">
        <img className="detailsBackdrop"src={backdrop_path}></img>
        {this.state.trailerId && <Trailer id={this.state.trailerId}/>}
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
