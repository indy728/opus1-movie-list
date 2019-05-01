import React, { Component } from 'react';
import styled from 'styled-components';

import FeatureFilms from '../FeatureFilms';
import Marquee from '../Marquee';
import Posters from '../Posters';
import SearchBar from '../SearchBar';

const Wrapper = styled.section`

`;

class Movies extends Component {

    constructor(props) {
        super(props);
        
        const featuredMovies = [
            {title: "The Big Lebowski"},
            {title: "The Matrix"},
            {title: "Cloud Atlas"},
            {title: "Princess Mononoke"},
            {title: "Snatch"},
            {title: "This Is Spinal Tap"},
        ]

        this.state = {
            featuredMovies: featuredMovies,
            featuredIndex: 0,
            translateValue: 0,
            comingSoon: false
        }
    }

    // goToPrevSlide = () => {
    //     if(this.state.currentIndex === 0)
    //     return;
        
    //     this.setState(prevState => ({
    //     currentIndex: prevState.currentIndex - 1,
    //     translateValue: prevState.translateValue + this.slideHeight()
    //     }))
    // }

    // goToNextSlide = () => {
    //     if(this.state.currentIndex === this.state.featuredMovies.length - 1) {
    //     return this.setState({
    //         currentIndex: 0,
    //         translateValue: 0
    //     })
    //     }
        
    //     this.setState(prevState => ({
    //     currentIndex: prevState.currentIndex + 1,
    //     translateValue: prevState.translateValue + -(this.slideHeight())
    //     }));
    // }

    // slideHeight = () => {
    //     return document.querySelector('.slide').clientHeight
    // }

    // renderSlides = () => {
    //     return this.props.movies.map(movie => <Slide title={movie.title} key={movie.title} />);
    // }

    // slideFunctions = [
    //     this.goToPrevSlide,
    //     this.goToNextSlide,
    //     this.slideHeight,
    //     this.renderSlides 
    // ]

    render() {
        return (
            <Wrapper>
                <FeatureFilms />
                <Marquee />
                <Posters />
                <SearchBar />
            </Wrapper>
        )
    }
    
}

export default Movies;
