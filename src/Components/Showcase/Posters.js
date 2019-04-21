import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Sprite from '../Sprite';

const query = gql`
  query GetPosters($imdbId: String)
  {
    movie(id: $imdbId) {
        title
        poster
      }
  }
`;

const postersQueryOptions = {
  options: ({imdbId}) => ({ variables: { imdbId } }),
}

class PosterComponent extends Component {

  renderPoster() {
    const movie = {...this.props.data.movie}
    movie.id = this.props.imdbId;

    const imgStyle = {
        height: "60rem",
        maxWidth: "100%"
    }

    return (
      <div className="poster"  key={movie.id}>
        <div className="poster-image">
          <img style={imgStyle}
            src={movie.poster}
            alt={movie.title} />
        </div>
        <div className="poster-details">
          <div className="poster-details__item">
            <Sprite classId="poster-details__item-icon" icon="eye" />
            <h3>456</h3>
          </div>
          <div className="poster-details__item">
            <Sprite classId="poster-details__item-icon" icon="thumbs-up" />
            <h3>10k</h3>
          </div>
          <div className="poster-details__item">
            <Sprite classId="poster-details__item-icon" icon="chatboxes" />
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

export default graphql(query, postersQueryOptions)(PosterComponent);
