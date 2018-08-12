import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <form onSubmit={this.props.findActionFunction}>
        <input
          type="text"
          ref="searchActorInput"
          placeholder="Search"
        />
        <input type="submit" value="Find" />
      </form>

    );
  }
}

Search.propTypes = {
  findActionFunction: PropTypes.func.isRequired
}

export default Search;
