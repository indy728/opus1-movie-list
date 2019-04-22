import React, { Component } from 'react';
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

const FeatureBackground = (props) => {
  const styles = {
    backgroundImage: `url(${props.movie.poster})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 20%',
    height: '100%'
  };
  return <div className="slide" style={styles}></div>;
}

class Slide extends Component {

  renderFeatureBackground() {
    const movie = (this.props.data.search.movies[0]);

    return (
      <FeatureBackground movie={movie} />
    )
  }

  render() {
    if (this.props.data.loading) { return <div>Loading...</div>}
    if (this.props.data.error) {return <div>Error</div>}
    return (
      <div className="slide-wrapper">
        {this.renderFeatureBackground()}
      </div>
    )
  }
};

export default graphql(query, postersQueryOptions)(Slide);
