import React from 'react';
import AppComponent from './AppComponent.jsx';

class Welcome extends AppComponent {
  render() {
    return (
      <div className="welcome">Welcome to HangZombiezz!!!
      	<div className="welcome subheader">Please Guess A Letter to Start the Game</div>
      </div>
    );
  }
}

export default Welcome;