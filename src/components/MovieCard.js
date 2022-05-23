import React from "react";
import "../styles/MovieCard.css";
import { NavLink } from "react-router-dom";

const MovieCard = (props) => {
  const { id, poster_path, title } = props.movie;

  return (
    <NavLink to={`/${id}`}>
      <div key={id} className="Card">
        <img className="poster" src={poster_path} alt={title} />
        <p className="movieTitle">{title}</p>
      </div>
    </NavLink>
  );
};

export default MovieCard;
