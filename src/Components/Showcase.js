import React, { Component } from 'react';
import Poster from './Posters';

class Showcase extends Component {

  renderPoster() {
    const movie = {...this.props.data.movie}
    movie.id = this.props.imdbId;
    return (
      <div className="tile"  key={movie.id}>
        <div className="tile-poster">
          <img 
            src={movie.poster}
            alt={movie.title} />
        </div>
      </div>
      // <div className="tile-details">
      // </div>
    )
  }

  render() {

    const style = {
      display: "flex",
      justifyContent: "space-between"
    }

    const OUT_NOW = [
      {
        "title": "Shazam!",
        "imdbId": "tt0448115"
      },
      {
        "title": "They Shall Not Grow Old",
        "imdbId": "tt7905466"
      }
    ]

    const posterList = OUT_NOW.map((movie) => {
      return <Poster imdbId={movie.imdbId} />
    })

    if (this.props.loading) { return <div>Loading...</div>}
    if (this.props.error) {return <div>Error</div>}
    return (
        <div className="row" style={style}>
          {posterList}
        </div>
    )
  }
};


export default Showcase;
