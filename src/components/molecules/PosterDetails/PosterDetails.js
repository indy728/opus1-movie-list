import React from 'react';
import styled from 'styled-components';

import PosterDetail from '../PosterDetail';

const Wrapper = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PosterDetails = () => {
    return (
        <Wrapper>
            <PosterDetail icon="eye">456</PosterDetail>
            <PosterDetail icon="thumbs-up">10k</PosterDetail>
            <PosterDetail icon="chatboxes">45</PosterDetail>
        </Wrapper>
    )
}

export default PosterDetails;
