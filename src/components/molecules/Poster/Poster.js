import React from 'react';
import styled from 'styled-components';

import PosterImage from '../../atoms/PosterImage';

const Wrapper = styled.div`
    width: 40rem;
    border: solid 1px #eee;
    box-shadow: 0 0 10px -2px #999999;
`;

const PosterDetails = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Poster = (props) => {
    return (
        <Wrapper>
            <PosterImage title={props.title} />
            <PosterDetails />
        </Wrapper>
    )
}

export default Poster;
