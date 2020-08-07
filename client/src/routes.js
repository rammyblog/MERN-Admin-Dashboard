import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import UserListPage from './components/dashboard/UserListPage';

const BaseRoute = () => (
  <Switch>
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/dashboard/users" component={UserListPage} />
  </Switch>
);

export default BaseRoute;
