import React, {Component } from 'react';

import Slide from './Slide';
import UpArrow from './UpArrow';
import DownArrow from './DownArrow';

class FeaturePoster extends Component {
  constructor(props) {
    super(props)

    this.state = {
      featuredMovies: [
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
        ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0)
      return;
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideHeight()
    }))
  }

  goToNextSlide = () => {
    if(this.state.currentIndex === this.state.featuredMovies.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideHeight())
    }));
  }

  slideHeight = () => {
    return document.querySelector('.slide').clientHeight
  }

  renderSlides = () => {
    return this.state.featuredMovies.map(movie => <Slide key={movie.imdbId} poster={movie.poster} />);
  }

  render() {
    const bgStyle = {
      transform: `translateY(${this.state.translateValue}px)`,
      transition: 'transform ease-out 1s'
    }

    return (
        <div className="featured-poster">
          <div className="featured-poster__background" style={bgStyle}>
              {this.renderSlides()}
          </div>
          <UpArrow goToPrevSlide={this.goToPrevSlide} />
          <DownArrow goToNextSlide={this.goToNextSlide} />
        </div>
    );
  }
}
  
export default FeaturePoster;
