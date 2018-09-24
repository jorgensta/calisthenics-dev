import React, { Component } from 'react';
import '../styles/components/App.css';

class App extends Component {
  render() {
    let picture = require('../assets/FrontpagePicture.jpg')
    return (
      <div className="App">
        <h1 className="App-header">NTNUI Calisthenics</h1>
        <p>Home page of NTNUI Calisthenics</p>
      </div>
    );
  }
}

export default App;
