import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    currentDay: PropTypes.string.isRequired,
  };

  static defaultProps = {
    currentDay: moment().format("MMM Do YYYY")
  };

  render() {
    const { currentDay } = this.props;

    return (
      <div className="App">
        Hello world!
        <p>The current day is {currentDay}</p>
      </div>
    );
  }
}

export default App;
