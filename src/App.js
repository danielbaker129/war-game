import React, { Component } from 'react';
import './App.css';
import Cards from './Cards.js';

class App extends Component {
  render() {
    return (
      <div className="App" >
        War
        <Cards />
      </div>
    );
  }
}

export default App;
