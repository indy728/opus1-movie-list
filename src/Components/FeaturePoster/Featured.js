import React, {Component } from 'react';
import FeaturePoster from './FeaturePoster';

class Featured extends Component {

  renderPosters(movieArray) {

    return (
      movieArray.map(movie => <FeaturePoster />) 
    )
    
  }

  render() {

    const featuredMovies = [
      { 
        "title": "The Big Lebowski",
        "imdbId": "tt0118715",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_SX300.jpg"
      },
      {
        "title": "The Matrix",
        "imdbId": "tt0133093",
        "poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
      },
      {
        "title": "Cloud Atlas",
        "imdbId": "tt1371111",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_SX300.jpg"
      },
      {
        "title": "Princess Mononoke",
        "imdbId": "tt0119698",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
      },
      {
        "title": "Snatch",
        "imdbId": "tt0208092",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
      },
      {
        "title": "This Is Spinal Tap",
        "imdbId": "tt0088258",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2MTIzMzg5Nl5BMl5BanBnXkFtZTgwOTc5NDI1MDE@._V1_SX300.jpg"
      }
    ]

    const style = {
      display: "flex",
      justifyContent: "center",
      height: "60rem"
    }

    if (this.props.loading) { return <div>Loading...</div>}
    if (this.props.error) {return <div>Error</div>}
    return (
      <section className="featured" style={style}>
        <FeaturePoster />
      </section>
    )
  }
};

export default Featured;
