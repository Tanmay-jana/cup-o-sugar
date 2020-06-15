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
          {/* <i onClick={() => window.open("https://instagram.com/cuposugarapp", "_blank")} className="fa fa-linkedin"></i> */}
          <i onClick={() => window.open("https://twitter.com/cuposugarappp", "_blank")} className="fa fa-twitter"></i>
          {/* <i onClick={() => window.open("https://instagram.com/cuposugarapp", "_blank")} className="fa fa-youtube-play"></i> */}
          <i onClick={() => window.open("https://instagram.com/cuposugarapp", "_blank")} className="fa fa-instagram"></i>
        </div>
        <p>Cup O’ Sugar Inc. Terms & Policy</p>
        <p>Copyright 2020</p>
      </div>
    );
  }
}
