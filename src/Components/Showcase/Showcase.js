import React from 'react';
import Row from './Row';
import styled from 'styled-components';

const ShowcaseList = styled.section`
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

const Showcase = () => {

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
    <ShowcaseList >
        {renderRows(movieArrays)}
    </ShowcaseList>
  )
};

export default Showcase;
