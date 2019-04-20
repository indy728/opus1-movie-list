import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const query = gql`
  query GetOutNowPosters($imdbId: String)
  {
    movie(id: $imdbId) {
        title
        poster
      }
  }
`;

class PosterComponent extends Component {

  renderPoster() {
    const movie = {...this.props.data.movie}
    movie.id = this.props.imdbId;

    const cardStyle = {
        minWidth: "20rem",
        border: "solid 1px #eee",
        boxShadow: "0 0 10px -2px #999999"
    }

    const posterStyle = {
    }

    const imgStyle = {
        height: "60rem"
    }

    return (
      <div className="showcase"  key={movie.id} style={cardStyle}>
        <div className="showcase-poster" style={posterStyle}>
          <img style={imgStyle}
            src={movie.poster}
            alt={movie.title} />
        </div>
      </div>
      // <div className="showcase-details">
      // </div>
    )
  }

  render () {
    if (this.props.loading) { return <div>Loading...</div>}
    if (this.props.error) {return <div>Error</div>}
    return (
      <div className="col-1-of-2">
        {this.renderPoster()}
      </div>
    )
  }
}

export default graphql(query, {
    options: ({imdbId}) => ({ variables: { imdbId } }),
  })(PosterComponent);
