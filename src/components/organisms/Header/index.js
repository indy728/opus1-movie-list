import React from 'react';
import styled from 'styled-components'
import { palette } from 'styled-theme';

import HeaderIcons from '../../molecules/HeaderIcons/HeaderIcons';
import Heading from '../../atoms/Heading';
import HeaderIcon from '../../atoms/HeaderIcon';

const Wrapper = styled.section`
    width: 100%;
    height: 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${palette('text', 0)};
`;

const Header = () => {

    const icons = [
        [
            { name: "albums", link: "albums"},
            { name: "barcode", link: "barcode"},
        ],
        { name: "login", link: "log-in"},
    ]

    return (
        <Wrapper>
            <HeaderIcons>
                <HeaderIcon name={icons[0][0].link} left />
                <HeaderIcon name={icons[0][1].link} left />
            </HeaderIcons>
            <Heading>movies</Heading>
            <HeaderIcons>
                <HeaderIcon name={icons[1].link} />
            </HeaderIcons>
        </Wrapper>
    )
}

export default Header;