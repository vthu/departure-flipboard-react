import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlipBoard from './FlipBoard';

class App extends Component {
  state = {
    isFirstliActive: 0,
    displayText: 'HIPHOP',
    previousText: 'ZZZZZZ'
  }

  updateFlipBoardState() {
    this.setState({
      isFirstliActive: !this.state.isFirstliActive,
      displayText: this.textInput.value,
      previousText: this.state.displayText
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Departure</h2>
          <div className="titleForm">
            <input type="text" ref={input => this.textInput = input} /><br />
            <button onClick={() => this.updateFlipBoardState()}>Update Flippers</button>
          </div>
          <FlipBoard { ...this.state }/>
        </div>
      </div>
    );
  }
}

export default App;
