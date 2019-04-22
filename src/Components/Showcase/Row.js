import React from 'react';
import Poster from './Posters';

const Row = (props) => {
  const posterList = props.movies.map((movie, index) => <Poster title={movie} key={movie + index} />);
  return (
    <div className="showcase-row">
        {posterList}
    </div>)
};

export default Row;
