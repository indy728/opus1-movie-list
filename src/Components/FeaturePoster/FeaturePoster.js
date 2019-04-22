import React, {Component } from 'react';

import Slide from './Slide';
import UpArrow from './UpArrow';
import DownArrow from './DownArrow';

class FeaturePoster extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
    return this.props.movies.map(movie => <Slide title={movie.title} key={movie.title} />);
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
