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

// const Header = styled.header`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 999;
// `

// const Features = styled.section``

const Content = styled.section``

// const Footer = styled.footer`
//   margin-top: auto;
// `

const AppTemplate = ({
  header, features, children, footer, ...props
}) => {
  return (
    <Wrapper {...props}>
      {/* <Header>{header}</Header> */}
      {/* {features && <Features>{features}</Features>} */}
      <Content>{children}</Content>
      {/* <Footer>{footer}</Footer> */}
    </Wrapper>
  )
}

export default AppTemplate
