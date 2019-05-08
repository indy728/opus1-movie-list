import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

import MarqueeDisplay from '../../molecules/MarqueeDisplay';
import Heading from '../../atoms/Heading';

const Wrapper = styled.section`
    color: ${palette('text', 0)};
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 10rem;
    box-shadow: 0 1rem 1rem -1rem #999999;
`;

const Marquee = ({ handler, comingSoon }) => {

    return (
        <Wrapper>
            <MarqueeDisplay handler={handler} comingSoon={!comingSoon}>
                <Heading fontSize="3rem">out now</Heading>
            </MarqueeDisplay>
            <MarqueeDisplay handler={handler} comingSoon={comingSoon}>
                <Heading fontSize="3rem">coming soon</Heading>
            </MarqueeDisplay>
        </Wrapper>
    )
}

export default Marquee;