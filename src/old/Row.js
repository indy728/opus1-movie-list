import React from 'react';
import Poster from './Posters';
import styled from 'styled-components';

const ShowcaseRow = styled.div`
  margin: 0 1rem;
  display: flex;
  justify-content: space-between;

  &:not(:first-child){
    margin-top: 5rem;
  }
`;

const Row = (props) => {
  const posterList = props.movies.map((movie, index) => <Poster title={movie} key={movie + index} />);
  return (
    <ShowcaseRow>
      {posterList}
    </ShowcaseRow>
  )
};

export default Row;
