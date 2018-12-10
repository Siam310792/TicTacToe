import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ReactLink } from './ReactLink'
import { OtherLink } from './ReactLink'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ReactLink />
          <OtherLink />
        </header>
      </div>
    );
  }
}

export default App;
