import React, { Component } from 'react';
import "../styles/Trailer.css"

class Trailer extends Component{
  constructor(props) {
    super();
    this.state = {
      id: props.id,
      movieKey: ''
    }
  }

componentDidMount = () => {
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}/videos`)
  .then(response => response.json())
  .then(data => {
    //console.log(data);
  return data.videos.find(video => {
      return video.type === 'Trailer'
    })
  })
  .then(trailer => {
    console.log(trailer)
    this.setState({movieKey: trailer.key})
  })
  //this.setState({ movies: moviesData.movies })
}

render = () => {
  return (this.state.movieKey && <iframe width="560" height="315"
                 src={`https://www.youtube.com/embed/${this.state.movieKey}?controls=0&autoplay=1&mute=1`}
                 title="YouTube video player" frameborder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen>
          </iframe>)
}
}

export default Trailer;
