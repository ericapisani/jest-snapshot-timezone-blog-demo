import React, { Component } from 'react';
import moment from 'moment';
import './App.css';

class App extends Component {
  render() {
    const currentDay = moment().format("MMM Do YYYY");

    return (
      <div className="App">
        Hello world!
        <p>The current day is {currentDay}</p>
      </div>
    );
  }
}

export default App;
