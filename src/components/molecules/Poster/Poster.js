import React from 'react';
import styled from 'styled-components';

import PosterDetails from '../PosterDetails';
import PosterImage from '../../atoms/PosterImage';

const Wrapper = styled.div`
    background-color: #f9f9f9;
    width: 40rem;
    border: solid 1px #eee;
    box-shadow: 0 0 10px -2px #999999;
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
