import React from 'react';
import styled from 'styled-components';

import PosterImageWrapper from '../PosterImageWrapper';

const ColumnWrapper = styled.div``;

const PosterImage = ( { title, poster } ) => {
  let renderPoster = (title, poster) => {
  
    const posterUrl = `http://image.tmdb.org/t/p/w500/${poster}`
    return (
        <PosterImageWrapper 
            src={posterUrl}
            alt={title}    
        />
    )
  }

  return (
      <ColumnWrapper>
          {renderPoster(title, poster)}
      </ColumnWrapper>
  )
}

export default PosterImage;
