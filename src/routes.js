import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
