import React from 'react';
import styled from 'styled-components'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Arrow from '../../atoms/Arrow'
import FeatureImage from '../../atoms/FeatureImage'

const query = gql`
  query GetPosters($title: String)
  {
    search(searchTerm: $title) {
      movies{
        title
        poster
      }
    }
  }
`;

const Wrapper = styled.div`
    width: 100%;
    overflow: hidden;
    box-shadow: 0 0 10px -2px #999999;
    position: relative;
`;

const Slideshow = (props) => {

    const posterList = props.movies.map((movie, index) => {
        return (
            <Query query={query} variables={{title: movie.title}} key={movie + index}>
                { ({ loading, error, data }) => {
                        if (loading) return null;
                        if (error) return `Error! ${error}`;
                        return (
                            <FeatureImage style={props.style} movie={data.search.movies[0]} />
                        )
                    }}
            </Query>
        )
    })

    return (
        <Wrapper>
            {posterList}
            <Arrow handler={props.handlers[0]} name="arrow-round-up" back/>
            <Arrow handler={props.handlers[1]} name="arrow-round-down"/>
        </Wrapper>
    )
}

export default Slideshow;
