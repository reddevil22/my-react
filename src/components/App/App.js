import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import { JockeyList } from "../JockeyList/jockeyList";
//import { GithubCard } from "../githubCard/ghCard";

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
                    <div id="horses">
                        <h2>Horses</h2>
                        <JockeyList />
                        <button type="submit">Add to Race</button>
                    </div>

                    <div id="track">
                        <h2>Race Track</h2>
                        <button>Start Race</button>
                        <button type="reset">Reset Race</button>
                        <div id="grass">
                            <div id="line-1"></div>
                            <div id="line-2"></div>
                            <div id="line-3"></div>
                        </div>
                    </div>

                    <div id="scoreboard">
                        <h2>Scoreboard</h2>
                        <p>1: Joel</p>
                    </div>
                </body>
            </div>
        )
    }
}