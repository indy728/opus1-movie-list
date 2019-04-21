import React, { Component } from 'react';
import Poster from './Posters';

const Row = (props) => {
  
  const posterList = props.movieArray.map((movie) => <Poster imdbId={movie.imdbId} key={movie.imdbId}/>)

  return (
    <div className="showcase-row">
      {posterList}
    </div>
  )
}

class Showcase extends Component {

  renderRows(movieArray) {
    return (
      movieArray.map((subArray, index) => <Row movieArray={subArray} key={index} />)
    )
  }

  render() {

    const outNowMovies = [
      [
        {
          "title": "Shazam!",
          "imdbId": "tt0448115"
        },
        {
          "title": "They Shall Not Grow Old",
          "imdbId": "tt7905466"
        }
      ],
      [
        {
          "title": "Mr. Holland's Opus",
          "imdbId": "tt0113862"
        },
        {
          "title": "The Sound of Music",
          "imdbId": "tt0059742"
        }
      ]
    ]

    if (this.props.loading) { return <div>Loading...</div> }
    if (this.props.error) { return <div>Error</div> }
    return (
      <section className="showcase">
        <div className="showcase-fixed_height">
          {this.renderRows(outNowMovies)}
        </div>
      </section>
    )
  }
};

export default Showcase;
