import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h6>To Date:</h6>
          </div>
          {/* Column1 */}
          <div className="col">
            <h6>3000+ Articles</h6>
            <h6>Analyzed</h6>
          </div>
          {/* Column1 */}
          <div className="col">
            <h6>1000+ Tickers</h6>
            <h6>With Data</h6>
          </div>
          {/* Column1 */}
          <div className="col">
            <h6>40+ Demo Users</h6>
          </div>
        <hr />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h2>Babbl Logo</h2>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Join Us On These:</h4>
            <ui className="list-unstyled">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Discord</li>
              <li>Substack</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Meet Our Team:</h4>
            <ui className="list-unstyled">
              <li>About Us</li>
              <li>Ramsey Shaffer (Biz)</li>
              <li>Sam Cartford (Dev)</li>
              <li>Jeffrey Arnold (Admin)</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Babbl LLC | All rights reserved |
            Terms Of Service | Investment Disclaimer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;