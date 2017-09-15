import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import moment from 'moment-timezone';


it('renders without crashing', () => {
  moment.tz.setDefault('EST');
  let props = {
    currentDay: moment("2017-09-15 09:30:00").format("MMM Do YYYY h:mm:ss a")
  };

  const tree = renderer.create(<App {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
