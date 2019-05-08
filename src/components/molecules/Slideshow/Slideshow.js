import React from 'react';
import styled from 'styled-components'

import Arrow from '../../atoms/Arrow'
import FeatureImage from '../../atoms/FeatureImage'

const Wrapper = styled.div`
    width: 100%;
    overflow: hidden;
    box-shadow: 0 0 10px -2px #999999;
    position: relative;
`;

const Slideshow = (props) => {

    const posterList = props.movies.map((movie, index) => {
        return (
            <FeatureImage style={props.style} title={movie.title} key={movie + index} />
        )
    })

    return (
        <Wrapper>
            {posterList}
            <Arrow handler={props.handlers[0]} name="arrow-round-up" back/>
            <Arrow handler={props.handlers[1]} name="arrow-round-down"/>
        </Wrapper>
    )
}

export default Slideshow;
