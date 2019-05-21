import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
// import GetPosters from '../../queries/GetPosters'
import gql from 'graphql-tag';

import PosterDetails from '../PosterDetails';
import PosterImage from '../../atoms/PosterImage';

const query = gql`
  query GetPosters($title: String)
  {
    search(searchTerm: $title) {
      movies{
        title
        year
        poster
      }
    }
  }
`;


const Wrapper = styled.div`
    background-color: #f9f9f9;
    width: 40rem;
    border: solid 1px #eee;
    box-shadow: 0 0 10px -2px #999999;
`;

const Poster = ( { title, ...props }) => {
    return (
        <Wrapper>
            <Query query={query} variables={{ title }}>
                {({ loading, error, data }) => {
                    if (loading) return null;
                    if (error) return `Error! ${error}`;
                    // TODO: figure out contingency for title error
                    if (!data.search) return 'No data';
                    return (
                        <PosterImage movies={data.search.movies} />
                    );
                }}
            </Query>
            <PosterDetails />
        </Wrapper>
    )
}

export default Poster;
