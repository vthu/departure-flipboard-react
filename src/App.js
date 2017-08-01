import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DepartureBoard from './DepartureBoard';

class App extends Component {
  state = {
    first: 0,
    second: 1,
    displayText: 'A',
    previousText: 'Z'
  }

  updateState() {
    this.setState({
      first: !this.state.first,
      second: !this.state.second,
      displayText: this.textInput.value,
      previousText: this.state.displayText
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Departure</h2>
          <input type="text" ref={input => this.textInput = input} />
          <button onClick={() => this.updateState()}>Done</button>
          <DepartureBoard { ...this.state }/>
        </div>
      </div>
    );
  }
}

export default App;
