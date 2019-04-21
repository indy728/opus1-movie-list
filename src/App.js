import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header' ;
import Featured from './Components/FeaturePoster/Featured' ;
import Menu from './Components/Menu/Menu' ;
import Showcase from './Components/Showcase/Showcase' ;
import FooterNav from './Components/Footer/Footer_Nav' ;

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <Header />
        <Featured />
        <Menu />
        <Showcase />
        <FooterNav />
      </div>
    );
  }
}

export default App;
