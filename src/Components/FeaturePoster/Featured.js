import React, {Component } from 'react';
import FeaturePoster from './FeaturePoster';

class Featured extends Component {

  renderPosters(movieArray) {
    return (
      movieArray.map(movie => <FeaturePoster />) 
    )
  }

  render() {
    const style = {
      display: "flex",
      justifyContent: "center",
      height: "60rem"
    }

    return (
      <section className="featured" style={style}>
        <FeaturePoster />
      </section>
    )
  }
};

export default Featured;
