import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/Home';
import Detail from 'components/Detail';

const routes = {
  HOME: '/',
  DETAIL: '/users'
};

class RouterContainer extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={routes.HOME} component={Home} />
        <Route exact path={`${routes.DETAIL}/:username`} component={Detail} />
      </Switch>
    );
  }
}

export default RouterContainer;
