import React from 'react';
import styled from 'styled-components'
import Slideshow from '../../molecules/Slideshow/Slideshow';


const Wrapper = styled.section`
    display: flex;
    justify-Content: center;
    height: 60rem;
`;

const FeatureFilms = () => {
  
    const featuredMovies = [
      {title: "The Big Lebowski"},
      {title: "The Matrix"},
      {title: "Cloud Atlas"},
      {title: "Princess Mononoke"},
      {title: "Snatch"},
      {title: "This Is Spinal Tap"},
    ]
  
    return (
      <Wrapper>
          {/* <FeaturePoster movies={featuredMovies}/> */}
        <Slideshow />
      </Wrapper>
    )
  }
  
  export default FeatureFilms