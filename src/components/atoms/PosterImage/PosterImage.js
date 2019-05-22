import React from 'react';
import styled from 'styled-components';

import PosterImageWrapper from '../PosterImageWrapper';

const ColumnWrapper = styled.div``;

const PosterImage = ( { id, title, poster } ) => {
  let renderPoster = (id, title, poster) => {
  
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
          {renderPoster(id, title, poster)}
      </ColumnWrapper>
  )
}

// const PosterImage = ( { movies } ) => {
//   let renderPoster = (movies) => {
//       console.log(movies);

//       if (!movies) return ;

//       const movieArray = (movies.sort((a,b) => {
//         return parseInt(b.year.substring(0, 4) - a.year.substring(0, 4) )
//       }));
//       const movie = (movieArray[0]);

//       return (
//           <PosterImageWrapper 
//               src={movie.poster}
//               alt={movie.title}    
//           />
//       )
//   }

//   return (
//       <ColumnWrapper>
//           {renderPoster(movies)}
//       </ColumnWrapper>
//   )
// }

// const PosterImage = ( { movies } ) => {
//   let renderPoster = (movies) => {
//       console.log(movies);

//       if (!movies) return ;

//       const movieArray = (movies.sort((a,b) => {
//         return parseInt(b.year.substring(0, 4) - a.year.substring(0, 4) )
//       }));
//       const movie = (movieArray[0]);

//       return (
//           <PosterImageWrapper 
//               src={movie.poster}
//               alt={movie.title}    
//           />
//       )
//   }

//   return (
//       <ColumnWrapper>
//           {renderPoster(movies)}
//       </ColumnWrapper>
//   )
// }

export default PosterImage;
