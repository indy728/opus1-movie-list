import React from 'react';
import styled from 'styled-components';

import Poster from '../../molecules/Poster'

const Wrapper = styled.div`
    margin: 0 1rem;
    display: flex;
    justify-content: space-between;

    &:not(:first-child){
    margin-top: 5rem;
    }
`;

const Row = (props) => {

    const posterList = props.movies.map((movie, index) => {
        return (
            <Poster title={movie} key={movie + index} />
        )
    })

    return (
        <Wrapper>
            {posterList}
        </Wrapper>
    )
}

export default Row;