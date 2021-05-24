import React from 'react';
import { connect } from 'react-redux';
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=609885bf0408da8300c9e62e").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class DashboardAppBar extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NotFoundController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = DashboardAppBar

        return Controller
      }

      throw e
    }
  }



  render() {
    const proxies = DashboardAppBar.Controller !== DashboardAppBar ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/jeff-babbl-startup-ex.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div data-collapse="medium" data-animation="default" data-duration={400} data-no-scroll={1} id="about" role="banner" className="af-class-navbar w-nav">
              <div className="w-container">
                <a href="index.html" className="af-class-logo-block w-nav-brand"><img src="images/finalbabbllogo-07.png" alt className="af-class-logo" /></a>
                <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                  <a href="#/dashboard" className="af-class-nav-link af-class-light">Dashboard</a>
                  <a href="#/community" className="af-class-nav-link af-class-light">Community</a>
                  <a href={`#/bookmarks/${this.props.user.id}`} className="af-class-nav-link af-class-light">Bookmarks</a>
                  <a href="#/" className="af-class-nav-link af-class-light">LogOut</a>
                  <a href="#" className="af-class-navlink af-class-light af-class-nav-menu w-inline-block" />
                </nav>
                <div className="af-class-transparant-menu-button w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>

              </div>
            </div>
            <div className="af-class-subpage-header af-class-about-3">
              <div className="af-class-container w-container">
                <h2 data-ix="fade-in-on-load" className="af-class-subpage-title">Your Dashboard</h2>
                <div data-ix="fade-in-on-load-2" className="af-class-page-subtitle">Look over all of your Tickers with our convenient Sentiment Chart and Top Movers.</div>
              </div>
              </div>
            </div>
        </span>
    </span>
  );
 }
}

export default DashboardAppBar;

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(CompanyAppBar);