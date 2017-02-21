import React from 'react';

import AppComponent from './AppComponent.jsx';


class HangmanGame extends AppComponent {
  constructor(props) {
    super(props);
    this._bind('_handleUserInput');
  }
  
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