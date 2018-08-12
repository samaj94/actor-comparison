import React, { Component } from 'react';
import Search from '../Search/Search';
import ActorDetails from '../ActorDetails/ActorDetails';

class ActorContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: undefined
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const actorName = event.target.elements[0].value;
        fetch(`/findActor?actor=${actorName}`)
            .then(res => res.json())
            .then(result => this.setState({ result }));
    }

    render() {
        return (
            <div className="actorContainer">
                <ActorDetails
                    actorInfo={this.state.result}
                />
                <Search
                    findActionFunction={this.handleSubmit}
                />
            </div>
        )
    }
}

export default ActorContainer;