import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import FeatureFilms from '../FeatureFilms';
import Marquee from '../Marquee';
import Posters from '../Posters';
import SearchBar from '../SearchBar';

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

        this.state = {
            featuredMovies: featuredMovies,
            featuredIndex: 0,
            translateValue: 0,
            comingSoon: false
        }
    }

    toggleMarqueeHandler = () => {
        const comingSoon = this.state.comingSoon;
        this.setState({comingSoon: !comingSoon});
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
                <SearchBar />
            </Wrapper>
        )
    }
    
}

export default Movies;
