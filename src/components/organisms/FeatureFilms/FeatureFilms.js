import React from 'react';
import styled from 'styled-components'
import Slideshow from '../../molecules/Slideshow/Slideshow';

const Wrapper = styled.section`
    /* display: inline-block; */
    display: flex;
    justify-Content: center;
    /* width: 100%; */
    height: 60rem;
    /* overflow: hidden;
    position: relative; */

    /* @media (max-width: 400px) {
      height: auto;
      max-height: 60rem;
    } */
`;

const FeatureFilms = (props) => {
  return (
    <Wrapper>
      <Slideshow style={props.style} handlers={props.handlers} movies={props.movies}/>
    </Wrapper>
  )
}
  
  export default FeatureFilms;
  