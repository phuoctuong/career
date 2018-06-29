import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RouterContainer from './RouterContainer';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route render={props => <RouterContainer {...props} />} />
      </BrowserRouter>
    );
  }
}

