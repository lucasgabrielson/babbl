/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=609885bf0408da8300c9e62e").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '609885bf0408da6a2fc9e632'
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
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

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
                <a href="index.html" aria-current="page" className="af-class-logo-block w-nav-brand w--current"><img src="images/finalbabbllogo-07.png" alt className="af-class-logo" /></a>
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
            <div data-autoplay="true" data-loop="true" data-wf-ignore="true" data-poster-url="https://uploads-ssl.webflow.com/609885bf0408da8300c9e62e/60988e6fb349ae1c496632d9_pexels-artem-podrez-5726497 (1)-poster-00001.jpg" data-video-urls="https://uploads-ssl.webflow.com/609885bf0408da8300c9e62e/60988e6fb349ae1c496632d9_pexels-artem-podrez-5726497 (1)-transcode.mp4,https://uploads-ssl.webflow.com/609885bf0408da8300c9e62e/60988e6fb349ae1c496632d9_pexels-artem-podrez-5726497 (1)-transcode.webm" className="af-class-hero-video w-background-video w-background-video-atom"><video autoPlay loop style={{backgroundImage: 'url("https://uploads-ssl.webflow.com/609885bf0408da8300c9e62e/60988e6fb349ae1c496632d9_pexels-artem-podrez-5726497 (1)-poster-00001.jpg")'}} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                <source src="https://uploads-ssl.webflow.com/609885bf0408da8300c9e62e/60988e6fb349ae1c496632d9_pexels-artem-podrez-5726497 (1)-transcode.mp4" data-wf-ignore="true" />
                <source src="https://uploads-ssl.webflow.com/609885bf0408da8300c9e62e/60988e6fb349ae1c496632d9_pexels-artem-podrez-5726497 (1)-transcode.webm" data-wf-ignore="true" />
              </video>
              <div className="af-class-hero-overlay-block">
                <div className="af-class-container af-class-hero-container w-container">
                  <h1 data-ix="fade-in-on-load" className="af-class-hero-main-title">Conquering Due Diligence</h1>
                  <h2 data-ix="fade-in-on-load-2" className="af-class-hero-main-title af-class-subtitle">Reading every news article and social media post on a ticker is time consuming. With Babbl's neural network algorithm, our platform creates aggregate sentiment data solutions for the everyday trader.</h2>
                </div>
              </div>
            </div>
            <div className="af-class-section">
              <div className="af-class-container af-class-home-intro-container w-container">
                <div data-ix="fade-in-zoom" className="af-class-home-intro-wrapper">
                  <a href="pricing-3.html" className="af-class-home-intro-link-block w-inline-block">
                    <div className="af-class-intro-block-overlay" />
                  </a>
                  <div className="af-class-intro-block-text-wrapper">
                    <div className="af-class-intro-block-title">Watchlist</div>
                    <p>Follow companies and catch the sentiment trends early.</p>
                  </div>
                </div>
                <div data-ix="fade-in-zoom-3" className="af-class-home-intro-wrapper af-class-mid">
                  <div className="af-class-intro-block-overlay" />
                  <a href="pricing-3.html" className="af-class-home-intro-link-block af-class-_2 w-inline-block" />
                  <div className="af-class-intro-block-text-wrapper af-class-mid">
                    <div className="af-class-intro-block-title">Dashboard</div>
                    <p>Track company sentiment at the click of a button while keeping up with the latest news and company developments.</p>
                  </div>
                  <a href="pricing-3.html" className="af-class-button w-hidden-small w-hidden-tiny w-button">Become a member</a>
                </div>
                <div data-ix="fade-in-zoom-2" className="af-class-home-intro-wrapper af-class-right">
                  <a href="pricing-3.html" className="af-class-home-intro-link-block af-class-_3 w-inline-block">
                    <div className="af-class-intro-block-overlay" />
                  </a>
                  <div className="af-class-intro-block-text-wrapper af-class-last">
                    <div className="af-class-intro-block-title">Market Research</div>
                    <p>Practice due diligence with company fundamentals and insider activity.</p>
                  </div>
                </div>
                <a href="#homepages" className="af-class-button w-hidden-main w-hidden-medium w-button">Become a member</a>
              </div>
            </div>
            <div className="af-class-image-section">
              <div className="af-class-image-section-overlay af-class-color">
                <div className="af-class-container w-container">
                  <div className="af-class-section-title-wrapper af-class-full">
                    <h2 className="af-class-section-title">Early sign-up <strong>Membership</strong> features include...</h2>
                    <div className="af-class-section-description af-class-small">The Babbl MVP platform is in development and on track for release June of 2021. Until then, sign-up early for access to exclusive features, updates, and stock analysis such as...</div>
                  </div>
                  <div className="af-class-feature-info-row w-row">
                    <div className="af-class-feature-info-column w-col w-col-4">
                      <div className="af-class-feature-info-block w-clearfix"><img src="images/2_2.png" alt className="af-class-feature-info-icon" />
                        <div className="af-class-feature-info-title">Live Sentiment Data</div>
                        <p className="af-class-feature-info-paragraph">Babbl's algorithm uses multiple channels to create live sentiment data for every ticker by constantly monitoring the internet.</p>
                      </div>
                    </div>
                    <div className="af-class-feature-info-column w-col w-col-4">
                      <div className="af-class-feature-info-block w-clearfix"><img src="images/1_1.png" alt className="af-class-feature-info-icon" />
                        <div className="af-class-feature-info-title">Newsfeed Timeline</div>
                        <p className="af-class-feature-info-paragraph">Going through countless websites and articles is a tedious task. We do this job for you by getting them from social media and reputable news providers.</p>
                      </div>
                    </div>
                    <div className="af-class-feature-info-column w-col w-col-4">
                      <div className="af-class-feature-info-block w-clearfix"><img src="images/4_1.png" alt className="af-class-feature-info-icon" />
                        <div className="af-class-feature-info-title">Browser Extension</div>
                        <p className="af-class-feature-info-paragraph">In order to get the most out of Babbl's algorithm, we've allowed you to take it on the go! The Babbl browser extension allows users to analyze/track any article or post of their choice.</p>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-feature-info-row w-row">
                    <div className="af-class-feature-info-column w-col w-col-4">
                      <div className="af-class-feature-info-block w-clearfix"><img src="images/3_1.png" alt className="af-class-feature-info-icon" />
                        <div className="af-class-feature-info-title">Social Media Tracking</div>
                        <p className="af-class-feature-info-paragraph">Social media has transformed the way the modern investor practices due diligence in their investment research. Keep track of every post mentioning a ticker you follow on Babbl's sentiment monitoring platform.</p>
                      </div>
                    </div>
                    <div className="af-class-feature-info-column w-col w-col-4">
                      <div className="af-class-feature-info-block w-clearfix"><img src="images/5_1.png" alt className="af-class-feature-info-icon" />
                        <div className="af-class-feature-info-title">Fundamentals</div>
                        <p className="af-class-feature-info-paragraph">Company fundamentals are essential to investment research. Babbl combines the fundamentals with advanced investor sentiment tools to allow for comprehensive research.</p>
                      </div>
                    </div>
                    <div className="af-class-feature-info-column af-class-last w-col w-col-4">
                      <div className="af-class-feature-info-block w-clearfix"><img src="images/Untitled-design-28.png" height alt className="af-class-feature-info-icon" />
                        <div className="af-class-feature-info-title">Newsletter</div>
                        <p className="af-class-feature-info-paragraph">At the end of every week &amp; month Babbl summarizes the aggregate market sentiment data into a brief email newsletter sent to subscribers.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-overflow-none">
              <div className="af-class-container w-container"><img src="images/Untitled-design-20.png" data-ix="mockup-fade-in" alt className="af-class-home-mockup af-class-ipad" /><img src="images/Untitled-design-29.png" data-ix="mockup-fade-in-2" alt className="af-class-home-mockup af-class-iphone" /><img src="images/Untitled-design-19.png" data-ix="mockup-move" alt className="af-class-home-mockup" />
                <div className="w-row">
                  <div className="af-class-home-mockup-column w-col w-col-5" />
                  <div className="af-class-info-column-right af-class-responsive w-col w-col-7">
                    <div className="af-class-section-title-wrapper af-class-full">
                      <h2 className="af-class-section-title">Keep up with the latest market <strong>sentiment</strong>.</h2>
                    </div>
                    <div className="af-class-long-feature-block"><img src="images/Icon-responsive.png" alt className="af-class-left-feature-icon" />
                      <div className="af-class-long-feature-title">Cross-platform <strong>compatibility</strong></div>
                      <p className="af-class-description-paragraph">Access Babbl sentiment data from any device. Receive alerts about changes in social sentiment in the stocks/crypto you follow.</p>
                    </div>
                    <div className="af-class-long-feature-block"><img src="images/Icon-customize.png" alt className="af-class-left-feature-icon" />
                      <div className="af-class-long-feature-title">Customize</div>
                      <p className="af-class-description-paragraph">Customize your dashboard to find easy access to the data you care about. Personalize your alerts to stay up-to-date on the tickers you own.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-image-section af-class-ui-section">
              <div className="af-class-container w-container">
                <div className="af-class-info-block-left af-class-ui">
                  <div className="af-class-section-title-wrapper af-class-full af-class-info">
                    <h2 className="af-class-section-title-copy">Tools for <strong>Retail Investors</strong>.</h2>
                  </div>
                  <p>Babbl was designed with retail in mind. We provide easy to understand data and investment tools for the everyday investor.</p>
                  <a href="features-2.html" className="af-class-button w-button">Check it out</a>
                </div>
              </div>
            </div>
            <div id="homepages" className="af-class-section af-class-dark">
              <div className="af-class-container w-container">
                <div className="af-class-section-title-wrapper">
                  <div className="af-class-small-section-title">Subscribe for free</div>
                  <h2 className="af-class-section-title">Market Newsletter Analysis</h2>
                  <div className="af-class-section-description">Babbl's natural language processing algorithm tracks the top news and tweets across the market so you don't have to.</div>
                  <div className="af-class-form-block-2 w-form">
                    <form id="email-form-2" name="email-form-2" data-name="Email Form 2" redirect="https://babbl.substack.com/p/march-2021-monthly-round-up" data-redirect="https://babbl.substack.com/p/march-2021-monthly-round-up" className="af-class-form-3 af-class-form-4 af-class-form-6-copy"><input type="text" className="af-class-input w-input" maxLength={256} name="email-2" data-name="Email 2" placeholder="Enter your email" id="email-2" required /><input type="submit" defaultValue="Subscribe" data-wait="Please wait..." className="af-class-button-2 af-class-form-button w-button" /></form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-container"><img src="images/jjkjfkldsajafklasdjflk.png" loading="lazy" alt className="af-class-image-2" /></div>
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
              <div className="af-class-simple-bottom-footer" />
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */