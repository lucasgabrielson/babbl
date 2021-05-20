/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=609885bf0408da8300c9e62e").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class UiElementsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UiElementsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UiElementsView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '609885bf0408da7eafc9e6c4'
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
    const proxies = UiElementsView.Controller !== UiElementsView ? transformProxies(this.props.children) : {

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
            <div className="af-class-subpage-header af-class-ui">
              <div className="af-class-container w-container">
                <h2 data-ix="fade-in-on-load" className="af-class-subpage-title">Ready to use UI elements!</h2>
                <div data-ix="fade-in-on-load-2" className="af-class-page-subtitle">This Startup Kit comes with some awesome ready to use UI elements.</div>
              </div>
            </div>
            <div className="af-class-section">
              <div className="af-class-container af-class-elements-container w-container">
                <div className="af-class-elements-title-wrapper">
                  <h2 className="af-class-section-title af-class-elements-title">Buttons</h2>
                  <div className="af-class-section-description af-class-elements">Various Button styles to choose from!</div>
                </div>
                <div className="af-class-elements-wrapper">
                  <div className="af-class-elements-row w-row">
                    <div className="af-class-element-column w-col w-col-4">
                      <a href="#" className="af-class-button af-class-full w-button">Button</a>
                    </div>
                    <div className="af-class-element-column w-col w-col-4">
                      <a href="#" className="af-class-button af-class-green af-class-full w-button">Button</a>
                    </div>
                    <div className="af-class-element-column w-col w-col-4">
                      <a href="#" className="af-class-button af-class-purple af-class-full w-button">Button</a>
                    </div>
                  </div>
                  <div className="af-class-elements-row w-row">
                    <div className="af-class-element-column w-col w-col-4">
                      <a href="#" className="af-class-button af-class-full af-class-outline w-button">Button</a>
                    </div>
                    <div className="af-class-element-column w-col w-col-4">
                      <a href="#" className="af-class-button af-class-green af-class-full af-class-outline w-button">Button</a>
                    </div>
                    <div className="af-class-element-column w-col w-col-4">
                      <a href="#" className="af-class-button af-class-purple af-class-full af-class-outline w-button">Button</a>
                    </div>
                  </div>
                  <div className="af-class-elements-row w-row">
                    <div className="af-class-element-column w-col w-col-4">
                      <a href="#" className="af-class-button af-class-icon-button af-class-full w-button">Icon Button</a>
                    </div>
                    <div className="af-class-element-column w-col w-col-4">
                      <a href="#" className="af-class-button af-class-icon-button af-class-full af-class-green w-button">Icon Button</a>
                    </div>
                    <div className="af-class-element-column w-col w-col-4">
                      <a href="#" className="af-class-button af-class-icon-button af-class-full af-class-purple w-button">Icon Button</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-tint">
              <div className="af-class-container af-class-elements-container w-container">
                <div className="af-class-elements-title-wrapper">
                  <h2 className="af-class-section-title af-class-elements-title">Lists</h2>
                  <div className="af-class-section-description af-class-elements">Various List styles to choose from!</div>
                </div>
                <div className="af-class-elements-wrapper">
                  <div className="af-class-elements-row w-row">
                    <div className="af-class-element-column w-col w-col-4">
                      <ul role="list" className="af-class-checklist w-list-unstyled">
                        <li className="af-class-checklist-item"><img src="images/Icon-check-green.png" alt className="af-class-check-icon" />
                          <p>
                            <a href="#">Lorem ipsum</a> dolor sit amet
                          </p>
                        </li>
                        <li className="af-class-checklist-item"><img src="images/Icon-check-green.png" alt className="af-class-check-icon" />
                          <p><strong>Duis cursus</strong>, mi quis viverra ornare</p>
                        </li>
                        <li className="af-class-checklist-item"><img src="images/Icon-check-green.png" alt className="af-class-check-icon" />
                          <p>Elementum tristique. Duis cursus.</p>
                        </li>
                      </ul>
                    </div>
                    <div className="af-class-element-column w-col w-col-4">
                      <ul role="list">
                        <li>
                          <p><em>Lorem ipsum dolor</em> sit amet</p>
                        </li>
                        <li>
                          <p>Duis cursus, mi quis viverra ornare</p>
                        </li>
                        <li>
                          <p>Elementum tristique. Duis cursus.</p>
                        </li>
                      </ul>
                    </div>
                    <div className="af-class-element-column w-col w-col-4">
                      <ol role="list">
                        <li>
                          <p>Lorem ipsum dolor sit amet&nbsp;</p>
                        </li>
                        <li>
                          <p><strong>Duis cursus</strong>, mi quis viverra ornare</p>
                        </li>
                        <li>
                          <p>Elementum tristique. <a href="#">Duis cursus</a>.</p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section">
              <div className="af-class-container af-class-elements-container w-container">
                <div className="af-class-elements-title-wrapper">
                  <h2 className="af-class-section-title af-class-elements-title">Social Buttons</h2>
                  <div className="af-class-section-description af-class-elements">Various Social Button styles to choose from!</div>
                </div>
                <div className="af-class-elements-wrapper af-class-centered">
                  <a href="#" className="af-class-social-button w-inline-block"><img src="images/Icon-facebook_1.png" alt className="af-class-social-icon" /></a>
                  <a href="#" className="af-class-social-button w-inline-block"><img src="images/Icon-twitter.png" alt className="af-class-social-icon" /></a>
                  <a href="#" className="af-class-social-button w-inline-block"><img src="images/Icon-google.png" width={20} alt className="af-class-social-icon" /></a>
                  <a href="#" className="af-class-social-button w-inline-block"><img src="images/Icon-rss.png" alt className="af-class-social-icon" /></a>
                </div>
                <div className="af-class-elements-wrapper af-class-centered">
                  <a href="#" className="af-class-social-button af-class-facebook w-inline-block"><img src="images/Icon-facebook_1.png" alt className="af-class-social-icon" /></a>
                  <a href="#" className="af-class-social-button af-class-twitter w-inline-block"><img src="images/Icon-twitter.png" alt className="af-class-social-icon" /></a>
                  <a href="#" className="af-class-social-button af-class-google w-inline-block"><img src="images/Icon-google.png" width={20} alt className="af-class-social-icon" /></a>
                  <a href="#" className="af-class-social-button af-class-rss w-inline-block"><img src="images/Icon-rss.png" alt className="af-class-social-icon" /></a>
                </div>
                <div className="af-class-elements-wrapper af-class-centered">
                  <a href="#" className="af-class-social-button af-class-line w-inline-block"><img src="images/Icon-facebook.png" alt className="af-class-social-icon" /></a>
                  <a href="#" className="af-class-social-button af-class-line w-inline-block"><img src="images/Icon-twitter_1.png" alt className="af-class-social-icon" /></a>
                  <a href="#" className="af-class-social-button af-class-line w-inline-block"><img src="images/Icon-Google-plus.png" width={20} alt className="af-class-social-icon" /></a>
                  <a href="#" className="af-class-social-button af-class-line w-inline-block"><img src="images/Icon-rss-black.png" alt className="af-class-social-icon" /></a>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-tint">
              <div className="af-class-elements-title-wrapper">
                <h2 className="af-class-section-title af-class-elements-title">Re-usable Footer Symbols</h2>
                <div className="af-class-section-description af-class-elements">Various Footer styles to choose from!</div>
              </div>
              <div className="af-class-element-container">
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
              </div>
              <div className="af-class-element-container">
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
              </div>
              <div className="af-class-element-container">
                <div className="af-class-footer">
                  <div className="af-class-container af-class-footer-container w-container">
                    <div className="af-class-footer-row af-class-block w-row">
                      <div className="af-class-footer-column w-col w-col-3">
                        <div className="af-class-footer-title">About us</div>
                        <p className="af-class-footer-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi qui.</p>
                      </div>
                      <div className="af-class-footer-column w-col w-col-3">
                        <div className="af-class-footer-title">Links</div>
                        <a href="#" className="af-class-footer-link">Our Product</a>
                        <a href="#" className="af-class-footer-link">Company History</a>
                        <a href="#" className="af-class-footer-link">Meet the Team</a>
                        <a href="#" className="af-class-footer-link">Other Services</a>
                      </div>
                      <div className="af-class-footer-column w-col w-col-3">
                        <div className="af-class-footer-title">Follow us</div>
                        <a href="#" className="af-class-footer-link af-class-social">Facebook</a>
                        <a href="#" className="af-class-footer-link af-class-social af-class-twitter">Twitter</a>
                        <a href="#" className="af-class-footer-link af-class-social af-class-google">Google Plus</a>
                        <a href="#" className="af-class-footer-link af-class-social af-class-youtube">YouTube</a>
                      </div>
                      <div className="af-class-footer-column af-class-last w-col w-col-3">
                        <div className="af-class-footer-title">Support</div>
                        <a href="#" className="af-class-footer-link">FAQs</a>
                        <a href="#" className="af-class-footer-link">Support Desk</a>
                        <a href="#" className="af-class-footer-link">Contact us</a>
                        <a href="#" className="af-class-footer-link">Our Office</a>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-container af-class-bottom-footer w-container">
                    <p className="af-class-bottom-footer-paragraph"><strong data-new-link="true">Copyright © Startup</strong> - Images used for demonstration purpose only (<a href="template-information/licensing.html" className="af-class-bottom-footer-link">Licenses</a>)</p>
                    <p className="af-class-bottom-footer-paragraph af-class-right">Template design by&nbsp;<a target="_blank" href="http://www.studiocorvus.com" className="af-class-bottom-footer-link">Studio Corvus</a>&nbsp;-&nbsp;<a target="_blank" href="https://webflow.com/templates/designers/rowan-hartsuiker" className="af-class-bottom-footer-link">View all templates</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section">
              <div className="af-class-elements-title-wrapper">
                <h2 className="af-class-section-title af-class-elements-title">Re-usable Navigation Symbols</h2>
                <div className="af-class-section-description af-class-elements">Various Navigation styles to choose from!</div>
              </div>
              <div className="af-class-element-container af-class-navigation">
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
              </div>
              <div className="af-class-element-container af-class-navigation af-class-_2">
                <div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="af-class-navbar af-class-with-color-button w-nav">
                  <div className="w-container">
                    <a href="index.html" className="af-class-logo-block w-nav-brand"><img src="images/Logo.png" alt className="af-class-logo" /></a>
                    <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                      <a href="/old-home" className="af-class-nav-link af-class-thin-light w-nav-link">Intro</a>
                      <div data-delay={0} className="af-class-dropdown w-dropdown">
                        <div className="af-class-nav-link af-class-dropdown-toggle af-class-thin-light w-dropdown-toggle">
                          <div>Homepage</div>
                          <div className="af-class-small-dropdown-icon w-icon-dropdown-toggle" />
                        </div>
                        <nav className="af-class-dropdown-list w-dropdown-list">
                          <a href="/home-download" className="af-class-dropdown-link w-dropdown-link">Home (Download)</a>
                          <a href="/home-iphone-app" className="af-class-dropdown-link w-dropdown-link">Home (iPhone App)</a>
                          <a href="/home-ipad-app" className="af-class-dropdown-link w-dropdown-link">Home (iPad App)</a>
                          <a href="/old-home" className="af-class-dropdown-link w-dropdown-link">Home (Portfolio)</a>
                          <a href="/home-business" className="af-class-dropdown-link w-dropdown-link">Home (Business 1)</a>
                          <a href="/home-business-2" className="af-class-dropdown-link w-dropdown-link">Home (Business 2)</a>
                          <a href="/home-personal" className="af-class-dropdown-link w-dropdown-link">Home (Personal)</a>
                          <a href="/home-coming-soon" className="af-class-dropdown-link w-dropdown-link">Home (Coming Soon)</a>
                        </nav>
                      </div>
                      <div data-delay={0} className="af-class-dropdown w-dropdown">
                        <div className="af-class-nav-link af-class-dropdown-toggle af-class-thin-light w-dropdown-toggle">
                          <div>About</div>
                          <div className="af-class-small-dropdown-icon w-icon-dropdown-toggle" />
                        </div>
                        <nav className="af-class-dropdown-list w-dropdown-list">
                          <a href="/about/about-1" className="af-class-dropdown-link w-dropdown-link">About #1</a>
                          <a href="/about/about-2" className="af-class-dropdown-link w-dropdown-link">About #2</a>
                          <a href="about-3.html" className="af-class-dropdown-link w-dropdown-link">About #3</a>
                          <a href="/about/about-4" className="af-class-dropdown-link w-dropdown-link">About #4</a>
                          <a href="/about/about-5" className="af-class-dropdown-link w-dropdown-link">About #5</a>
                        </nav>
                      </div>
                      <div data-delay={0} className="af-class-dropdown w-dropdown">
                        <div className="af-class-nav-link af-class-dropdown-toggle af-class-thin-light w-dropdown-toggle">
                          <div>Portfolio</div>
                          <div className="af-class-small-dropdown-icon w-icon-dropdown-toggle" />
                        </div>
                        <nav className="af-class-dropdown-list w-dropdown-list">
                          <a href="/portfolio/portfolio-1" className="af-class-dropdown-link w-dropdown-link">Portfolio #1</a>
                          <a href="/portfolio/portfolio-2" className="af-class-dropdown-link w-dropdown-link">Portfolio #2</a>
                          <a href="/portfolio/portfolio-3" className="af-class-dropdown-link w-dropdown-link">Portfolio #3</a>
                          <a href="/portfolio/portfolio-4" className="af-class-dropdown-link w-dropdown-link">Portfolio #4</a>
                        </nav>
                      </div>
                      <div data-delay={0} className="af-class-dropdown w-dropdown">
                        <div className="af-class-nav-link af-class-dropdown-toggle af-class-thin-light w-dropdown-toggle">
                          <div>Pricing</div>
                          <div className="af-class-small-dropdown-icon w-icon-dropdown-toggle" />
                        </div>
                        <nav className="af-class-dropdown-list w-dropdown-list">
                          <a href="/pricing/pricing-1" className="af-class-dropdown-link w-dropdown-link">Pricing #1</a>
                          <a href="/pricing/pricing-2" className="af-class-dropdown-link w-dropdown-link">Pricing #2</a>
                          <a href="pricing-3.html" className="af-class-dropdown-link w-dropdown-link">Pricing #3</a>
                          <a href="/pricing/pricing-4" className="af-class-dropdown-link w-dropdown-link">Pricing #4</a>
                          <a href="/pricing/pricing-5" className="af-class-dropdown-link w-dropdown-link">Pricing #5</a>
                        </nav>
                      </div>
                      <div data-delay={0} className="af-class-dropdown w-dropdown">
                        <div className="af-class-nav-link af-class-dropdown-toggle af-class-thin-light w-dropdown-toggle">
                          <div>Contact</div>
                          <div className="af-class-small-dropdown-icon w-icon-dropdown-toggle" />
                        </div>
                        <nav className="af-class-dropdown-list w-dropdown-list">
                          <a href="/contact-pages/contact-1" className="af-class-dropdown-link w-dropdown-link">Contact #1</a>
                          <a href="/contact-pages/contact-2" className="af-class-dropdown-link w-dropdown-link">Contact #2</a>
                          <a href="/contact-pages/contact-3" className="af-class-dropdown-link w-dropdown-link">Contact #3</a>
                          <a href="contact-4.html" className="af-class-dropdown-link w-dropdown-link">Contact #4</a>
                          <a href="/contact-pages/contact-5" className="af-class-dropdown-link w-dropdown-link">Contact #5</a>
                        </nav>
                      </div>
                      <a href="/contact/contact-1" className="af-class-nav-link af-class-with-color w-nav-link">Free Estimate</a>
                    </nav>
                    <div className="af-class-transparant-menu-button w-nav-button">
                      <div className="w-icon-nav-menu" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-element-container af-class-navigation af-class-_3">
                <div data-collapse="all" data-animation="over-right" data-duration={200} data-doc-height={1} role="banner" className="af-class-navbar w-nav">
                  <div className="w-container">
                    <a href="index.html" className="af-class-logo-block af-class-no-menu w-nav-brand"><img src="images/Logo.png" alt className="af-class-logo af-class-responsive-menu" /></a>
                    <nav role="navigation" className="af-class-right-nav-menu w-nav-menu">
                      <a href="#" className="af-class-nav-link af-class-color w-nav-link">Intro</a>
                      <div data-delay={0} className="af-class-dropdown w-dropdown">
                        <div className="af-class-nav-link af-class-dropdown-toggle af-class-color w-dropdown-toggle">
                          <div>Homepage</div>
                          <div className="w-icon-dropdown-toggle" />
                        </div>
                        <nav className="af-class-dropdown-list af-class-sidebar w-dropdown-list">
                          <a href="/home-download" className="af-class-dropdown-link w-dropdown-link">Home (Download)</a>
                          <a href="/home-iphone-app" className="af-class-dropdown-link w-dropdown-link">Home (iPhone App)</a>
                          <a href="/home-ipad-app" className="af-class-dropdown-link w-dropdown-link">Home (iPad App)</a>
                          <a href="/old-home" className="af-class-dropdown-link w-dropdown-link">Home (Portfolio)</a>
                          <a href="/home-business" className="af-class-dropdown-link w-dropdown-link">Home (Business 1)</a>
                          <a href="/home-business-2" className="af-class-dropdown-link w-dropdown-link">Home (Business 2)</a>
                          <a href="/home-personal" className="af-class-dropdown-link w-dropdown-link">Home (Personal)</a>
                          <a href="/home-coming-soon" className="af-class-dropdown-link w-dropdown-link">Home (Coming Soon)</a>
                        </nav>
                      </div>
                      <div data-delay={0} className="af-class-dropdown w-dropdown">
                        <div className="af-class-nav-link af-class-dropdown-toggle af-class-color w-dropdown-toggle">
                          <div>About</div>
                          <div className="af-class-dropdown-icon w-icon-dropdown-toggle" />
                        </div>
                        <nav className="af-class-dropdown-list af-class-sidebar w-dropdown-list">
                          <a href="/about/about-1" className="af-class-dropdown-link w-dropdown-link">About #1</a>
                          <a href="/about/about-2" className="af-class-dropdown-link w-dropdown-link">About #2</a>
                          <a href="about-3.html" className="af-class-dropdown-link w-dropdown-link">About #3</a>
                          <a href="/about/about-4" className="af-class-dropdown-link w-dropdown-link">About #4</a>
                          <a href="/about/about-5" className="af-class-dropdown-link w-dropdown-link">About #5</a>
                        </nav>
                      </div>
                      <div data-delay={0} className="af-class-dropdown w-dropdown">
                        <div className="af-class-nav-link af-class-dropdown-toggle af-class-color w-dropdown-toggle">
                          <div>Portfolio</div>
                          <div className="af-class-dropdown-icon w-icon-dropdown-toggle" />
                        </div>
                        <nav className="af-class-dropdown-list af-class-sidebar w-dropdown-list">
                          <a href="/portfolio/portfolio-1" className="af-class-dropdown-link w-dropdown-link">Portfolio #1</a>
                          <a href="/portfolio/portfolio-2" className="af-class-dropdown-link w-dropdown-link">Portfolio #2</a>
                          <a href="/portfolio/portfolio-3" className="af-class-dropdown-link w-dropdown-link">Portfolio #3</a>
                          <a href="/portfolio/portfolio-4" className="af-class-dropdown-link w-dropdown-link">Portfolio #4</a>
                        </nav>
                      </div>
                      <div data-delay={0} className="af-class-dropdown w-dropdown">
                        <div className="af-class-nav-link af-class-dropdown-toggle af-class-color w-dropdown-toggle">
                          <div>Pricing</div>
                          <div className="af-class-dropdown-icon w-icon-dropdown-toggle" />
                        </div>
                        <nav className="af-class-dropdown-list af-class-sidebar w-dropdown-list">
                          <a href="/contact/contact-1" className="af-class-dropdown-link w-dropdown-link">Pricing #1</a>
                          <a href="/contact/contact-2" className="af-class-dropdown-link w-dropdown-link">Pricing #2</a>
                          <a href="/contact/contact-3" className="af-class-dropdown-link w-dropdown-link">Pricing #3</a>
                          <a href="contact-4.html" className="af-class-dropdown-link w-dropdown-link">Pricing #4</a>
                          <a href="/contact/contact-5" className="af-class-dropdown-link w-dropdown-link">Pricing #5</a>
                        </nav>
                      </div>
                      <div data-delay={0} className="af-class-dropdown w-dropdown">
                        <div className="af-class-nav-link af-class-dropdown-toggle af-class-color w-dropdown-toggle">
                          <div>Contact</div>
                          <div className="af-class-dropdown-icon w-icon-dropdown-toggle" />
                        </div>
                        <nav className="af-class-dropdown-list af-class-sidebar w-dropdown-list">
                          <a href="/contact/contact-1" className="af-class-dropdown-link w-dropdown-link">Contact #1</a>
                          <a href="/contact/contact-2" className="af-class-dropdown-link w-dropdown-link">Contact #2</a>
                          <a href="/contact/contact-3" className="af-class-dropdown-link w-dropdown-link">Contact #3</a>
                          <a href="contact-4.html" className="af-class-dropdown-link w-dropdown-link">Contact #4</a>
                          <a href="/contact/contact-5" className="af-class-dropdown-link w-dropdown-link">Contact #5</a>
                        </nav>
                      </div>
                      <div className="af-class-nav-menu-content-block">
                        <div className="af-class-nav-title">Get the App Now!</div>
                        <p className="af-class-nav-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.</p>
                        <a href="#" className="af-class-app-store-link-button w-inline-block"><img src="images/Button-App-Store.png" alt className="af-class-app-store-button" /></a>
                        <a href="#" className="af-class-app-store-link-button w-inline-block"><img src="images/Button-Google-play.png" alt className="af-class-app-store-button" /></a>
                      </div>
                    </nav>
                    <div className="af-class-menu-button af-class-blue w-nav-button">
                      <div className="w-icon-nav-menu" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-tint">
              <div className="af-class-container af-class-elements-container w-container">
                <div className="af-class-elements-row w-row">
                  <div className="af-class-element-column af-class-left w-col w-col-6">
                    <div className="af-class-rich-text-block w-richtext">
                      <h2>Rich Text. What’s a Rich Text element exactly??</h2>
                      <figure style={{maxWidth: '35%'}} className="w-richtext-align-floatleft w-richtext-figure-type-image">
                        <div><img src="images/Photo-6_1.jpg" alt /></div>
                        <figcaption>Simple image description</figcaption>
                      </figure>
                      <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                      <h4>Static and dynamic content editing</h4>
                      <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                      <h4>How to customize formatting for each rich text</h4>
                      <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.&nbsp;</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    </div>
                  </div>
                  <div className="af-class-element-column w-col w-col-6">
                    <h1>Heading 1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <h2>Heading 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <h3>Heading 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    <h4>Heading 4</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    <h5>Heading 5</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    <h6>Heading 6</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
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

export default UiElementsView

/* eslint-enable */