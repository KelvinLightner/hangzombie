import React from 'react';

import AppComponent from './AppComponent.jsx';


class HangmanGame extends AppComponent {
  
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