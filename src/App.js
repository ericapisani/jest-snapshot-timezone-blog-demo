import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    currentDay: PropTypes.string.isRequired,
  };

  static defaultProps = {
    currentDay: moment().format("MMM Do YYYY h:mm:ss a")
  };

  render() {
    const { currentDay } = this.props;

    return (
      <div className="App">
        Hello world!
        <p>The day and time is currently {currentDay}</p>
      </div>
    );
  }
}

export default App;
