import React from 'react';
import styled from 'styled-components'
import Slideshow from '../../molecules/Slideshow/Slideshow';


const Wrapper = styled.section`
    display: flex;
    justify-Content: center;
    height: 60rem;
`;

const FeatureFilms = (props) => {

  return (
    <Wrapper>
      <Slideshow style={props.style} handlers={props.handlers} movies={props.movies}/>
    </Wrapper>
  )

}
  
  export default FeatureFilms