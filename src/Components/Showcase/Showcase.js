import React, { Component } from 'react';
import Row from './Row';

const subArrays = (bigarray) => {
  const size = 2;
  const arrayOfArrays = [];
  for (let i=0; i<bigarray.length; i+=size) {
      arrayOfArrays.push(bigarray.slice(i,i+size));
  }
  return arrayOfArrays;
}

class Showcase extends Component {

  renderRows(movieArray) {
    console.log(movieArray)
    return (
      movieArray.map((subArray, index) => <Row movies={subArray} key={index} />)
    )
  }

  render() {
    const outNowMovies = [
      "Shazam!",
      "They Shall Not Grow Old",
      "Mr. Holland's Opus",
      "The Sound of Music",
    ]

    const movieArrays = subArrays(outNowMovies);

    if (this.props.loading) { return <div>Loading...</div> }
    if (this.props.error) { return <div>Error</div> }
    return (
      <section className="showcase">
        <div className="showcase-fixed_height">
          {this.renderRows(movieArrays)}
        </div>
      </section>
    )
  }
};

export default Showcase;
