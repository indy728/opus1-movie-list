import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 5rem;
    text-align: center;
    color: rgb(226, 44, 44);

    :hover {
        transition: all .5s;
        transform: scale(1.4);
    }
`;

const SearchIcon = ({ name, ...props }) => {
    return (
        <Wrapper {...props} >
            <ion-icon name={name} />
        </Wrapper>
    )
}

export default SearchIcon;