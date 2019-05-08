import React from 'react'; 
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > div {
        width: 10rem;
        display: flex;
        align-items: center;
    }

    > div:hover {
        transition: all .2s;
        transform: translateY(-.5rem) scale(1.2);
    }
`;

const HeaderIcon = ({ ...props }) => {
    return <Wrapper { ...props } />
}

export default HeaderIcon;
