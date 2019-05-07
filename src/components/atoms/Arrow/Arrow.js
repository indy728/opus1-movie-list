import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 5rem;
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
    border-radius: 50%;
    cursor: pointer;
    transition: transform ease-in .1s;
    
    position: absolute;
    top: 50%;
    left: 2.5rem;
    z-index: 999;

    font-size: 4rem;
    font-weight: 700;
    color: #222;
    display: flex;
    align-items: center;
    justify-content: center;

    transform: ${props => props.back ? "translateY(-120%)" : "translateY(80%)"};

    :hover {
        background: rgb(58, 194, 228);
        transform: ${props => props.back ? "translateY(-120%) scale(1.1)" : "translateY(80%) scale(1.1)"};
    }
`;

const Arrow = ({ handler, name, ...props}) => {

    const slideHandler = handler;

    return (
        <Wrapper onClick={slideHandler} {...props}>
            <ion-icon name={name}/>
        </Wrapper>
    )
}

export default Arrow;
