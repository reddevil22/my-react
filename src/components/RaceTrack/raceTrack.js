/* eslint-disable */
// jshint ignore: start

import React from "react";
import { Jockey } from "../Jockey/jockey";

export class RaceTrack extends React.Component {
    render() {
        return (
            <div id="track">
                <h2>Race Track</h2>
                <button>Start Race</button>
                <button type="reset">Reset Race</button>
                <div id="grass">
                    <Jockey 
                        avatar_url={this.props.avatar_url}
                        login={this.props.login}
                    />
                    <div id="line-1"></div>
                    <Jockey 
                        avatar_url={this.props.avatar_url}
                        login={this.props.login}
                    />
                    <div id="line-2"></div>
                    <Jockey 
                        avatar_url={this.props.avatar_url}
                        login={this.props.login}
                    />
                    <div id="line-3"></div>
                </div>
            </div>
        )
    }
}