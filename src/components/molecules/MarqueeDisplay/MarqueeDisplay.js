import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    width: 30rem;
    transform: ${props => props.comingSoon ? "scale(1.25)" : ""};
    color: ${props => props.comingSoon ? "rgb(226, 44, 44)" : ""};
    text-shadow: ${props => props.comingSoon ? "1px 1px #222" : ""};
    transition: all ease-out .2s;
`;

const MarqueeDisplay = ({ handler, comingSoon, children }) => {

    const toggleMarqueeDisplay = () => {
        if (comingSoon) return

        handler();
    };

    return (
        <Wrapper onClick={toggleMarqueeDisplay} comingSoon={comingSoon}>
            {children}
        </Wrapper>
    )
}

export default MarqueeDisplay;
