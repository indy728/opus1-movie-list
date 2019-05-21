import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Posters from '../../organisms/Posters';

const query = gql`
  query GetTitles($n: Int)
  {
    gluComingSoon(n: $n) {
      films{
        title
        releaseDate
      }
    }
  }
`;

const movieGluQueryOptions = {
  options: ({n}) => ({ variables: { n } }),
}

const Wrapper = styled.div`

`;

class ComingSoonArray extends Component {

    renderArray() {
        let movie = (this.props.data);
        movie = movie.gluComingSoon.films.sort((a,b) => {
            return new Date(a.releaseDate) - new Date(b.releaseDate)
        });
        return (
            <Posters movies={movie} />
        )
    }
    
    render () {
        if (this.props.data.loading) { return <div>Loading...</div>}
        if (this.props.data.error) {return <div>Error</div>}

        return (
            <Wrapper>
                {this.renderArray()}
            </Wrapper>
        )
    }
}

export default graphql(query, movieGluQueryOptions)(ComingSoonArray);
