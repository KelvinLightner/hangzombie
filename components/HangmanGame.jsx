import React from 'react';

import AppComponent from './AppComponent.jsx';


class HangmanGame extends AppComponent {
  constructor(props) {
    super(props);
    this._bind('_handleUserInput');
  }

  componentDidMount() {
    document.addEventListener('keypress', this._handleUserInput);
    getRandomWord();
  }

  componentWillUmount() {
    document.removeEventListener('keypress', this._handleUserInput);
  }

  _handleUserInput(e) { 
    const letter = String.fromCharCode(e.which).toLowerCase();
    const { gameState: { win, over }, hangman, word: { word }, correctLetters, incorrectLetters } = this.context.store.getState();
    const enterPressed = e.keyCode === 13;
    
  render() {
    return (
      <div className="hangman-game">
      </div>
    );
  }
}

HangmanGame.contextTypes = {
  store: React.PropTypes.object
};

export default HangmanGame;