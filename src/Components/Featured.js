import React, {Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
  query GetFeaturePosters($imdbId: String)
  {
    movie(id: $imdbId) {
        title
        poster
      }
  }
`;

class Featured extends Component {

  renderPosters() {

    const movie = {...this.props.data.movie}
    movie.id = this.props.imdbId;
      
    const style = {
      width: "100%",
      height: "100%",
      border: "solid 1px #eee",
      boxShadow: "0 0 10px -2px #999999",
      backgroundImage: 'url(' + movie.poster + ')',
      backgroundSize: "cover"
    }

    return (
      <div className="featured-poster" key={movie.id} style={style}>
        &nbsp;
      </div>
    )
  }

  render() {
    const style = {
      display: "flex",
      justifyContent: "center",
      height: "60rem"
    }

    if (this.props.loading) { return <div>Loading...</div>}
    if (this.props.error) {return <div>Error</div>}
    return (
      <section className="featured" style={style}>
        {this.renderPosters()}
      </section>
    )
  }
};

export default graphql(query)(Featured);