/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Header.css";
import Logo from "../../../assets/Logo.png";
import LogoWhite from "../../../assets/LogoWhite.png";
import { connect } from "react-redux";
import {topNavOption} from '../../../action/actions';
import {Link} from 'react-router-dom'

class Header extends Component {
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

  mouseScroll = () => {
    const isTop = window.scrollY < 100;
    if (isTop !== true) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.mouseScroll);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.mouseScroll);
  }
  onSelectNav (value) {
    this.props.topNavOption(value)
  }
  render() {
    return (
      <div
        className={
          this.state.scrolled === false
            ? this.props.topNav === "Home"?  "header-container" : "header-container1"
            : "header-container1"
        }
      >
        <a className = "main-logo-link" href = "/"><img className="logo" src={Logo} alt="logo" /></a>
        <a className = "main-logo-white-link" href = "/"><img className="logo-white" src={LogoWhite} alt="logo" /></a>
        <i onClick = {this.isNav} className="fa fa-bars nav-icon"></i>
        <div className={this.state.isNav === true ?"myLinks" : "width-zero"}>
          <Link onClick = {this.onClose} to="/covid">COVID</Link>
          {/* <Link onClick = {this.onClose} to="/">Home</Link> */}
          <Link onClick = {this.onClose} to="/about">FAQ</Link>
          <Link onClick = {this.onClose} to="/contact">Contact</Link>
        </div>
        <div className="link-container">
          <Link onClick = {() => this.onSelectNav("COVID")} className = {this.props.topNav === "COVID"? "top-nav-option":"selected-option"} to="/covid">COVID</Link>
          {/* <Link onClick = {() => this.onSelectNav("Home")} className = {this.props.topNav === "Home"? "top-nav-option":"selected-option"} to="/">Home</Link> */}
          <Link onClick = {() => this.onSelectNav("About")} className = {this.props.topNav === "About"? "top-nav-option":"selected-option"} to="/about">FAQ</Link>
          <Link onClick = {() => this.onSelectNav("Contact")} className = {this.props.topNav === "Contact"? "top-nav-option":"selected-option"} to="/contact">Contact</Link>
        </div>
        <div
          className={
            this.state.scrolled === false
              ? this.props.topNav === "Home" ? "social-container": "social-container1"
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

const mapStateToProps = state => {
  return {
    topNav: state.topNav
  };
};

export default connect(mapStateToProps, {topNavOption})(Header)