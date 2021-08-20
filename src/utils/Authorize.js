import React from 'react';
import { createBrowserHistory } from 'history';
import checkAuth from './checkAuth';

export default function Authorize(Route) {
  return class Protect extends React.Component {
    render() {
      if (checkAuth()) {
        return <Route {...this.props} />
      } else {
        createBrowserHistory().push('/login');
        createBrowserHistory().go(0);
        return null;
      }
    }
  }
}