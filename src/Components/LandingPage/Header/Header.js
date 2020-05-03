/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Header.css";
import Logo from "../../../assets/Logo.png";
import LogoWhite from "../../../assets/LogoWhite.png";

export default class Header extends Component {
  state = {
    scrolled: false,
    isNav: false
  };

  isNav = () => {
    this.setState({isNav: !this.state.isNav})
  }

  onClose = () => {
    this.setState({isNav: false})
  }

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }
  render() {
    return (
      <div
        className={
          this.state.scrolled === false
            ? "header-container"
            : "header-container1"
        }
      >
        <a className = "main-logo-link" href = "/"><img className="logo" src={Logo} alt="logo" /></a>
        <a className = "main-logo-white-link" href = "/"><img className="logo-white" src={LogoWhite} alt="logo" /></a>
        <i onClick = {this.isNav} className="fa fa-bars nav-icon"></i>
        <div className={this.state.isNav === true ?"myLinks" : "invisible"}>
          <a onClick = {this.onClose} href="#">Home</a>
          <a onClick = {this.onClose} href="#">About</a>
          <a onClick = {this.onClose} href="#">Contact</a>
        </div>
        <div className="link-container">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div
          className={
            this.state.scrolled === false
              ? "social-container"
              : "social-container1"
          }
        >
          <i onClick={() => window.open("https://facebook.com", "_blank")} className="fa fa-facebook"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-youtube-play"></i>
          <i className="fa fa-instagram"></i>
        </div>
      </div>
    );
  }
}
