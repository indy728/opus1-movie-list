import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../atoms/SearchIcon';

import OutNowArray from '../../atoms/OutNowArray';

const Wrapper = styled.section`
    height: 12rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 -1rem 0 -1rem #999999;
`;

const SearchBar = () => {
   
    return (
        <Wrapper>
            <SearchIcon name="search" />
            <SearchIcon name="heart" />
            <SearchIcon name="person" />
        </Wrapper>
    )
}

export default SearchBar;