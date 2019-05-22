import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import FeatureFilms from '../FeatureFilms';
import Marquee from '../Marquee';
import Posters from '../Posters';
import SearchBar from '../SearchBar';

import OutNowArray from '../../atoms/OutNowArray';
import ComingSoonArray from '../../atoms/ComingSoonArray';

const Wrapper = styled.section`

`;

const query = gql`
  query GetPosters($current: String)
  {
    getPosters(current: $current) {
      results {
        id
        title
        poster
      }
    }
  }
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

        // const MoviePosters = this.state.comingSoon ? this.state.comingSoonMovies : this.state.comingSoonMovies;
        const current = this.state.comingSoon ? "upcoming" : "now_playing";

        return (
            <Wrapper>
                <FeatureFilms style={style} handlers={this.slideFunctions} movies={this.state.featuredMovies} />
                <Marquee handler={this.toggleMarqueeHandler} comingSoon={this.state.comingSoon} />
                <Query query={query} variables={{ current }}>
                    { ({ loading, error, data }) => {
                        if (loading) return null;
                        if (error) return `Error! ${error}`;
                        return (
                            <Posters data={data} />
                        )
                    }}
                </Query>
                {/* <Posters movies={MoviePosters} /> */}
                {/* <MoviePosters n={15}/> */}
                <SearchBar />
            </Wrapper>
        )
    }
    
}

export default Movies;
