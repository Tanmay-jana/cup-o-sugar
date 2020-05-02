/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './Header.css'
import Logo from '../../../assets/Logo.png';

export default class Header extends Component {
    state = {
        scrolled: false
      };

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
            <div className = {this.state.scrolled === false ? "header-container": "header-container1"}>
                <img className = "logo" src = {Logo} alt = "logo"/>
                <div className = "link-container">
                    <a href = "#">Home</a>
                    <a href = "#">About</a>
                    <a href = "#">Contact</a>
                </div>
                <div className = {this.state.scrolled === false ?"social-container" : "social-container1"}>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-youtube-play"></i>
                <i className="fa fa-instagram"></i>
                </div>
            </div>
        )
    }
}
