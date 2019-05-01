import React from 'react';
import styled from 'styled-components'

import Arrow from '../../atoms/Arrow'
import FeatureImage from '../../atoms/FeatureImage'

const Wrapper = styled.div`
    width: 100%;
    overflow: hidden;
    border: solid 1px #eee;
    box-shadow: 0 0 10px -2px #999999;
    position: relative;
`;

const Slideshow = (props) => {

    const posterList = props.movies.map((movie, index) => {
        return (
            <FeatureImage title={movie.title} key={movie + index} />
        )
    })

    return (
        <Wrapper>
            {posterList}
            <Arrow name="arrow-round-up" back/>
            <Arrow name="arrow-round-down"/>
        </Wrapper>
    )
}

export default Slideshow;
