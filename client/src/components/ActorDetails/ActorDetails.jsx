import React, { Component } from 'react';
import './ActorDetails.css';

class ActorDetails extends Component {
  render() {
    if (!this.props.actorInfo) { 
      return (
        <div></div>
      );
    }

    return (
      <div>
        <h2>{this.props.actorInfo.actorName}</h2>
        <div>Total Movies: {this.props.actorInfo.totalMovies}</div>
        <div>Average Score: {this.props.actorInfo.averageScore}%</div>
      </div>
    );
  }
}


export default ActorDetails;
