import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DepartureBoard from './DepartureBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Departure</h2>
          <DepartureBoard style={{ marginTop: 100 }} />
        </div>
      </div>
    );
  }
}

export default App;
