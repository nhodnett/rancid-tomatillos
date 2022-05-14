import React from "react";
import "../styles/MovieDetails.css"
import Trailer from './Trailer';

const MovieDetails = (props) => {
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
     } = props.movie;

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

export default MovieDetails;
