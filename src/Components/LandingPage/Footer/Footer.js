/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-nav">
          <a href="/">Home</a>
          <a href="/about">FAQ</a>
          <a href="/partner">Partner</a>
        </div>
        <div className="footer-media-container">
          <i onClick={() => window.open("https://facebook.com/cuposugarapp", "_blank")} className="fa fa-facebook"></i>
          <i onClick={() => window.open("https://www.linkedin.com/company/cup-o-sugar-inc", "_blank")} className="fa fa-linkedin"></i>
          <i onClick={() => window.open("https://twitter.com/cuposugarapp", "_blank")} className="fa fa-twitter"></i>
          {/* <i onClick={() => window.open("https://instagram.com/cuposugarapp", "_blank")} className="fa fa-youtube-play"></i> */}
          <i onClick={() => window.open("https://instagram.com/cuposugarapp", "_blank")} className="fa fa-instagram"></i>
        </div>
        <div className = "terms-block">
        <a href = "/terms-and-conditions">Terms and Conditions</a>
        <a href = "/privacy">Privacy Policy</a>
        </div>
        {/* <p>Cup O’ Sugar Inc.</p> */}
        <p>Copyright 2020 Cup O’ Sugar Inc.</p>
      </div>
    );
  }
}
