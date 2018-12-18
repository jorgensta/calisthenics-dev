import React, { Component } from 'react';
import '../styles/components/App.css';
import Header from './Header';
import picture from '../assets/NTNUI_TRYKK.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header picture={picture}/>
      </div>
    );
  }
}

export default App;
