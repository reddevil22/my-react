/* eslint-disable */
import React from "react";
import { Jockey } from "../Jockey/jockey";
import data from '../../team.json';

/*const JocketList = (props) => {
    return (
        <div id="cards">
            {props.cards.map(card => <Card key={card.id} {...card} />)}
        </div>
    );
};*/

export class JockeyList extends React.Component {

    value() {
        return ReactDOM.findDOMNode(this.Jockey.avatar_url).value;
    }

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