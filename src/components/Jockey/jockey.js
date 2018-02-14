/* eslint-disable */
import React from "react";

export class Jockey extends React.Component {
    render() {
        return(
            <div>
                <img width="50" src={this.props.avatar_url} alt=""/>
                <p>{this.props.handle}</p>
            </div>
        )
    }
}