import React from 'react';
import styled from 'styled-components';

import FeatureImageWrapper from '../FeatureImageWrapper';

const ColumnWrapper = styled.div`
    overflow: auto;
    height: 100%;
`;

const FeatureImage = ({ style, movie }) => {

  const renderPoster = () => {
      return (
          <FeatureImageWrapper 
              src={movie.poster}
              alt={movie.title}
          />
      )
  }

  return (
      <ColumnWrapper style={style} >
          {renderPoster()}   
      </ColumnWrapper>
  )
}

export default FeatureImage;
