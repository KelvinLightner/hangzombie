import React from 'react';
import AppComponent from './AppComponent.jsx';

class CorrectLetter extends AppComponent {
  render() {
    // receive props being passed into class upon call 
    const { letter, guessed } = this.props;
    // create className array where I can control what is rendered to screen via logic
    let className = ['letter', 'correct'];
    
    // if the correct letter is guessed rotate guessed letter card to front
    if (guessed) {
      className.push('guessed');
    }

    // if the letter is:
    // 1. correct
    // 2. guessed
    // then rotate card to "show" card
    return (
      <li className={className.join(' ')}>
        <div className="card">
          <div className="front">_</div>
          <div className="back">{letter}</div>
        </div>
      </li>
    );
  }
}

CorrectLetter.contextTypes = {
  store: React.PropTypes.object
};

export default CorrectLetter;

