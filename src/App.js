import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const REACT_APP_MSAL_CLIENT_ID = process.env.REACT_APP_MSAL_CLIENT_ID;
    console.log("Environment variable REACT_APP_MSAL_CLIENT_ID = " + REACT_APP_MSAL_CLIENT_ID);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
