import React from 'react';
import { createBrowserHistory } from 'history';
import checkAuth from './checkAuth';

export default function Authenticated(Route) {
  return class Protect extends React.Component {
    render() {
      if (checkAuth()) {
        createBrowserHistory().push('/');
        createBrowserHistory().go(0);
        return null;
      } else {
        return <Route {...this.props} />;
      }
    }
  }
}