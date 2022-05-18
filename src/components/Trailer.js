import React, { Component } from 'react';
import "../styles/Trailer.css"

class Trailer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
    }
  }

  render = () => {
    return (this.state.id && <iframe
        className="trailer"
        width="840"
        height="691.74"
        src={`https://www.youtube.com/embed/${this.state.id}?controls=0&autoplay=1&mute=1`}
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>)
  }
}

export default Trailer;
