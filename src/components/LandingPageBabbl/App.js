import logo from './logo.svg';
import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './App.css';
import About3View from './views/About3View';
import IndexView from './views/IndexView';

function App() {
  return (
    <Router>
        <div>
            <Route
            // access to community page should is free and doesn't require a login or account
            exact
            path="/about3view"
          >
            <About3View />
            </Route>
            <Route
            // access to community page should is free and doesn't require a login or account
            exact
            path="/"
          >
            <IndexView />
          </Route>
        </div>
    </Router>
  );
}

export default App;
