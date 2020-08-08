import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import UserListPage from './components/dashboard/UserListPage';
import SingleUser from './components/dashboard/SingleUser/SingleUser';

const BaseRoute = () => (
  <Switch>
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/dashboard/users" component={UserListPage} />
    <Route exact path="/dashboard/user/:id" component={SingleUser} />
  </Switch>
);

export default BaseRoute;
