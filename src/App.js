import React, { Component } from 'react';
import './App.css';
import Cards from './Cards.js';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     gameStarted: false,
  //     gameEnded: false,
  //     winner: null,
  //     player1: [],
  //     player2: [],
  //     cards: [
  //       '1 OF HEARTS', '2 OF HEARTS', '3 OF HEARTS', '4 OF HEARTS', '5 OF HEARTS', '6 OF HEARTS', '7 OF HEARTS', '8 OF HEARTS', '9 OF HEARTS', '10 OF HEARTS', 'J OF HEARTS', 'Q OF HEARTS', 'K OF HEARTS', 'A OF HEARTS',
  //       '1 OF DIAMONDS', '2 OF DIAMONDS', '3 OF DIAMONDS', '4 OF DIAMONDS', '5 OF DIAMONDS', '6 OF DIAMONDS', '7 OF DIAMONDS', '8 OF DIAMONDS', '9 OF DIAMONDS', '10 OF DIAMONDS', 'J OF DIAMONDS', 'Q OF DIAMONDS', 'K OF DIAMONDS', 'A OF DIAMONDS',
  //       '1 OF CLUBS', '2 OF CLUBS', '3 OF CLUBS', '4 OF CLUBS', '5 OF CLUBS', '6 OF CLUBS', '7 OF CLUBS', '8 OF CLUBS', '9 OF CLUBS', '10 OF CLUBS', 'J OF CLUBS', 'Q OF CLUBS', 'K OF CLUBS', 'A OF CLUBS',
  //       '1 OF CLUBS', '2 OF CLUBS', '3 OF CLUBS', '4 OF CLUBS', '5 OF CLUBS', '6 OF CLUBS', '7 OF CLUBS', '8 OF CLUBS', '9 OF CLUBS', '10 OF CLUBS', 'J OF CLUBS', 'Q OF CLUBS', 'K OF CLUBS', 'A OF CLUBS'
  //     ]
  //   };
  // }

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
