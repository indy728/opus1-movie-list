import React from 'react';
import { ThemeProvider } from 'styled-components';

import MoviePage from './pages/MoviePage';

import theme from './themes/default'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <MoviePage />
    </ThemeProvider>
  );
}

export default App;
