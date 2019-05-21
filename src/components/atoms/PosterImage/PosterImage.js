import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PosterImageWrapper from '../PosterImageWrapper';

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

const postersQueryOptions = {
  options: ({title}) => ({ variables: { title } }),
}

const ColumnWrapper = styled.div``;

class PosterImage extends Component {
    renderPoster() {
        console.log(this.props.data);

        if (!this.props.data.search.movies) return ;

        const movies = (this.props.data.search.movies.sort((a,b) => {
          return parseInt(b.year.substring(0, 4) - a.year.substring(0, 4) )
        }));
        const movie = (this.props.data.search.movies[0]);

        return (
            <PosterImageWrapper 
                src={movie.poster}
                alt={movie.title}    
            />
        )
    }
    
    render () {
        if (this.props.data.loading) { return <div>Loading...</div>}
        if (this.props.data.error) {return <div>Error</div>}
        return (
            <ColumnWrapper>
               {this.renderPoster()}   
            </ColumnWrapper>
        )
    }
}

export default graphql(query, postersQueryOptions)(PosterImage);
