import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Sprite from '../Sprite';

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

const PosterImage = (props) => {
  const movie = props.movie;

  const imgStyle = {
      height: "60rem",
      maxWidth: "100%"
  }
  
  return (
    <div className="poster">
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

class PosterComponent extends Component {

  renderPoster() {

    const movie = (this.props.data.search.movies[0]);

    return (
      <PosterImage movie={movie} />
    )
  }

  render () {
    if (this.props.data.loading) { return <div>Loading...</div>}
    if (this.props.data.error) {return <div>Error</div>}
    return (
      <div className="col-1-of-2">
        {this.renderPoster()}
      </div>
    )
  }
}

export default graphql(query, postersQueryOptions)(PosterComponent);
