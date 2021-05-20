/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=609885bf0408da8300c9e62e").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class DetailBlogView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/DetailBlogController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = DetailBlogView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '609885bf0408da742dc9e6c2'
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
    const proxies = DetailBlogView.Controller !== DetailBlogView ? transformProxies(this.props.children) : {

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
                  <a href="contact-4.html" className="af-class-nav-link af-class-light">Contact</a>
                  <a href="#" className="af-class-navlink af-class-light af-class-nav-menu w-inline-block" />
                </nav>
                <div className="af-class-transparant-menu-button w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="af-class-blog-post-header">
              <div className="af-class-blog-post-header-overlay">
                <div className="af-class-container w-container">
                  <div data-ix="fade-in-on-load-2" className="af-class-blog-single-post-date" />
                  <h2 data-ix="fade-in-on-load" className="af-class-subpage-title af-class-blog-post-title" />
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-blog-page-section">
              <div className="af-class-container w-container">
                <div className="af-class-blog-post-page-content">
                  <div className="af-class-rich-text-block w-richtext" />
                  <div className="af-class-single-post-author-block w-clearfix">
                    <div className="af-class-post-author-line" /><img src alt className="af-class-post-author-photo" />
                    <div className="af-class-post-author-name" />
                    <div className="af-class-post-author-name af-class-description" />
                  </div>
                </div>
                <div className="af-class-form-block w-form">
                  <form id="email-form-2" name="email-form-2" data-name="Email Form 2" redirect="https://babbl.substack.com/p/march-2021-monthly-round-up" data-redirect="https://babbl.substack.com/p/march-2021-monthly-round-up" className="af-class-form-5"><input type="text" className="af-class-input w-input" maxLength={256} name="email-2" data-name="Email 2" placeholder="Enter your email" id="email-2" required /><input type="submit" defaultValue="Subscribe" data-wait="Please wait..." className="af-class-button-2 af-class-form-button w-button" /></form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
                <div className="af-class-section-title-wrapper">
                  <h2 className="af-class-section-title af-class-dont-miss">Don't miss these stories:</h2>
                </div>
                <div className="af-class-blog-posts-list-wrapper w-dyn-list">
                  <div role="list" className="af-class-blog-posts-list af-class-related w-clearfix w-dyn-items w-row">
                    <div role="listitem" className="af-class-simple-blog-post-item af-class-related w-dyn-item w-col w-col-4">
                      <a href="#" className="af-class-simple-blog-image-block w-inline-block">
                        <div className="af-class-blog-post-overlay af-class-light" />
                      </a>
                      <div className="af-class-blog-post-content">
                        <div className="af-class-blog-post-date" />
                        <a href="#" className="af-class-blog-post-title-link" />
                        <p className="af-class-blog-post-summary" />
                      </div>
                    </div>
                  </div>
                  <div className="af-class-empty-state w-dyn-empty">
                    <div>No items found.</div>
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
                    <a href="index.html" className="af-class-footer-inline-link">Home</a>
                    <a href="about-3.html" className="af-class-footer-inline-link">About</a>
                    <a href="pricing-3.html" className="af-class-footer-inline-link">Pricing</a>
                    <a href="contact-4.html" className="af-class-footer-inline-link">Contact</a>
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

export default DetailBlogView

/* eslint-enable */