import React from 'react';
import styled from 'styled-components';

import Heading from '../../atoms/Heading'
import FCC from '../../atoms/FlexCenterCenter';

const Wrapper = styled.div`
    margin: 2rem;
    font-size: 2.5rem;
    color: rgb(51, 51, 51);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PosterDetail = ({ icon, children }) => {
    return (
        <Wrapper>
            <FCC margin=".5rem">
                <ion-icon name={icon} />
            </FCC>
            <Heading fontSize="2.5rem">{children}</Heading>
        </Wrapper>
    )
}

export default PosterDetail;