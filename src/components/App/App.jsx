import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Community from '../Community/Community';
import AppBar from '../AppBar/AppBar';
import Drawer from '../Drawer/Drawer';
import Company from '../Company/Company';
import Dashboard from '../Dashboard/Dashboard';
import Bookmarks from '../Bookmarks/Bookmarks';
import IndexView from '../LandingPageBabbl/views/IndexView';
import About3View from '../LandingPageBabbl/views/About3View';
import Pricing3View from '../LandingPageBabbl/views/Pricing3View';
import Contact4View from '../LandingPageBabbl/views/Contact4View';
import NotFoundView from '../LandingPageBabbl/views/NotFoundView';

import './App.css';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
    dispatch({type: 'FETCH_POPULATED_TICKERS'});
    dispatch({type: 'FETCH_TOP_MOVERS'});
  
  }, [dispatch]);

  let tickers = useSelector( store => store.populated_tickers)

  let latch = false;

  if( !latch && tickers.meta !== undefined  ) {
    dispatch({type: 'FETCH_API_ARTICLES', payload: {tickers: tickers.meta.all_tickers.join() }})
    dispatch({type: 'FETCH_TICKER_SNIPPETS', payload: {tickers: tickers.meta.all_tickers.join(), days: 20, max: 5} })
    dispatch({type: 'FETCH_SORTED_API_ARTICLES', payload: {tickers: tickers.meta.all_tickers.join(), days: 20, max: 3}})
    latch = !latch;
  }
  return (
    <div className="page-container">
    <Router>
      <div>
      {/* uncomment this for mobile <Drawer /> */}
        {/* <Nav /> */}
        {/* <AppBar /> */}
        {/* <img src="//logo.clearbit.com/facebook.com"/> */}
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/landingpage" />

          <Route
            // access to community page should is free and doesn't require a login or account
            exact
            path="/community"
          >
            <Community />
          </Route>

          <Route
            // access to community page should is free and doesn't require a login or account
            exact
            path="/landingpage"
          >
            <IndexView />
          </Route>
          
          <Route
            // access to community page should is free and doesn't require a login or account
            exact
            path="/about"
          >
            <About3View />
          </Route>

          <Route
            // access to community page should is free and doesn't require a login or account
            exact
            path="/pricing"
          >
            <Pricing3View />
          </Route>

          <Route
            // access to community page should is free and doesn't require a login or account
            exact
            path="/contact"
          >
            <Contact4View />
          </Route>

          <Route
            // access to community page should is free and doesn't require a login or account
            exact
            path="/dashboard"
          >
            <Dashboard />
          </Route>

          {/* <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows RegisterPage at "/registration"

            exact
            path="/dashboard/:id"
            authRedirect="/home"
          >
            <Dashboard />
          </ProtectedRoute> */}

          <ProtectedRoute
            exact
            path="/bookmarks/:id"
          >
            <Bookmarks />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/dashboard/:id"
          >
            <Community />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/company/:id"
          >
            <Company />
          </ProtectedRoute>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LoginPage at /login
            exact
            path="/login"
            authRedirect="/user"
          >
            <LoginPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows RegisterPage at "/registration"
            exact
            path="/registration"
            authRedirect="/user"
          >
            <RegisterPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LandingPage at "/home"
            exact
            path="/registration"
            authRedirect="/user"
          >
            <LandingPage />
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
