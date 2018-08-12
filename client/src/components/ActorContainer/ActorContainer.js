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
                <Search
                    findActionFunction={this.handleSubmit}
                />
                <ActorDetails
                    actorInfo={this.state.result}
                />
            </div>
        )
    }
}

export default ActorContainer;