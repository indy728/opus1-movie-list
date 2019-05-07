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

    slideHeight = () => {
        return document.querySelector('.slide').clientHeight
    }

    // renderSlides = () => {
    //     return this.props.movies.map(movie => <Slide title={movie.title} key={movie.title} />);
    // }

    childHandlerTest = () => {
        console.log(this.state.featuredIndex);
        this.setState(prevState => ({
            featuredIndex: prevState.featuredIndex + 1
        }));
    }

    slideFunctions = [
        this.goToPrevSlide,
        this.goToNextSlide,
        this.slideHeight
    ]

    render() {
        const style = {
            transform: `translateY(${this.state.translateValue}px)`,
            transition: 'transform ease-out 1s'
        }

        return (
            <Wrapper>
                <FeatureFilms style={style} handlers={this.slideFunctions} movies={this.state.featuredMovies} />
                <Marquee />
                <Posters />
                <SearchBar />
            </Wrapper>
        )
    }
    
}

export default Movies;
