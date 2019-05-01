import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

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

const postersQueryOptions = {
  options: ({title}) => ({ variables: { title } }),
}

const ColumnWrapper = styled.div``;

const PosterWrapper = styled.img`
    height: 60rem;
    max-width: 100%;
`;

class PosterImage extends Component {
    renderPoster() {
        const movie = (this.props.data.search.movies[0]);
    
        return (
            <PosterWrapper 
                src={movie.poster}
                alt={movie.title}    
            />
        )
    }
    
    render () {
        if (this.props.data.loading) { return <div>Loading...</div>}
        if (this.props.data.error) {return <div>Error</div>}
        console.log(this.props.data)
        return (
            <ColumnWrapper>
               {this.renderPoster()}   
            </ColumnWrapper>
        )
    }
}

export default graphql(query, postersQueryOptions)(PosterImage);
