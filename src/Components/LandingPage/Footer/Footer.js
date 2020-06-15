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
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-media-container">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-youtube-play"></i>
          <i className="fa fa-instagram"></i>
        </div>
        <p>Cup O’ Sugar Inc. Terms & Policy</p>
        <p>Copyright 2020</p>
      </div>
    );
  }
}
