/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=609885bf0408da8300c9e62e").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class Pricing3View extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/Pricing3Controller')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = Pricing3View

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '609885bf0408da7975c9e6bf'
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
    const proxies = Pricing3View.Controller !== Pricing3View ? transformProxies(this.props.children) : {

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
            <div data-ix="hide-popup" className="af-class-contact-popup">
              <div className="af-class-popup-block">
                <a href="#" data-ix="close-popup" className="af-class-popup-close-button w-inline-block"><img src="images/Icon-close.png" alt className="af-class-close-icon" /></a>
                <div className="af-class-popup-contact-form w-form">
                  <form id="wf-form-Popup-Contact-Form" name="wf-form-Popup-Contact-Form" data-name="Popup Contact Form">
                    <div className="af-class-popup-title">Send us an Email</div><input type="text" id="name" name="name" data-name="Name" placeholder="Enter your name" maxLength={256} className="af-class-field af-class-line w-input" /><input type="email" id="email" name="email" data-name="Email" placeholder="Enter your email address" maxLength={256} required className="af-class-field af-class-line w-input" /><input type="email" id="email-2" name="email-2" data-name="Email 2" placeholder="Enter your email address" maxLength={256} required className="af-class-field af-class-line w-input" /><textarea id="Message" name="Message" placeholder="Your message..." maxLength={5000} data-name="Message" className="af-class-field af-class-line af-class-area w-input" defaultValue={""} /><input type="submit" defaultValue="Send Email" data-wait="Please wait..." className="af-class-button w-button" />
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
            <div data-collapse="medium" data-animation="default" data-duration={400} data-no-scroll={1} id="about" role="banner" className="af-class-navbar w-nav">
              <div className="w-container">
                <a href="index.html" className="af-class-logo-block w-nav-brand"><img src="images/finalbabbllogo-07.png" alt className="af-class-logo" /></a>
                <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                  <a href="about-3.html" className="af-class-nav-link af-class-light">About</a>
                  <a href="features-2.html" className="af-class-nav-link af-class-light">Features</a>
                  <a href="pricing-3.html" aria-current="page" className="af-class-nav-link af-class-light w--current">Pricing</a>
                  <a href="blog-3.html" className="af-class-nav-link af-class-light">Newsletter</a>
                  <a href="contact-4.html" className="af-class-nav-link af-class-light">Contact</a>
                  <a href="#" className="af-class-navlink af-class-light af-class-nav-menu w-inline-block" />
                </nav>
                <div className="af-class-transparant-menu-button w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="af-class-subpage-header af-class-pricing-3">
              <div className="af-class-container w-container">
                <h2 data-ix="fade-in-on-load" className="af-class-subpage-title">Pricing Options</h2>
                <div data-ix="fade-in-on-load-2" className="af-class-page-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
              </div>
            </div>
            <div className="af-class-section af-class-pricing-section">
              <div className="af-class-container w-container">
                <div className="af-class-_2-column-pricing w-row">
                  <div className="af-class-pricing-column-left w-col w-col-6">
                    <div data-ix="fade-in-on-scroll" className="af-class-large-pricing-block w-clearfix"><img src="images/Untitled-design-25.png" alt className="af-class-large-pricing-icon" />
                      <div className="af-class-large-pricing-title">Basic Package</div>
                      <div className="af-class-large-pricing-title af-class-price">$1.99/month</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.&nbsp;</p>
                      <ul role="list" className="af-class-pricing-features-list w-list-unstyled">
                        <li className="af-class-pricing-feature-list-item"><img src="images/Icon-check-green.png" alt className="af-class-pricing-list-icon" />
                          <div className="af-class-pricing-list-title">Personalized Newsletter</div>
                        </li>
                        <li className="af-class-pricing-feature-list-item"><img src="images/Icon-check-green.png" alt className="af-class-pricing-list-icon" />
                          <div className="af-class-pricing-list-title">Browser Extension</div>
                        </li>
                        <li className="af-class-pricing-feature-list-item"><img src="images/Icon-check-green.png" alt className="af-class-pricing-list-icon" />
                          <div className="af-class-pricing-list-title">News Sentiment</div>
                        </li>
                      </ul>
                      <ul role="list" className="af-class-pricing-features-list w-list-unstyled">
                        <li className="af-class-pricing-feature-list-item"><img src="images/Icon-cross-red.png" alt className="af-class-pricing-list-icon" />
                          <div className="af-class-pricing-list-title">Company Watchlist</div>
                        </li>
                        <li className="af-class-pricing-feature-list-item"><img src="images/Icon-cross-red.png" alt className="af-class-pricing-list-icon" />
                          <div className="af-class-pricing-list-title">Social Media Sentiment</div>
                        </li>
                        <li className="af-class-pricing-feature-list-item"><img src="images/Icon-cross-red.png" alt className="af-class-pricing-list-icon" />
                          <div className="af-class-pricing-list-title">Beta Access - MVP App</div>
                        </li>
                      </ul>
                      <a href="#" className="af-class-button-copy w-button" data-ix="open-contact-popup">Get it now</a>
                    </div>
                  </div>
                  <div className="af-class-pricing-column-right w-col w-col-6">
                    <div data-ix="fade-in-on-scroll-2" className="af-class-large-pricing-block af-class-_2 w-clearfix"><img src="images/2.png" alt className="af-class-large-pricing-icon" />
                      <div className="af-class-large-pricing-title">Membership Package</div>
                      <div className="af-class-large-pricing-title af-class-price">$3.99/month</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                      <ul role="list" className="af-class-pricing-features-list w-list-unstyled">
                        <li className="af-class-pricing-feature-list-item"><img src="images/Icon-check-green.png" alt className="af-class-pricing-list-icon" />
                          <div className="af-class-pricing-list-title">Personalized Newsletter</div>
                        </li>
                        <li className="af-class-pricing-feature-list-item"><img src="images/Icon-check-green.png" alt className="af-class-pricing-list-icon" />
                          <div className="af-class-pricing-list-title">Browser Extension</div>
                        </li>
                        <li className="af-class-pricing-feature-list-item"><img src="images/Icon-check-green.png" alt className="af-class-pricing-list-icon" />
                          <div className="af-class-pricing-list-title">News Sentiment</div>
                        </li>
                      </ul>
                      <ul role="list" className="af-class-pricing-features-list w-list-unstyled">
                        <li className="af-class-pricing-feature-list-item"><img src="images/Icon-check-green.png" alt className="af-class-pricing-list-icon" />
                          <div className="af-class-pricing-list-title">Company Watchlist</div>
                        </li>
                        <li className="af-class-pricing-feature-list-item"><img src="images/Icon-check-green.png" alt className="af-class-pricing-list-icon" />
                          <div className="af-class-pricing-list-title">Social Media Sentiment</div>
                        </li>
                        <li className="af-class-pricing-feature-list-item"><img src="images/Icon-check-green.png" alt className="af-class-pricing-list-icon" />
                          <div className="af-class-pricing-list-title">Beta Access - MVP App</div>
                        </li>
                      </ul>
                      <a data-ix="open-contact-popup" href="#" className="af-class-button af-class-green w-button">GET IT NOW</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-image-section af-class-get-the-app">
              <div className="af-class-image-section-overlay">
                <div className="af-class-container w-container">
                  <div className="af-class-newsletter-form w-form">
                    <form id="wf-form-Newsletter-Form" name="wf-form-Newsletter-Form" data-name="Newsletter Form">
                      <div className="af-class-newsletter-row w-row">
                        <div className="af-class-newsletter-column-left w-col w-col-5">
                          <h2 className="af-class-section-title">Our Newsletter</h2>
                          <div className="af-class-section-description af-class-faded">Sign-up for FREE&nbsp;Babbl weekly/monthly insights</div>
                        </div>
                        <div className="af-class-newsletter-column-right w-clearfix w-col w-col-7"><input type="email" id="email-2" name="email-2" data-name="Email 2" placeholder="Enter your email address" maxLength={256} required className="af-class-newsletter-field w-input" /><input type="submit" defaultValue="Subscribe" data-wait="Please wait..." className="af-class-newsletter-submit w-button" /></div>
                      </div>
                    </form>
                    <div className="af-class-success-message af-class-transparant w-form-done">
                      <p>Thank you! Your submission has been received!</p>
                    </div>
                    <div className="af-class-error-bg w-form-fail">
                      <p>Oops! Something went wrong while submitting the form</p>
                    </div>
                  </div>
                  <div className="af-class-image-section-overlay-block">
                    <div className="af-class-image-section-overlay-title">"Using it since 1990. Their Professional Plan is the best option available".</div>
                    <div className="af-class-image-section-overlay-title af-class-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-simple-footer">
              <div className="af-class-container w-container">
                <div className="af-class-footer-row w-row">
                  <div className="af-class-footer-logo-column-left w-col w-col-3"><img src="images/Untitled-design-15.png" loading="lazy" alt className="af-class-image-4" />
                    <div className="af-class-footer-logo">babbl, LLC</div>
                    <div className="af-class-footer-logo af-class-subtitle">Conquering Due Diligence</div>
                  </div>
                  <div className="af-class-footer-menu-column w-col w-col-6">
                    <a href="/homepages/home-business-3" className="af-class-footer-inline-link">Home</a>
                    <a href="/about/about-1" className="af-class-footer-inline-link">About</a>
                    <a href="/pricing/pricing-1" className="af-class-footer-inline-link">Pricing</a>
                    <a href="/contact/contact-1" className="af-class-footer-inline-link">Contact</a>
                    <a href="/blog-variations/blog-1" className="af-class-footer-inline-link">Blog</a>
                  </div>
                  <div className="af-class-footer-social-col-right w-col w-col-3">
                    <a href="http://www.facebook.com" target="_blank" className="af-class-footer-social-icon w-inline-block"><img src="images/Icon-facebook_2.png" alt className="af-class-footer-small-social-icon" /></a>
                    <a href="http://www.twitter.com" target="_blank" className="af-class-footer-social-icon w-inline-block"><img src="images/Icon-twitter.png" alt className="af-class-footer-small-social-icon" /></a>
                    <a href="http://www.google.com" target="_blank" className="af-class-footer-social-icon w-inline-block"><img src="images/Icon-google.png" alt className="af-class-footer-small-social-icon" /></a>
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

export default Pricing3View

/* eslint-enable */