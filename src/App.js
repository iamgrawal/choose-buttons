import React, { Component } from 'react';

import ButtonContainer from './ButtonContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonContainer contentA="You Chose A" contentB="You Chose B" className="btn-container" />
      </div>
    );
  }
}

export default App;
