import React from 'react';
import styled from 'styled-components';

import Row from '../Row';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 75rem;
`;

const subArrays = (bigarray) => {
  const size = 2;
  const arrayOfArrays = [];
  for (let i=0; i<bigarray.length; i+=size) {
      arrayOfArrays.push(bigarray.slice(i,i+size));
  }
  return arrayOfArrays;
}

const Posters = () => {

  const renderRows = (movieArray) =>{
    return (
      movieArray.map((subArray, index) => <Row movies={subArray} key={index} />)
    )
  }

  const outNowMovies = [
    "Shazam!",
    "They Shall Not Grow Old",
    "Mr. Holland's Opus",
    "The Sound of Music",
    "Undefined",
    "Ratatouille"
  ]

  const movieArrays = subArrays(outNowMovies);

  return (
      <Wrapper>
        {renderRows(movieArrays)}
      </Wrapper>
  )
};

export default Posters;