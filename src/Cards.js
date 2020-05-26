import React, { Component } from 'react';
import './Cards.css'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameStarted: false,
            gameEnded: false,
            winner: null,
            player1: [],
            player2: [],
            player1card: null,
            player2card: null,
            tied: false,
            cards: [
                '2 OF HEARTS', '3 OF HEARTS', '4 OF HEARTS', '5 OF HEARTS', '6 OF HEARTS', '7 OF HEARTS', '8 OF HEARTS', '9 OF HEARTS', '10 OF HEARTS', '11 OF HEARTS', '12 OF HEARTS', '13 OF HEARTS', '1 OF HEARTS',
                '2 OF DIAMONDS', '3 OF DIAMONDS', '4 OF DIAMONDS', '5 OF DIAMONDS', '6 OF DIAMONDS', '7 OF DIAMONDS', '8 OF DIAMONDS', '9 OF DIAMONDS', '10 OF DIAMONDS', '11 OF DIAMONDS', '12 OF DIAMONDS', '13 OF DIAMONDS', '1 OF DIAMONDS',
                '2 OF CLUBS', '3 OF CLUBS', '4 OF CLUBS', '5 OF CLUBS', '6 OF CLUBS', '7 OF CLUBS', '8 OF CLUBS', '9 OF CLUBS', '10 OF CLUBS', '11 OF CLUBS', '12 OF CLUBS', '13 OF CLUBS', '1 OF CLUBS',
                '2 OF SPADES', '3 OF SPADES', '4 OF SPADES', '5 OF SPADES', '6 OF SPADES', '7 OF SPADES', '8 OF SPADES', '9 OF SPADES', '10 OF SPADES', '11 OF SPADES', '12 OF SPADES', '13 OF SPADES', '1 OF SPADES'
            ]
        };
        this.dealHands = this.dealHands.bind(this);
        this.decideWinner = this.decideWinner.bind(this);
        this.breakTie = this.breakTie.bind(this);

    }


    dealHands() {
        this.setState({
            gameStarted: true
        });

        // randomizes cards for player 1
        if (this.state.cards.length > 26) {
            for (var i = 0; i < 26; i++) {
                var randCard = this.state.cards[Math.floor(Math.random() * this.state.cards.length)];
                var randCardIndex = this.state.cards.indexOf(randCard);
                this.state.player1.push(randCard);
                this.state.cards.splice(randCardIndex, 1);
            }
        }
        // randomizes cards for player 2
        if (this.state.cards.length < 27) {
            for (var j = 0; j < 26; j++) {
                var randCard2 = this.state.cards[Math.floor(Math.random() * this.state.cards.length)];
                var randCardIndex2 = this.state.cards.indexOf(randCard2);
                this.state.player2.push(randCard2);
                this.state.cards.splice(randCardIndex2, 1);
            }
        }
        this.setState({
            player1card: this.state.player1[0],
            player2card: this.state.player2[0]
        })
    }

    decideWinner() {
        var p1card = this.state.player1[0];
        var p1num = parseInt(p1card);
        var p2card = this.state.player2[0];
        var p2num = parseInt(p2card);
        if (this.state.player1.length === 1 || this.state.player2.length === 1) {
            this.setState({
                gameEnded: true
            });
        }
        else {
            if (p1num > p2num) {
                this.state.player1.push(p2card);
                this.state.player2.splice(p2card, 1);
                this.state.player1.splice(p1card, 1);
                this.state.player1.push(p1card);

                this.setState({
                    player1card: this.state.player1[0],
                    player2card: this.state.player2[0]
                })
            }

            else if (p2num > p1num) {
                this.state.player2.push(p1card);
                this.state.player1.splice(p1card, 1);
                this.state.player2.splice(p2card, 1);
                this.state.player2.push(p2card);

                this.setState({
                    player1card: this.state.player1[0],
                    player2card: this.state.player2[0],
                })

            }

            else if (p1num === p2num) {
                this.setState({
                    player1card: this.state.player1[0],
                    player2card: this.state.player2[0],
                    tied: true
                })
            }
        }
    }

    breakTie() {
        var p1card = this.state.player1[0];
        var p1num = parseInt(p1card);
        var p2card = this.state.player2[0];
        var p2num = parseInt(p2card);
        var p1tie = this.state.player1[1];
        var p2tie = this.state.player2[1];

        if (p1tie >= p2tie) {
            this.state.player1.push(p2card);
            this.state.player1.push(p2tie);

            this.state.player2.splice(p2card, 1);
            this.state.player2.splice(p2tie, 1);

            this.state.player1.splice(p1card, 1);
            this.state.player1.push(p1card);
            this.state.player1.splice(p1tie, 1);
            this.state.player1.push(p1tie);

            this.setState({
                player1card: this.state.player1[0],
                player2card: this.state.player2[0],
                tied: false
            })
        }
        else if (p2tie > p1tie) {
            this.state.player2.push(p1card);
            this.state.player2.push(p1tie);

            this.state.player1.splice(p1card, 1);
            this.state.player1.splice(p1tie, 1);

            this.state.player2.splice(p2card, 1);
            this.state.player2.push(p2card);
            this.state.player2.splice(p2tie, 1);
            this.state.player2.push(p2tie);

            this.setState({
                player1card: this.state.player1[0],
                player2card: this.state.player2[0],
                tied: false
            })
        }
    }

    render() {
        return (
            <div className='cardBorder'>

                {
                    this.state.gameStarted === false && [<button onClick={this.dealHands}>Deal</button>]
                }
                {
                    this.state.gameStarted === true && this.state.player1.length !== 0 && this.state.player2.length !== 0 && this.state.tied === false && [
                        <div>Player 1: {this.state.player1card} (Card Count: {this.state.player1.length})</div>,
                        <div>Player 2: {this.state.player2card} (Card Count: {this.state.player2.length})</div>,
                        <button onClick={this.decideWinner}>Next Hand!</button>
                    ]
                }
                {
                    this.state.gameStarted === true && this.state.player1.length !== 0 && this.state.player2.length !== 0 && this.state.tied === true && [
                        <div>Player 1: {this.state.player1card} Next Card: {this.state.player1[1]} (Card Count: {this.state.player1.length})</div>,
                        <div>Player 2: {this.state.player2card} Next Card: {this.state.player2[1]} (Card Count: {this.state.player2.length})</div>,
                        <button onClick={this.breakTie}>Break Tie!</button>
                    ]
                }

                {
                    this.state.player1.length === 1 && this.state.gameEnded === true && [
                        <div>
                            The Winner is Player 2!
                        </div>
                    ]
                }
                {
                    this.state.player2.length === 1 && this.state.gameEnded === true[
                    <div>
                        The Winner is Player 1!
                        </div>
                    ]
                }

            </div>
        );
    }
}


export default Card;