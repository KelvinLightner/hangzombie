import React from 'react';
import AppComponent from './AppComponent.jsx';
import IncorrectLetter from './IncorrectLetter.jsx';

class IncorrectLetters extends AppComponent {
  render() {
    // receive typed incorrect letters from the store
    const { incorrectLetters } = this.context.store.getState();

    // render to screen box for incorrect letters
    if (incorrectLetters.length === 0) {
      return <span />;
    }

    // map through incorrect letters and pass as props to incorrect letter component
    const letters = incorrectLetters.map((letter) => {
      return <IncorrectLetter key={letter} letter={letter} />
    });

    return (
      <div className="incorrect-area">
        <div className="result-label">INCORRECT GUESSES:</div>
        <ol className="letter-list incorrect-letters">
          {letters}
        </ol>
      </div>
    );
  }
}

IncorrectLetters.contextTypes = {
  store: React.PropTypes.object
};

module.exports = IncorrectLetters;