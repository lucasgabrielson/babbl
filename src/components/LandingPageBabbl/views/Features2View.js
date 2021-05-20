/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=609885bf0408da8300c9e62e").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class Features2View extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/Features2Controller')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = Features2View

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '609885bf0408da6bb4c9e6e2'
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
    const proxies = Features2View.Controller !== Features2View ? transformProxies(this.props.children) : {

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
                  <a href="features-2.html" aria-current="page" className="af-class-nav-link af-class-light w--current">Features</a>
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
            <div className="af-class-subpage-header af-class-about-1">
              <div className="af-class-container w-container">
                <div className="w-row">
                  <div data-ix="fade-in-on-load" className="af-class-about-column-left w-col w-col-6">
                    <h2 className="af-class-subpage-title af-class-smaller">Track social sentiment of the markets from your browser</h2>
                    <div className="af-class-page-subtitle af-class-full">The Babbl social sentiment platform saves time, energy, and money for retail investors by automating the reading of finance news.</div>
                    <a href="pricing-3.html" className="af-class-button w-button">try it now</a>
                  </div>
                  <div className="af-class-header-video-column-right w-col w-col-6">
                    <a href="#" data-ix="fade-in-on-load-3" className="af-class-overall-video-lightbox af-class-in-page-header w-inline-block w-lightbox">
                      <div className="af-class-video-lightbox-image-block af-class-small-hero">
                        <div className="af-class-video-lightbox-button"><img src="images/Icon-play-white.png" alt className="af-class-video-lightbox-icon" /></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section">
              <h2 data-ix="fade-in-on-load" className="af-class-subpage-title af-class-less-wide">Coming June of 2021</h2>
              <div className="af-class-container-2 w-container"><img src="images/compan.png" alt className="af-class-browser-mockup-right" />
                <div className="af-class-feature-text-block">
                  <div className="af-class-feature-intro-title">Fully Customizable Dashboard</div>
                  <h2 className="af-class-main-feature-title">A centralized user dashboard</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.</p>
                  <div className="af-class-small-features-wrapper">
                    <div data-ix="fade-in-on-scroll" className="af-class-long-feature-block af-class-title-only">
                      <div className="af-class-long-feature-icon-wrapper"><img src="https://uploads-ssl.webflow.com/609ab8117c9781809ef99892/609ab8127c97811f80f99908_Icon-camera-blue.png" alt className="af-class-long-feature-icon" /></div>
                      <div className="af-class-long-feature-title af-class-uppercase">Lorem ipsum dolor sit amet</div>
                      <div className="af-class-small-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                    <div data-ix="fade-in-on-scroll" className="af-class-long-feature-block af-class-title-only">
                      <div className="af-class-long-feature-icon-wrapper"><img src="https://uploads-ssl.webflow.com/609ab8117c9781809ef99892/609ab8127c97811a26f998b8_Icon-thumb-blue.png" alt className="af-class-long-feature-icon" /></div>
                      <div className="af-class-long-feature-title af-class-uppercase">elementum tristique. Duis cursus.</div>
                      <div className="af-class-small-paragraph">Duis cursus, mi quis viverra ornare, eros dolor.</div>
                    </div>
                    <div data-ix="fade-in-on-scroll" className="af-class-long-feature-block af-class-title-only">
                      <div className="af-class-long-feature-icon-wrapper"><img src="https://uploads-ssl.webflow.com/609ab8117c9781809ef99892/609ab8127c97818a61f998b4_Icon-megaphone-blue.png" alt className="af-class-long-feature-icon" /></div>
                      <div className="af-class-long-feature-title af-class-uppercase">consectetur adipiscing elit</div>
                      <div className="af-class-small-paragraph">Eros elementum tristique. Duis cursus, mi quis.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-container-2 w-container">
                <div className="af-class-feature-text-block af-class-right">
                  <div className="af-class-feature-intro-title">DRAG-AND-DROP BUILDER</div>
                  <h2 className="af-class-main-feature-title">Design gorgeous websites that get instant results</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                  <a href="#" className="af-class-button-3 w-button">Learn more</a>
                  <a href="#" className="af-class-button-3 af-class-_2 w-button">Sign up now</a>
                </div><img src="images/Capture_2.JPG" alt className="af-class-browser-mockup-left af-class-small" />
              </div>
              <div className="af-class-container-3 w-container">
                <div className="af-class-feature-text-block">
                  <div className="af-class-feature-intro-title">DRAG-AND-DROP BUILDER</div>
                  <h2 className="af-class-main-feature-title">Design gorgeous websites that get instant results</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                  <a href="#" className="af-class-button-3 w-button">Learn more</a>
                </div><img src="images/Capture.JPG" alt className="af-class-browser-mockup-right af-class-small" />
              </div>
              <div className="af-class-container af-class-above-image-section w-container">
                <div className="af-class-feature-info-row w-row">
                  <div className="af-class-feature-info-column w-col w-col-4">
                    <div className="af-class-feature-info-block w-clearfix"><img src="images/2_1.png" alt className="af-class-feature-info-icon" />
                      <div className="af-class-feature-info-title">Live Sentiment Data</div>
                      <p className="af-class-feature-info-paragraph">Babbl's algorithm uses multiple channels to create live sentient data for every ticker by constantly monitoring the internet.</p>
                    </div>
                  </div>
                  <div className="af-class-feature-info-column w-col w-col-4">
                    <div className="af-class-feature-info-block w-clearfix"><img src="images/1.png" alt className="af-class-feature-info-icon" />
                      <div className="af-class-feature-info-title">Newsfeed Timeline</div>
                      <p className="af-class-feature-info-paragraph">Going through countless websites and articles is a tedious task. We do this job for you by getting them from social media and reputable news providers.</p>
                    </div>
                  </div>
                  <div className="af-class-feature-info-column w-col w-col-4">
                    <div className="af-class-feature-info-block w-clearfix"><img src="images/4.png" alt className="af-class-feature-info-icon" />
                      <div className="af-class-feature-info-title">Browser Extension</div>
                      <p className="af-class-feature-info-paragraph">In order to get the most out of Babbl's algorithm, we've allowed you to take it on the go! The Babbl browser extension allows users to analyze/track any article or post of their choice.</p>
                    </div>
                  </div>
                </div>
                <div className="af-class-feature-info-row w-row">
                  <div className="af-class-feature-info-column w-col w-col-4">
                    <div className="af-class-feature-info-block w-clearfix"><img src="images/3.png" alt className="af-class-feature-info-icon" />
                      <div className="af-class-feature-info-title">Social Media Tracking</div>
                      <p className="af-class-feature-info-paragraph">Social media has transformed the way the modern investor practices due diligence in their investment research. Keep track of every post mentioning a ticker you follow on Babbl's sentiment monitoring platfrom.</p>
                    </div>
                  </div>
                  <div className="af-class-feature-info-column w-col w-col-4">
                    <div className="af-class-feature-info-block w-clearfix"><img src="images/5.png" alt className="af-class-feature-info-icon" />
                      <div className="af-class-feature-info-title">Fundamentals</div>
                      <p className="af-class-feature-info-paragraph">Company fundamentals are essential to investment research. Babbl combines the fundamentals with advanced investor sentiment tools to allow for comprehensive research.</p>
                    </div>
                  </div>
                  <div className="af-class-feature-info-column w-col w-col-4">
                    <div className="af-class-feature-info-block w-clearfix"><img src="images/Untitled-design-27.png" alt className="af-class-feature-info-icon" />
                      <div className="af-class-feature-info-title">Newsletter</div>
                      <p className="af-class-feature-info-paragraph">At the end of every week &amp; month Babbl summarizes the aggregate market sentiment data into a brief email newsletter sent to subscribers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-image-section af-class-about-us-3">
              <div className="af-class-image-section-overlay af-class-white-gradient">
                <div className="af-class-container af-class-centered w-container">
                  <div className="af-class-section-title-wrapper">
                    <h2 className="af-class-section-title">Want to learn more?</h2>
                    <div className="af-class-section-description">Give us a shout! We love discussing Babbl.</div>
                  </div>
                  <a href="/contact/contact-1" className="af-class-button w-button">Get in touch with us</a>
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

export default Features2View

/* eslint-enable */