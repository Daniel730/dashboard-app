import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({ isAuth, Component, ...rest }) {
  console.log(isAuth);

  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuth ? (
          <Component />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
    />
  );
}
