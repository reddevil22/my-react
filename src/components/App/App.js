import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react';
//import { GithubCard } from "../githubCard/ghCard";

/* export class App extends Component {
  render() {
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
} */

export class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                    <h2 className="App-sub-title">Kurtosys Grads</h2>
                </header>

                <body>
                    <div id="gh-card">
                        <h2>Horse participants</h2>
                        {/* <GithubCard /> */}
                        <Button></Button>
                    </div>

                    <div id="track">
                        <h2>Race Track</h2>
                    </div>

                    <div id="scoreboard">
                        <h2>Scoreboard</h2>
                    </div>
                </body>
            </div>
        )
    }
}