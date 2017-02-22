import React from 'react';
import AppComponent from './AppComponent.jsx';

class PoorDude extends AppComponent {
  render() {
    const { hangman } = this.context.store.getState();
    const dudeClassName = `poor-dude stadium-${hangman}`;

    return(
      <div className={dudeClassName}>
        <div className="head"></div>
        <div className="neck"></div>
        <div className="body-wrapper">
          <div className="chest"></div>
          <div className="arms"></div>
          <div className="hands"></div>
          <div className="legs"></div>
          <div className="feet"></div>
        </div>
      </div>
    );
  }
}

PoorDude.contextTypes = {
  store: React.PropTypes.object
};

export default PoorDude;

// Condtional Rendering of Elements on a Page
// 1. Return all necessary elements to the div
// 2. Receive state of object to be updated from the store (store.getState())
// 3. Use string interpolation to update the css class being rendered to the screen