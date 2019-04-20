import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Sprite from './Sprite';

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

    const imgStyle = {
        height: "60rem"
    }

    return (
      <div className="showcase"  key={movie.id} style={cardStyle}>
        <div className="showcase-poster">
          <img style={imgStyle}
            src={movie.poster}
            alt={movie.title} />
        </div>
        <div className="showcase-details">
          <div className="showcase-details__item">
            <Sprite classId="showcase-details__item-icon" icon="eye" />
            <h3>456</h3>
          </div>
          <div className="showcase-details__item">
            <Sprite classId="showcase-details__item-icon" icon="thumbs-up" />
            <h3>10k</h3>
          </div>
          <div className="showcase-details__item">
            <Sprite classId="showcase-details__item-icon" icon="chatboxes" />
            <h3>45</h3>
          </div>
        </div>
      </div>
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
