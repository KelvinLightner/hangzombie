import React from 'react';
import AppComponent from './AppComponent.jsx';

class GameEndBoard extends AppComponent {
  
  constructor(props) {
    super(props);
    this._bind('_setNewWord');
  }

  _setNewWord() {
    window.location.reload()
  }

  render() {
    // receive state objects from the store
    const { gameState: { win, over }, word: { word, error } } = this.context.store.getState();
    // define the label based on the state of win or whether the game is over
    // refactor code to use ternary operators
    const label = win ? 'CONGRATS - YOU WON!' : 'SORRY - GAME OVER!';
    let className = ['overlay', 'game-end'];

    if(win || over) {
      className.push('visible');
    } else {
      className.push('hidden');
    }
    
    const answer = !over ? '' : (
      <div className="answer">
        The missed word is {word}. 
      </div>
    );
    
    // console log error or render problem to screen
    const errorMessage = !error ? '' : (
      <div className="error">
        {error}
      </div>
    );

    return(
      <div className={className.join(' ')}>
        <div className="content">
          <div className="result-label">{label}</div>
          <button className="oval-button" onClick={this._setNewWord}>NEW GAME</button>
          {answer}
          {errorMessage}
        </div>
      </div>
    );
  }
}

GameEndBoard.contextTypes = {
  store: React.PropTypes.object
};

export default GameEndBoard;

// Condtional Rendering of Elements on a Page
// 1. Return all necessary elements to the div
// 2. Receive state of object to be updated from the store (store.getState())
// 3. Use string interpolation to update the css class being rendered to the screen