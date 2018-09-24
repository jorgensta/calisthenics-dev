import React, { Component } from 'react';
import '../styles/components/App.css';
import Header from './Header';

class App extends Component {
  render() {
    
    let picture = require('../assets/FrontpagePicture.jpg')

    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
