/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=609885bf0408da8300c9e62e").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class Contact4View extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/Contact4Controller')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = Contact4View

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '609885bf0408daa1eec9e6d9'
    htmlEl.dataset['wfSite'] = '609885bf0408da8300c9e62e'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = Contact4View.Controller !== Contact4View ? transformProxies(this.props.children) : {

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
                  <a href="about-3.html" className="af-class-nav-link af-class-light">About</a>
                  <a href="features-2.html" className="af-class-nav-link af-class-light">Features</a>
                  <a href="pricing-3.html" className="af-class-nav-link af-class-light">Pricing</a>
                  <a href="blog-3.html" className="af-class-nav-link af-class-light">Newsletter</a>
                  <a href="contact-4.html" aria-current="page" className="af-class-nav-link af-class-light w--current">Contact</a>
                  <a href="#" className="af-class-navlink af-class-light af-class-nav-menu w-inline-block" />
                </nav>
                <div className="af-class-transparant-menu-button w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="af-class-subpage-header af-class-contact-1">
              <div className="af-class-container w-container">
                <div data-ix="fade-in-on-load" className="af-class-white-contact-form af-class-centered w-form">
                  <form id="wf-form-Email-Form" name="wf-form-Email-Form-4" data-name="Email Form 4">
                    <h1 className="af-class-form-title">Contact us now</h1>
                    <h2 className="af-class-form-title af-class-subtitle">Do you have a question? Contact us now!</h2><label htmlFor="name-2" className="af-class-field-label">Name:</label><input type="text" id="name-2" name="name" data-name="Name 2" maxLength={256} className="af-class-field af-class-rounded w-input" /><label htmlFor="Email-3" className="af-class-field-label">Email address:</label><input type="email" id="Email-3" name="Email" data-name="Email" maxLength={256} required className="af-class-field af-class-rounded w-input" /><label htmlFor="Message" className="af-class-field-label">Your message:</label><textarea id="Message" name="Message" maxLength={5000} data-name="Message" className="af-class-field af-class-rounded af-class-area w-input" defaultValue={""} /><input type="submit" defaultValue="Send Email" data-wait="Please wait..." className="af-class-button w-button" />
                  </form>
                  <div className="af-class-success-message w-form-done">
                    <p>Thank you! Your submission has been received!</p>
                  </div>
                  <div className="af-class-error-bg w-form-fail">
                    <p>Oops! Something went wrong while submitting the form</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-below-contact-form" />
            <div className="af-class-simple-footer">
              <div className="af-class-container w-container">
                <div className="af-class-footer-row w-row">
                  <div className="af-class-footer-logo-column-left w-col w-col-3"><img src="images/Untitled-design-15.png" loading="lazy" alt className="af-class-image-4" />
                    <div className="af-class-footer-logo">babbl, LLC</div>
                    <div className="af-class-footer-logo af-class-subtitle">Conquering Due Diligence</div>
                  </div>
                  <div className="af-class-footer-menu-column w-col w-col-6">
                    <a href="index.html" className="af-class-footer-inline-link">Home</a>
                    <a href="about-3.html" className="af-class-footer-inline-link">About</a>
                    <a href="pricing-3.html" className="af-class-footer-inline-link">Pricing</a>
                    <a href="contact-4.html" aria-current="page" className="af-class-footer-inline-link w--current">Contact</a>
                    <a href="blog-3.html" className="af-class-footer-inline-link">Newsletter</a>
                  </div>
                  <div className="af-class-footer-social-col-right w-col w-col-3">
                    <a href="http://www.facebook.com" target="_blank" className="af-class-footer-social-icon w-inline-block"><img src="images/Icon-facebook_2.png" alt className="af-class-footer-small-social-icon" /></a>
                    <a href="http://www.twitter.com" target="_blank" className="af-class-footer-social-icon w-inline-block"><img src="images/Icon-twitter.png" alt className="af-class-footer-small-social-icon" /></a>
                    <a href="http://www.google.com" target="_blank" className="af-class-footer-social-icon w-inline-block"><img src="images/Icon-google.png" alt className="af-class-footer-small-social-icon" /></a>
                  </div>
                </div>
              </div>
              <div className="af-class-simple-bottom-footer" />
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default Contact4View

/* eslint-enable */