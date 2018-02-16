/* eslint-disable */
// jshint ignore: start

import React from "react";
import { Jockey } from "../Jockey/jockey";
import data from '../../team.json';

export class JockeyList extends React.Component {
    
    render() {
        const random = () => {
            return Math.floor(Math.random() * data.length);
        };

        let people = [data[random()], data[random()], data[random()], data[random()]];

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
            </div>
        )
    }
}