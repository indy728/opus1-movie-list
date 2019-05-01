import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    width: 30rem;
`;

const MarqueeDisplay = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default MarqueeDisplay;
