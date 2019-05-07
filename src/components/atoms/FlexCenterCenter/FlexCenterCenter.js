import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: ${props => props.margin || "0"};

    display: flex;
    align-items: center;
    justify-content: center;
`;

const FlexCenterCenter = ({ children, ...props }) => {
    return (
        <Wrapper {...props}>
            {children}
        </Wrapper>
    )
}

export default FlexCenterCenter;
