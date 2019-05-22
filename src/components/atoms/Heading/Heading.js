import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font } from 'styled-theme'

const Wrapper = styled.h1`
    font-family: ${font('primary')};
    font-size: ${props => props.fontSize || "5rem"};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: .2rem;
    display: inline-block;

    @media (max-width: 600px) {
        font-size: ${props => props.fontsize / 2 || "3rem"};
    }

    @media (max-width: 450px) {
        font-size: ${props => props.fontsize / 3 || "2rem"};
    }
`;

const Heading = ({ ...props })  => {
    return <Wrapper {...props}/>
}

export default Heading;