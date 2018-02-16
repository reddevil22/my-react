/* eslint-disable */
// jshint ignore: start

import React from "react";
import { Jockey } from "../Jockey/jockey";
import data from '../../team.json';

const random = () => {
    return Math.floor(Math.random() * data.length);
};

export class JockeyList extends React.Component {
    state = {
        horses: []
    }

    componentWillMount() {
        let people = [data[random()], data[random()], data[random()], data[random()]];
        this.setState({horses: people});
    }
    
    render() {
        return (
            <div>
                {this.state.horses.map((person) => {
                    return (
                        <Jockey 
                            avatar_url={person.avatar_url}
                            login={person.login}
                        />
                    );
                })}
            </div>
        )
    }
}