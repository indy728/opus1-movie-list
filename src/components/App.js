import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';

import MoviePage from './pages/MoviePage/index.js';

import theme from './themes/default'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <MoviePage />
    </ThemeProvider>
  );
}

export default App;
