

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import Sam from './images/Testimonial-12.jpg'
import Ram from './images/ram.jpeg'
import Jeff from './images/jeff.jpeg'
import '../App.css'

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
                  <a href="#/dashboard" className="af-class-nav-link af-class-light">Dashboard</a>
                  <a href="#/community" className="af-class-nav-link af-class-light">Community</a>
                  <a href="#/bookmarks" className="af-class-nav-link af-class-light">Bookmarks</a>
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
                <h2 data-ix="fade-in-on-load" className="af-class-subpage-title">Meet the Team</h2>
                <div data-ix="fade-in-on-load-2" className="af-class-page-subtitle">Our mission is to help retail investors conquer due diligence by automating finance media.</div>
              </div>
            </div>
            <div >
              <div className="af-class-container w-container">
                <div >
                  <div role="list" className="af-class-team-member-list w-dyn-items w-row">
                    <div role="listitem">
                      <div className="af-class-team-wrapper w-clearfix">
                        <div className="af-class-team-title af-class-title" />
                        <p className="af-class-team-description" />
                      </div>
                      <div class="af-class-picture-row">
                        <div class="af-class-picture-column">
                          <img class="af-class-about-picture" src={Sam} alt="Sam" />
                        </div>
                        <div class="af-class-picture-column">
                          <img src={Ram} alt="Ramsey" />
                        </div>
                        <div class="af-class-picture-column">
                          <img src={Jeff} alt="Jeff" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="af-class-top-line-block">
                  <p className="af-class-paragraph">Babbl is a technology company that builds sentiment analysis tools for retail investors. Stock &amp; crypto traders young, old, novice and adept can use our software to improve their research process and gauge the mood of the markets more effectively. Though we are just getting started, our long-term goal is to be the one-stop-shop for all of your investment media analysis.</p>
                  <p className="af-class-paragraph">We are living in exciting times. The accessibility of stock and cryptocurrency investments has never been greater for the average person; for the first time ever, seemingly anyone with the right set of tools and the right mindset has the ability to take control of their financial future by investing in the markets. The volume of information available to investors has increased exponentially in recent years -- technical indicators, company documents, insider transaction histories, and all the order book data anyone could ever need, now available at the fingertips of anyone with a smartphone or desktop computer. This new information paradigm has been accompanied by an ever-increasing abundance of online investment conversation. Thousands of news articles, ten-thousands of posts on Twitter and Reddit, millions of messages in investing chatrooms on Discord etc. published 24/7, each and every day.</p>
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
            <div className="af-class-simple-bottom-footer" />
          </div>
        </span>
      </span>
    )
  }
}

export default About3View

/* eslint-enable */