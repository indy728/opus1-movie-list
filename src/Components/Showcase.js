import React, { Component } from 'react';
import Poster from './Posters';

const Row = (props) => {
  
  const posterList = props.movieArray.map((movie) => {
    return <Poster imdbId={movie.imdbId} />
  })

  return (
    <div className="showcase-row" key={props.key}>
      {posterList}
    </div>
      
  )
}

class Showcase extends Component {

  render() {

    const OUT_NOW = [
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

    const rows = OUT_NOW.map((movieArray, index) => {
      return <Row movieArray={movieArray} id={index} />
    })
    
    if (this.props.loading) { return <div>Loading...</div> }
    if (this.props.error) { return <div>Error</div> }
    return (
      <section className="showcase">
        <div className="showcase-fixed_height">
          {rows}
        </div>
      </section>
    )
  }
};


export default Showcase;
