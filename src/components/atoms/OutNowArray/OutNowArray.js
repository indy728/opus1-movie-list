import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Posters from '../../organisms/Posters';

const query = gql`
  query GetTitles($n: Int)
  {
    gluOutNow(n: $n) {
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

class OutNowArray extends Component {

    renderArray() {
        let movie = (this.props.data);
        if (movie.glueOUtNow) {

          movie = movie.gluOutNow.films.sort((a,b) => {
              return new Date(b.releaseDate) - new Date(a.releaseDate)
          });
  
          return (
              <Posters movies={movie} />
          )
        }
        else {
          console.log(movie);
        }
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

export default graphql(query, movieGluQueryOptions)(OutNowArray);
