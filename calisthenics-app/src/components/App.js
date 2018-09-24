import React, { Component } from 'react';
import '../styles/components/App.css';
import Header from './Header';



class App extends Component {
  render() {
    let picture = require('../assets/NTNUI_TRYKK.png')
    return (
      <div className="App">
        <Header picture={picture}/>
      </div>
    );
  }
}

export default App;
