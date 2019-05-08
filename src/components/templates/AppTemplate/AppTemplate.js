import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  margin:2rem auto;
  padding: 0 8rem;
  max-width:90rem;
  text-align: center;
  box-shadow: 0 0 10px -5px #999999;
  background-color: rgba(245, 245, 245, 0.466);

  /* @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  } */
`

const Content = styled.section``

const AppTemplate = ({
  header, features, children, footer, ...props
}) => {
  return (
    <Wrapper {...props}>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default AppTemplate
