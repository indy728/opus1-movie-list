import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    height: ${props => props.left ? "40%" : "80%"};
    justify-content: ${props => props.left ? "flex-start" : "flex-end"};
    font-size: ${props => props.left ? "3rem" : "6rem"};
`;

const HeaderIcon = ({ name, ...props }) => {
    return (
        <Wrapper {...props} >
            <ion-icon name={name} />
        </Wrapper>
    )
}

export default HeaderIcon;
