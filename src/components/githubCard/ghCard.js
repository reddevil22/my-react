/* eslint-disable */
import React from "react";
//import axios from 'axios';
import data from '../../team.json';

const Card = (props) => {
    return (
        <div>
            <img width="50" src={props.avatar_url} alt="avatar image"/>
            <div>
                <div>
                    {props.name}
                </div>
            </div>
        </div>
    );
};

const CardList = (props) => {
    return (
        <div id="cards">
            {props.cards.map(card => <Card key={card.id} {...card} />)}
        </div>
    );
};

/*class Form extends React.Component {
    state = {userName: ''}
    handleSubmit = (event) => {
        event.preventDefault();

        axios.get(`http://api.github.com/users/${this.state.userName}`)
        .then(resp => {
            this.props.onSubmit(resp.data);
            this.setState({userName: ''});
        });
    };

    render() {
        //console.log(data[0].login);
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.state.userName}
                    onChange={(event) => this.setState({userName: event.target.value})}
                    placeholder="Github username" required />
                <button type="submit">Add horse</button>
            </form>
        );
    }
}*/

export class GithubCard extends React.Component {
    state = {
        cards: []
    };

    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    };

    render() {
        return (
            <div>
                {/* <Form onSubmit={this.addNewCard} /> */}
                <CardList cards={this.state.cards} />
            </div>
        )
    }
}