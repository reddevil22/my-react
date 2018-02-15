/* eslint-disable */
// jshint ignore: start

import React from "react";
import { Jockey } from "../Jockey/jockey";
import data from '../../team.json';

export class JockeyList extends React.Component {
    state = {
        horses: []
    }

    onSubmit = () => {
        this.setState(prevState => {
            horses: prevState.horses.concat(this.Jockey);
        })
    }

    render() {
        const random = () => {
            return Math.floor(Math.random() * data.length);
        };

        let people = [data[random()], data[random()], data[random()], data[random()]];

        console.log(this.state.horses);
        return (
            <div>
                {people.map((person) => {
                    return (
                        <Jockey 
                            avatar_url={person.avatar_url}
                            login={person.login}
                        />
                    );
                })}
                <button
                    type="submit"
                    onSubmit={this.onSubmit}
                >
                        Add to Race
                </button>
            </div>
        )
    }
}