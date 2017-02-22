import React from 'react';
import AppComponent from './AppComponent.jsx';
import CorrectLetter from './CorrectLetter.jsx';

class CorrectLetters extends AppComponent {
  render() {
    // receive necessary state variables from store
    const { config: { MAX_WORD_LENGTH }, word: { word }, correctLetters } = this.context.store.getState();
    // letterIndex creates a unique key per item rendered
    let letterIndex = MAX_WORD_LENGTH; 
    let wordLength = word.length; 
    let wordReverseIndex = 1;
    let letters = [];

    // example word = cows
    for(; letterIndex > 0; letterIndex--, wordReverseIndex++) {
      let letter = word[wordLength - wordReverseIndex];
      // letter = word[4 - 1]
      let letterEl;

      // render last letter of word to correct letter component
      // architected this way because of unique key to render
      if (letter) {
        letterEl = (
          <CorrectLetter key={letterIndex} letter={letter} guessed={correctLetters.includes(letter)} />
        );
      } 

      letters[letterIndex] = letterEl;
    }

    // 
    return (
      <div className="correct-area">
        <ol className="letter-list correct-letters">
          {letters}
        </ol>
      </div>
    );
  }
}

CorrectLetters.contextTypes = {
  store: React.PropTypes.object
};

export default CorrectLetters;