import React, { Component } from "react";
import { getTrailerId } from "../classes/apiCalls";
import "../styles/Trailer.css";

class Trailer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      key: "",
    };
  }

  handleState = (state) => {
    this.setState(state);
  };

  componentDidMount = () => {
    getTrailerId(this.state.id, this.handleState);
  };

  render = () => {
    return (
      this.state.key && (
        <iframe
          className="trailer"
          width="840"
          height="691.74"
          src={`https://www.youtube.com/embed/${this.state.key}?controls=0&autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )
    );
  };
}

export default Trailer;
