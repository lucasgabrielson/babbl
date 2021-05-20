/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=609885bf0408da8300c9e62e").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class SignUp2View extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SignUp2Controller')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SignUp2View

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '609885bf0408da83ecc9e6db'
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
    const proxies = SignUp2View.Controller !== SignUp2View ? transformProxies(this.props.children) : {

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
            <div className="af-class-full-sign-up-block">
              <div data-ix="fade-in-on-scroll" className="af-class-full-page-sign-up-form w-form">
                <form id="wf-form-Sign-Up-Form" name="wf-form-Sign-Up-Form-1" data-name="Sign Up Form 1">
                  <h3 className="af-class-contact-form-title">Sign up for a free account!</h3>
                  <div className="w-row">
                    <div className="af-class-fields-column-left w-col w-col-6"><input type="text" id="First-Name-3" name="First-Name" data-name="First Name" maxLength={256} required placeholder="First Name" className="af-class-dark-field af-class-sign-up w-input" /></div>
                    <div className="af-class-fields-column-right w-col w-col-6"><input type="text" id="Last-Name-3" name="Last-Name" data-name="Last Name" maxLength={256} placeholder="Last Name" className="af-class-dark-field af-class-sign-up w-input" /></div>
                  </div><input type="email" id="Email-3" name="Email" data-name="Email" maxLength={256} required placeholder="Email address" className="af-class-dark-field af-class-sign-up w-input" /><input type="text" id="Telephone-3" name="Telephone-3" data-name="Telephone 3" maxLength={256} required placeholder="Telephone number" className="af-class-dark-field af-class-sign-up w-input" />
                  <p className="af-class-contact-form-info-paragraph">Signing up for our services means you agree to the <a href="#" className="af-class-white-link">Privacy Policy</a> and <a href="#" className="af-class-white-link">Terms of Service</a>.</p><input type="submit" defaultValue="Get Started Now" data-wait="Please wait..." className="af-class-button af-class-light w-button" />
                </form>
                <div className="af-class-success-message w-form-done">
                  <p>Thank you! Your submission has been received!</p>
                </div>
                <div className="af-class-error-bg w-form-fail">
                  <p>Oops! Something went wrong while submitting the form</p>
                </div>
              </div>
            </div>
            <div className="af-class-full-sign-up-block af-class-right">
              <div data-ix="fade-in-on-scroll-2" className="af-class-sign-up-info-wrapper">
                <div className="af-class-sign-up-logos-wrapper"><img src="images/Untitled-design-15.png" loading="lazy" alt className="af-class-image-3" />
                  <div className="af-class-small-section-title af-class-smaller">We've been trusted by</div>
                  <div className="af-class-logos-row w-row">
                    <div className="af-class-logo-column w-col w-col-4 w-col-small-4 w-col-tiny-4"><img src="images/logo-adobe.png" alt className="af-class-client-logo af-class-small" /></div>
                    <div className="af-class-logo-column w-col w-col-4 w-col-small-4 w-col-tiny-4"><img src="images/logo-google.png" alt className="af-class-client-logo af-class-small" /></div>
                    <div className="af-class-logo-column w-col w-col-4 w-col-small-4 w-col-tiny-4"><img src="images/logo-webflow.png" alt className="af-class-client-logo af-class-small" /></div>
                  </div>
                  <div className="af-class-logos-row w-row">
                    <div className="af-class-logo-column w-col w-col-4 w-col-small-4 w-col-tiny-4"><img src="images/logo-netflix.png" alt className="af-class-client-logo af-class-small" /></div>
                    <div className="af-class-logo-column w-col w-col-4 w-col-small-4 w-col-tiny-4"><img src="images/Logo-spotify.png" alt className="af-class-client-logo af-class-small" /></div>
                    <div className="w-col w-col-4 w-col-small-4 w-col-tiny-4"><img src="images/Logo-skype.png" alt className="af-class-client-logo af-class-small" /></div>
                  </div>
                </div>
                <div className="af-class-testimonial-text-block">
                  <p className="af-class-large-testimonial-text">"This is one of the best templates I've used for my startup business."</p>
                  <div className="af-class-testimonial-person-wrapper w-clearfix"><img src="images/Testimonial-10.jpg" alt className="af-class-testimonial-person-image" />
                    <div className="af-class-testimonial-person-title af-class-dark">Jonathon Brown</div>
                    <div className="af-class-testimonial-person-title af-class-title af-class-dark">Creator of Q-Ball Group</div>
                  </div>
                </div>
                <div className="af-class-testimonial-text-block">
                  <p className="af-class-large-testimonial-text">"Using this template I was able to launch my site in just a day."</p>
                  <div className="af-class-testimonial-person-wrapper w-clearfix"><img src="images/Testimonial-14.jpg" alt className="af-class-testimonial-person-image" />
                    <div className="af-class-testimonial-person-title af-class-dark">Jennifer Wattson</div>
                    <div className="af-class-testimonial-person-title af-class-title af-class-dark">Designer at Tool</div>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default SignUp2View

/* eslint-enable */