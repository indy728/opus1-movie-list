import React from 'react';
import styled from 'styled-components';

import PosterDetails from '../PosterDetails';
import PosterImage from '../../atoms/PosterImage';

const Wrapper = styled.div`
    background-color: #f9f9f9;
    width: 40rem;
    border: solid 1px #eee;
    box-shadow: 0 0 10px -2px #999999;

    margin-top: 3rem;
`;

const Poster = ({ data }) => {
    return (
        <Wrapper>
          <PosterImage id={data.id} title={data.title} poster={data.poster} />
          <PosterDetails />
        </Wrapper>
    )
}

export default Poster;
