import React from 'react';
import styled from 'styled-components';

import Poster from '../../molecules/Poster';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: auto;
  height: 75rem;
  z-index: -1;

  margin-top: 0.5rem;
`;

const Posters = ({ data }) => {

  const renderPosters = (flicks) =>{

    return (
      flicks.map((movie, index) => <Poster data={movie} />)
    )
  }

  return (
      <Wrapper>
        {renderPosters(data.getPosters.results)}
      </Wrapper>
  )
};

export default Posters;