import React from 'react'
import { createGlobalStyle } from 'styled-components'

import AppTemplate from '../../templates/AppTemplate';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import Movies from '../../organisms/Movies';

// import { AppTemplate, Header, Footer, Movies } from 'components';


const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }

  html {
    font-size: 62.5%; 
  }

  body {
    background-color: rgba(147, 180, 194, 0.336);
  }
`;


const MoviePage = () => {
  return (
    <AppTemplate >
      <GlobalStyle />
      <Header />
      <Movies />
      <Footer />
    </AppTemplate>
  )
}

export default MoviePage
