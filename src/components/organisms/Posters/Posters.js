import React from 'react';
import styled from 'styled-components';

import Row from '../Row';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 75rem;
  z-index: -1;
`;

const subArrays = (bigarray) => {
  const size = 2;
  const objToArray = [];
  for (let i=0; i<bigarray.length; i+=1) {
    objToArray.push(bigarray[i]);
  }
  const arrayOfArrays = [];
  for (let i=0; i<objToArray.length; i+=size) {
      arrayOfArrays.push(objToArray.slice(i,i+size));
  }
  return arrayOfArrays;
}

const Posters = ({ data }) => {

  const renderRows = (movieArray) =>{

    return (
      movieArray.map((subArray, index) => <Row movies={subArray} key={index} />)
    )
  }
  const movieArrays = subArrays(data.getPosters.results);
  return (
      <Wrapper>
        {renderRows(movieArrays)}
      </Wrapper>
  )
};

export default Posters;