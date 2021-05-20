/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=609885bf0408da8300c9e62e").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class About3View extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/About3Controller')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = About3View

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '609885bf0408da2ab2c9e6bc'
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
    const proxies = About3View.Controller !== About3View ? transformProxies(this.props.children) : {

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
                  <a href="about-3.html" aria-current="page" className="af-class-nav-link af-class-light w--current">About</a>
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
            <div className="af-class-subpage-header af-class-about-3">
              <div className="af-class-container w-container">
                <h2 data-ix="fade-in-on-load" className="af-class-subpage-title">Meet the Team</h2>
                <div data-ix="fade-in-on-load-2" className="af-class-page-subtitle">Our mission is to help retail investors conquer due diligence by automating finance media.</div>
              </div>
            </div>
            <div className="af-class-section af-class-_2-column-pricing">
              <div className="af-class-container w-container">
                <div className="af-class-team-member-list-wrapper w-dyn-list">
                  <div role="list" className="af-class-team-member-list w-dyn-items w-row">
                    <div role="listitem" className="af-class-team-member-item w-dyn-item w-col w-col-6">
                      <div className="af-class-team-wrapper w-clearfix">
                        <div className="af-class-team-image" />
                        <div className="af-class-team-title" />
                        <div className="af-class-team-title af-class-title" />
                        <p className="af-class-team-description" />
                      </div>
                    </div>
                  </div>
                  <div className="af-class-empty-state w-dyn-empty">
                    <div>No items found.</div>
                  </div>
                </div>
                <div className="af-class-top-line-block">
                  <p className="af-class-paragraph">Babbl is a technology company that builds sentiment analysis tools for retail investors. Stock &amp; crypto traders young, old, novice and adept can use our software to improve their research process and gauge the mood of the markets more effectively. Though we are just getting started, our long-term goal is to be the one-stop-shop for all of your investment media analysis.</p>
                </div>
              </div>
            </div>
            <div data-autoplay="true" data-loop="true" data-wf-ignore="true" data-poster-url="https://uploads-ssl.webflow.com/609885bf0408da8300c9e62e/60997dd75d0aa60b230eee20_Pexels Videos 1851768 (1)-poster-00001.jpg" data-video-urls="https://uploads-ssl.webflow.com/609885bf0408da8300c9e62e/60997dd75d0aa60b230eee20_Pexels Videos 1851768 (1)-transcode.mp4,https://uploads-ssl.webflow.com/609885bf0408da8300c9e62e/60997dd75d0aa60b230eee20_Pexels Videos 1851768 (1)-transcode.webm" className="af-class-video-section w-background-video w-background-video-atom"><video autoPlay loop style={{backgroundImage: 'url("https://uploads-ssl.webflow.com/609885bf0408da8300c9e62e/60997dd75d0aa60b230eee20_Pexels Videos 1851768 (1)-poster-00001.jpg")'}} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                <source src="https://uploads-ssl.webflow.com/609885bf0408da8300c9e62e/60997dd75d0aa60b230eee20_Pexels Videos 1851768 (1)-transcode.mp4" data-wf-ignore="true" />
                <source src="https://uploads-ssl.webflow.com/609885bf0408da8300c9e62e/60997dd75d0aa60b230eee20_Pexels Videos 1851768 (1)-transcode.webm" data-wf-ignore="true" />
              </video>
              <div className="af-class-image-section-overlay af-class-black">
                <div className="af-class-container af-class-centered w-container">
                  <div className="af-class-section-title-wrapper af-class-full-centered af-class-info">
                    <h2 className="af-class-section-title">Do you have a project in mind?</h2>
                    <div className="af-class-section-description">Give us a shout! We'd love to hear from you.</div>
                  </div>
                  <a href="/contact/contact-1" className="af-class-button w-button">Get in Touch</a>
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
            <div className="af-class-simple-bottom-footer" />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default About3View

/* eslint-enable */