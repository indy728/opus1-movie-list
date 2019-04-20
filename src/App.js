import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header' ;
import Featured from './Components/Featured' ;
import Menu from './Components/Menu' ;
import Showcase from './Components/Showcase' ;
import FooterNav from './Components/Footer_Nav' ;

class App extends Component {

  render() {
    const FEATURE_FILMS = [
      { 
        "title": "The Big Lebowski",
        "imdbId": "tt0118715"
      },
      {
        "title": "The Matrix",
        "imdbId": "tt0133093"
      },
      {
        "title": "Cloud Atlas",
        "imdbId": "tt1371111"
      },
      {
        "title": "Princess Mononoke",
        "imdbId": "tt0119698"
      },
      {
        "title": "Snatch",
        "imdbId": "tt0208092"
      },
      {
        "title": "This Is Spinal Tap",
        "imdbId": "tt0088258"
      }
    ]

    return (
      <div className="App">
        <Header />
        <Featured imdbId={FEATURE_FILMS[0].imdbId} />
        <Menu />
        <section className="showcase">
          <Showcase />
        </section>
        <FooterNav />
      </div>
    );
  }
}

export default App;
