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


    return (
        <div className="MovieDetails">
        <img className="detailsBackdrop"src={backdrop_path}></img>
        <div className="overlay">
          <img className="detailsPoster"src={poster_path}></img>
          <Trailer id={id}/>
          <div className="info">
            <p>{id}</p>
            <p>{title}</p>
            <p>{release_date}</p>
            <p>{overview}</p>
            <p>{average_rating}</p>
            <p>{genres}</p>
            <p>{budget}</p>
            <p>{revenue}</p>
            <p>{runtime}</p>
            <p>{tagline}</p>
          </div>
        </div>
        </div>
    )
}

export default MovieDetails;
