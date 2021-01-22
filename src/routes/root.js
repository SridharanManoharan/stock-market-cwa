import { HashRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';
import Routes from './routes';

export default class Root extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} >
        {Routes}
      </Router>
    );
  }
}
