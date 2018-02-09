import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';

export class App extends Component {
  doStuff() {
    let limit = 123;
    for (let i = 0; i < limit; i++) {
      console.log(i);
    }
  }
  render() {
    this.doStuff();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2 className="App-sub-title">Kurtosys Grads</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/components/App/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}