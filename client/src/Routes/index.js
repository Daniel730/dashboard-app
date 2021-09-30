import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from '../App';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import store from '../store';
import ProtectedRoute from './ProtectedRoute';

export default function Routes() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <ProtectedRoute path="/" exact Component={App} isAuth={isAuth} />
          <Route path="/login" exact component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}
