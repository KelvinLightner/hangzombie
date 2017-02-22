import React from 'react';

import AppComponent from './AppComponent.jsx';
import Gallows from './Gallows.jsx';
import IncorrectLetters from './IncorrectLetters.jsx';
import CorrectLetters from './CorrectLetters.jsx';
import GameEndBoard from './GameEndBoard.jsx';
import getRandomWord from './../actions/async-actions';
import Welcome from './Welcome.jsx';

class HangmanGame extends AppComponent {

  // architect environment to handle each keypress
  // https://www.kirupa.com/html5/keyboard_events_in_javascript.htm
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
    // receive gameState from store along with other variables
    const { gameState: { win, over }, hangman, word: { word }, correctLetters, incorrectLetters } = this.context.store.getState();
    // when enter is pressed i.e. code 13
    const enterPressed = e.keyCode === 13;

    // pressing enter will restart the game
    if (win || over) {
      if (enterPressed) {
        getRandomWord();
      } else {
        console.warn('Reset game to continue.');
      }
      
      return;
    }

    // currentLetter state to the letter that is pressed
    this.context.store.dispatch({ type: 'NEW_LETTER', letter });

    // is the letter typed in the word
    const inWord = word.includes(letter);
    // do the correct letters array already have the guessed letter
    const inCorrect = correctLetters.includes(letter);
    // is the letter typed already in the incorrect letters array  
    const inIncorrect = incorrectLetters.includes(letter);

    // if the letter is in the word but not already typed
    // change the state of the store
    if (inWord && !inCorrect) {
      this.context.store.dispatch({ type: 'INSERT_CORRECT_LETTER', letter });
    } 
    // if the letter is not in the word and not already typed
    // change the state of the store
    else if (!inWord && !inIncorrect) {
      this.context.store.dispatch({ type: 'INSERT_INCORRECT_LETTER', letter });
      // increment the hangman var based on  incorrect guesses
      this.context.store.dispatch({ type: 'INCREMENT_HANGMAN' });
    }

    this._checkResult();
  }

  // check the result of the game i.e. how many guesses are left and if game is won or not
  _checkResult() { 
    // receive config vars and word and hangman level from the store
    const { config: { MAX_HANGMAN }, hangman, word: { word }, correctLetters } = this.context.store.getState();

    // if the incremented hangman is >= the 6 guesses then the game is over
    if (hangman >= MAX_HANGMAN) {
      this.context.store.dispatch({ type: 'GAME_OVER' });
      return; 
    }

    // what does it mean to win
    const win = word.split('').every((letter) => { 
      return correctLetters.includes(letter);
    });

    // if win change the state of the game in the store
    if (win) {
      this.context.store.dispatch({ type: 'USER_WIN' });
    }
  }
  
  render() {
    return (
      <div className="hangman-game">
        <Gallows />
        <Welcome />
        <IncorrectLetters />
        <CorrectLetters />
        <GameEndBoard />
      </div>
    );
  }
}

HangmanGame.contextTypes = {
  store: React.PropTypes.object
};

export default HangmanGame;