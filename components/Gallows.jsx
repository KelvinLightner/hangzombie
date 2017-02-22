import React from 'react';
import AppComponent from './AppComponent.jsx';
import PoorDude from './PoorDude.jsx';

class Gallows extends AppComponent {
  render() {
    // receive gameState from store 
    const { gameState: { over } } = this.context.store.getState();
    let className = ['gallows'];

    if(over) {
      className.push('sleep-well-angel');
    }

    return (
      <div className={className.join(' ')}>
        <div className="bar horizontal-bar" />
        <div className="bar vertical-bar" />
        <div className="bar long-vertical-bar" />
        <PoorDude />
      </div>
    );
  }
}

Gallows.contextTypes = {
  store: React.PropTypes.object
};

export default Gallows;

// Condtional Rendering of Elements on a Page
// 1. Return all necessary elements to the div
// 2. Receive state of object to be updated from the store (store.getState())
// 3. Use string interpolation to update the css class being rendered to the screen