import React from 'react';
import './ActorDetails.css';

const ActorDetails = (props) => {
  if (!props.actorInfo) { 
    return (
      <div>Search for an Actor!</div>
    );
  }

  return (
    <div>
      <h2>{props.actorInfo.actorName}</h2>
      <div>Total Movies: {props.actorInfo.totalMovies}</div>
      <div>Average Score: {props.actorInfo.averageScore}%</div>
      {/* <div>Roles Featured: </div>
      <div>Average Billing Level: </div>
      <div>Movies by the years</div>
      <div>Highest Grossing</div> */}
    </div>
  );
};


export default ActorDetails;
