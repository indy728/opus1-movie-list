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

        const outNowMovies = [
            {title: "Shazam!"},
            {title: "They Shall Not Grow Old"},
            {title: "Mr. Holland's Opus"},
            {title: "The Sound of Music"},
            {title: "Undefined"},
            {title: "Ratatouille"},
        ]

        const comingSoonMovies = [
            {title: "Solo"},
            {title: "Detective Pikachu"},
            {title: "The Room"},
            {title: "Animatrix"},
            {title: "March of the Penguins"},
            {title: "Witches"},
        ]

        this.state = {
            featuredMovies: featuredMovies,
            featuredIndex: 0,
            translateValue: 0,
            comingSoon: false,
            outNowMovies: outNowMovies,
            comingSoonMovies: comingSoonMovies
        }
    }

    toggleMarqueeHandler = () => {
        const comingSoon = this.state.comingSoon;
        this.setState({comingSoon: !comingSoon});
    };

    goToPrevSlide = () => {
        if(this.state.featuredIndex === 0)
            return;
        
        this.setState(prevState => ({
            featuredIndex: prevState.featuredIndex - 1,
            translateValue: prevState.translateValue + 600
        }))
    }

    goToNextSlide = () => {
        if(this.state.featuredIndex === this.state.featuredMovies.length - 1) {
            return this.setState({
                featuredIndex: 0,
                translateValue: 0
            })
        }
        
        this.setState(prevState => ({
            featuredIndex: prevState.featuredIndex + 1,
            translateValue: prevState.translateValue + -600
        }));
    }

    // slideHeight = () => {
    //     return document.querySelector('.slide').clientHeight
    // }

    slideFunctions = [
        this.goToPrevSlide,
        this.goToNextSlide,
        // this.slideHeight
    ]

    render() {
        const style = {
            transform: `translateY(${this.state.translateValue}px)`,
            transition: 'transform ease-out 1s'
        }

        const moviePosters = this.state.comingSoon ? this.state.comingSoonMovies : this.state.outNowMovies;

        return (
            <Wrapper>
                <FeatureFilms style={style} handlers={this.slideFunctions} movies={this.state.featuredMovies} />
                <Marquee handler={this.toggleMarqueeHandler} comingSoon={this.state.comingSoon} />
                <Posters movies={moviePosters} />
                <SearchBar />
            </Wrapper>
        )
    }
    
}

export default Movies;
