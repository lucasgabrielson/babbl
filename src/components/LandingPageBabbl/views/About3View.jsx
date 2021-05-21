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
                  {/* <div className="af-class-empty-state w-dyn-empty">
                    <div>No items found.</div>
                  </div> */}
                </div>
                <div className="af-class-top-line-block">
                  <p className="af-class-paragraph">Babbl is a technology company that builds sentiment analysis tools for retail investors. Stock &amp; crypto traders young, old, novice and adept can use our software to improve their research process and gauge the mood of the markets more effectively. Though we are just getting started, our long-term goal is to be the one-stop-shop for all of your investment media analysis.</p>
                  <p className="af-class-paragraph">Babbl was founded by Sam Cartford and Ramsey Shaffer in April 2020 with one straightforward idea: can we automate online conversation for the stock market? 
                  With the market in a downward spiral brought on by international COVID-19 pandemic, we were itching to build something to help investors like us make sense of all of the news we were reading. Sam and Ramsey graduated from the University of Minnesota in May 2020 (Sam has a B.S. in Computer Science, Ramsey a B.S. in Industrial and Systems Engineering). 
                  Sam currently works as a Technical Analyst for Boom Lab, and Ramsey will complete his M.S. in Data Analytics at the UMN in May 2021. Both Sam and Ramsey have 8-years combined experience in data science, fin-tech, cloud systems, and corpus linguistics, with primary experience in the technical analytics realm with companies like Inspire Brands, Boom Lab, and Wells Fargo. 
                  While Sam's past work has involved computer science applications including cybersecurity, cloud platform development, and database management, Ramsey's past work involves process engineering applications such as big data analytics for fin-tech. Together, Sam and Ramsey were involved as undergraduates in the UMN's Carlson School of Management Algorithmic Trading club, 
                  and co-authored a research paper in corpus linguistics about the relationship between social media chatter and cryptocurrency price performance (namely Bitcoin), which Ramsey presented at the 2019 International Corpus Linguistics Conference in Cardiff, UK. Since finishing their undergrad, Sam and Ramsey have committed their focus on making Babbl a profitable social-impact start-up. 
                  Sam and Ramsey have leveraged lean start-up mentorship from Justin Grammens (co-founder of Lab651) and Matt Geiser (co-founder of Tin Roof Collective), and have received enduring start-up guidance and advice from Marshall Erickson (business accelerator and execution leader with the Red Wing Ignite entrepreneurship program) on a near-weekly basis since October 2020.</p>
                  <p className="af-class-paragraph">In recent months, we have taken Babbl from an idea to a full-fledged pilot MVP website and browser extension. Since then, we have added Jeff Arnold to our team to help us iterate and improve upon our development. Jeff also graduated from the UMN in 2020, and is currently finishing up a graduate degree in Sports and Business Marketing. 
                  As group, we have laid the ground work to make 2021 a big year. With suitable funding, Babbl's business model will continue to validate our problem-solution-customer fit by reaching more early adopters. We will pay a UI/UX development firm to complete professional MVP web- and mobile-applications for formal beta launch by July 2021. With our current pricing strategy, 
                  we would out-pace our monthly burn rate ($500-$1500/month) with approximately 30 paying users. In parallel to MVP production, funding will allow us to work with a social marketing firm to develop our promotional strategy and reach our goal of 1,000+ early adopters by August 2021. With more user traction, we can affirm initial revenue streams, and begin to add more finance and data science expertise to our team by late 2021. 
                  This will prepare Babbl for the release of fully market-ready web and mobile-applications (complete with usage-based subscription capabilities and machine learning models to improve the efficacy/accuracy of our research tools) by early 2022 at the latest, and allow us to engage and capture matching funding. If you made it this far reading through our About page, 
                  thanks for being a part of this journey, and we are looking for all the feedback we can get to make this thing truly valuable to retail investors.</p>
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
            {/* <div className="af-class-simple-footer">
              <div className="af-class-container w-container">
                <div className="af-class-footer-row w-row">
                  <div className="af-class-footer-logo-column-left w-col w-col-3"><img src="images/Untitled-design-15.png" loading="lazy" alt className="af-class-image-4" />
                    <div className="af-class-footer-logo">babbl, LLC</div>
                    <div className="af-class-footer-logo af-class-subtitle">Conquering Due Diligence</div>
                  </div>
                  <div className="af-class-footer-menu-column w-col w-col-6">
                    <a href="about" className="af-class-footer-inline-link">About</a>
                    <a href="pricing" className="af-class-footer-inline-link">Pricing</a>
                    <a href="contact" className="af-class-footer-inline-link">Contact</a>
                  </div>
                  <div className="af-class-footer-social-col-right w-col w-col-3">
                    <a href="http://www.facebook.com" target="_blank" className="af-class-footer-social-icon w-inline-block"><img src="images/Icon-facebook_2.png" alt className="af-class-footer-small-social-icon" /></a>
                    <a href="http://www.twitter.com" target="_blank" className="af-class-footer-social-icon w-inline-block"><img src="images/Icon-twitter.png" alt className="af-class-footer-small-social-icon" /></a>
                    <a href="http://www.google.com" target="_blank" className="af-class-footer-social-icon w-inline-block"><img src="images/Icon-google.png" alt className="af-class-footer-small-social-icon" /></a>
                  </div>
                </div>
              </div>
            </div> */}
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